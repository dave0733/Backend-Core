import { PrismaClient, Role } from "@prisma/client";
const prisma = new PrismaClient();

async function addUsers() {
  const users: any = await prisma.users.findRaw();
  return await prisma.$transaction(
    users.map((user: any) => {
      return prisma.user.create({
        data: {
          address: user.address || "",
          email: user.email || "",
          notifications: getNotifications(user),
          oneTimeKey: generateOneTimeKey(),
          role: getRole(user),
          isPriorityUser: !!user.isPriorityuser,
          priorityRank: !!user.isPriorityuser && !!user.rank ? user.rank : -1,
          publicProfile: {
            create: {
              address: user.address || "",
              ens: user.ens || "",
              username: user.username || "",
              description: user.description || "",
              pfp: getProfileImage(user),
              cover: getCoverImage(user),
              metoken: getMetokenObject(user),
            },
          },
        },
      });
    }),
  );
}

async function addOldUsers() {
  const users = await prisma.user.findMany({ include: { publicProfile: true } });
  return await prisma.$transaction(
    users.map((user: any) => {
      return prisma.users.create({
        data: {
          address: user.address || "",
          email: user.email || "",
          notificationPreferences: {},
          isPriorityUser: !!user.isPriorityuser,
          rank: -1,
          metoken: {
            name: user.publicProfile.metoken?.name || "",
            symbol: user.publicProfile.metoken?.symbol || "",
            address: user.publicProfile.metoken?.address || "",
          },
          ens: user.publicProfile.ens || "",
          name: user.publicProfile.username || "",
          description: user.publicProfile.description || "",
          image: {
            original: {
              src: user.publicProfile.pfp,
            },
          },
          background: {
            original: {
              src: user.publicProfile.cover,
            },
          },
        },
      });
    }),
  );
}

async function migrateTransactions() {
  const transactions: any = await prisma.transactions.findRaw();
  return await prisma.$transaction(
    transactions.map((tx: any) => {
      return prisma.transaction.create({
        data: {
          to: tx.to,
          from: tx.from,
          hash: tx.transactionHash,
          chainId: tx.chainId,
          status: tx.status,
          type: tx.type,
        },
      });
    }),
  );
}

try {
  migrateTransactions().then(res => console.log(res));
} catch (error) {
  console.log(error);
}

//
//
//
//
// Utilities

export function generateOneTimeKey() {
  return `${generateRandomString(8)}-${generateRandomString(6)}-${generateRandomString(8)}`;
}

export function generateRandomString(length = 6) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const getNotifications = (user: any) => {
  if (!user.notificationPreferences) return [];
  const arr = Object.entries(user.notificationPreferences)
    .filter(([key, value]) => value)
    .map(([key, value]) => key.toUpperCase());
  return arr;
};

const getRole = (user: any) => {
  if (user.isAdmin) return Role.ADMIN;
  if (getMetokenObject(user)) return Role.USER;
  return Role.GUEST;
};

const getProfileImage = (user: any) => {
  if (user.pfp && user.pfp !== "") return user.pfp;
  if (user.image?.original?.src && user.image?.original?.src !== "") return user.image.original.src;
  return "";
};

const getCoverImage = (user: any) => {
  if (user.cover && user.cover !== "") return user.cover;
  if (user.background?.original?.src && user.background?.original?.src !== "")
    return user.background.original.src;
  return "";
};

const getMetokenObject = (user: any) => {
  return {
    address: user.metoken?.address || "",
    name: user.metoken?.name || "",
    symbol: user.metoken?.symbol || "",
  };
};
