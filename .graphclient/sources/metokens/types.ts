// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace MetokensTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
  Int8: any;
};

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type CollateralToken = {
  id: Scalars['ID'];
};

export type CollateralToken_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CollateralToken_filter>>>;
  or?: InputMaybe<Array<InputMaybe<CollateralToken_filter>>>;
};

export type CollateralToken_orderBy =
  | 'id';

export type Cron = {
  id: Scalars['ID'];
  cron: Scalars['BigInt'];
  currencies: Array<Currency>;
};


export type CroncurrenciesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Currency_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Currency_filter>;
};

export type Cron_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  cron?: InputMaybe<Scalars['BigInt']>;
  cron_not?: InputMaybe<Scalars['BigInt']>;
  cron_gt?: InputMaybe<Scalars['BigInt']>;
  cron_lt?: InputMaybe<Scalars['BigInt']>;
  cron_gte?: InputMaybe<Scalars['BigInt']>;
  cron_lte?: InputMaybe<Scalars['BigInt']>;
  cron_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cron_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currencies?: InputMaybe<Array<Scalars['String']>>;
  currencies_not?: InputMaybe<Array<Scalars['String']>>;
  currencies_contains?: InputMaybe<Array<Scalars['String']>>;
  currencies_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  currencies_not_contains?: InputMaybe<Array<Scalars['String']>>;
  currencies_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  currencies_?: InputMaybe<Currency_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Cron_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Cron_filter>>>;
};

export type Cron_orderBy =
  | 'id'
  | 'cron'
  | 'currencies';

export type Currency = {
  id: Scalars['ID'];
  price?: Maybe<CurrencyPrice>;
  hourly?: Maybe<HourlyCurrencyPriceCandle>;
  daily?: Maybe<DailyCurrencyPriceCandle>;
  monthly?: Maybe<MonthlyCurrencyPriceCandle>;
  hourlyHistory: Array<HourlyCurrencyPriceCandle>;
  dailyHistory: Array<DailyCurrencyPriceCandle>;
  monthlyHistory: Array<MonthlyCurrencyPriceCandle>;
};


export type CurrencyhourlyHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<HourlyCurrencyPriceCandle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<HourlyCurrencyPriceCandle_filter>;
};


export type CurrencydailyHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DailyCurrencyPriceCandle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DailyCurrencyPriceCandle_filter>;
};


export type CurrencymonthlyHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MonthlyCurrencyPriceCandle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MonthlyCurrencyPriceCandle_filter>;
};

export type CurrencyPrice = {
  id: Scalars['ID'];
  currency: Currency;
  price: Scalars['BigDecimal'];
  timestamp: Scalars['BigInt'];
};

export type CurrencyPrice_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  currency?: InputMaybe<Scalars['String']>;
  currency_not?: InputMaybe<Scalars['String']>;
  currency_gt?: InputMaybe<Scalars['String']>;
  currency_lt?: InputMaybe<Scalars['String']>;
  currency_gte?: InputMaybe<Scalars['String']>;
  currency_lte?: InputMaybe<Scalars['String']>;
  currency_in?: InputMaybe<Array<Scalars['String']>>;
  currency_not_in?: InputMaybe<Array<Scalars['String']>>;
  currency_contains?: InputMaybe<Scalars['String']>;
  currency_contains_nocase?: InputMaybe<Scalars['String']>;
  currency_not_contains?: InputMaybe<Scalars['String']>;
  currency_not_contains_nocase?: InputMaybe<Scalars['String']>;
  currency_starts_with?: InputMaybe<Scalars['String']>;
  currency_starts_with_nocase?: InputMaybe<Scalars['String']>;
  currency_not_starts_with?: InputMaybe<Scalars['String']>;
  currency_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  currency_ends_with?: InputMaybe<Scalars['String']>;
  currency_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currency_not_ends_with?: InputMaybe<Scalars['String']>;
  currency_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currency_?: InputMaybe<Currency_filter>;
  price?: InputMaybe<Scalars['BigDecimal']>;
  price_not?: InputMaybe<Scalars['BigDecimal']>;
  price_gt?: InputMaybe<Scalars['BigDecimal']>;
  price_lt?: InputMaybe<Scalars['BigDecimal']>;
  price_gte?: InputMaybe<Scalars['BigDecimal']>;
  price_lte?: InputMaybe<Scalars['BigDecimal']>;
  price_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  price_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CurrencyPrice_filter>>>;
  or?: InputMaybe<Array<InputMaybe<CurrencyPrice_filter>>>;
};

export type CurrencyPrice_orderBy =
  | 'id'
  | 'currency'
  | 'currency__id'
  | 'price'
  | 'timestamp';

export type Currency_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  price?: InputMaybe<Scalars['String']>;
  price_not?: InputMaybe<Scalars['String']>;
  price_gt?: InputMaybe<Scalars['String']>;
  price_lt?: InputMaybe<Scalars['String']>;
  price_gte?: InputMaybe<Scalars['String']>;
  price_lte?: InputMaybe<Scalars['String']>;
  price_in?: InputMaybe<Array<Scalars['String']>>;
  price_not_in?: InputMaybe<Array<Scalars['String']>>;
  price_contains?: InputMaybe<Scalars['String']>;
  price_contains_nocase?: InputMaybe<Scalars['String']>;
  price_not_contains?: InputMaybe<Scalars['String']>;
  price_not_contains_nocase?: InputMaybe<Scalars['String']>;
  price_starts_with?: InputMaybe<Scalars['String']>;
  price_starts_with_nocase?: InputMaybe<Scalars['String']>;
  price_not_starts_with?: InputMaybe<Scalars['String']>;
  price_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  price_ends_with?: InputMaybe<Scalars['String']>;
  price_ends_with_nocase?: InputMaybe<Scalars['String']>;
  price_not_ends_with?: InputMaybe<Scalars['String']>;
  price_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  price_?: InputMaybe<CurrencyPrice_filter>;
  hourly?: InputMaybe<Scalars['String']>;
  hourly_not?: InputMaybe<Scalars['String']>;
  hourly_gt?: InputMaybe<Scalars['String']>;
  hourly_lt?: InputMaybe<Scalars['String']>;
  hourly_gte?: InputMaybe<Scalars['String']>;
  hourly_lte?: InputMaybe<Scalars['String']>;
  hourly_in?: InputMaybe<Array<Scalars['String']>>;
  hourly_not_in?: InputMaybe<Array<Scalars['String']>>;
  hourly_contains?: InputMaybe<Scalars['String']>;
  hourly_contains_nocase?: InputMaybe<Scalars['String']>;
  hourly_not_contains?: InputMaybe<Scalars['String']>;
  hourly_not_contains_nocase?: InputMaybe<Scalars['String']>;
  hourly_starts_with?: InputMaybe<Scalars['String']>;
  hourly_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hourly_not_starts_with?: InputMaybe<Scalars['String']>;
  hourly_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hourly_ends_with?: InputMaybe<Scalars['String']>;
  hourly_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hourly_not_ends_with?: InputMaybe<Scalars['String']>;
  hourly_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hourly_?: InputMaybe<HourlyCurrencyPriceCandle_filter>;
  daily?: InputMaybe<Scalars['String']>;
  daily_not?: InputMaybe<Scalars['String']>;
  daily_gt?: InputMaybe<Scalars['String']>;
  daily_lt?: InputMaybe<Scalars['String']>;
  daily_gte?: InputMaybe<Scalars['String']>;
  daily_lte?: InputMaybe<Scalars['String']>;
  daily_in?: InputMaybe<Array<Scalars['String']>>;
  daily_not_in?: InputMaybe<Array<Scalars['String']>>;
  daily_contains?: InputMaybe<Scalars['String']>;
  daily_contains_nocase?: InputMaybe<Scalars['String']>;
  daily_not_contains?: InputMaybe<Scalars['String']>;
  daily_not_contains_nocase?: InputMaybe<Scalars['String']>;
  daily_starts_with?: InputMaybe<Scalars['String']>;
  daily_starts_with_nocase?: InputMaybe<Scalars['String']>;
  daily_not_starts_with?: InputMaybe<Scalars['String']>;
  daily_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  daily_ends_with?: InputMaybe<Scalars['String']>;
  daily_ends_with_nocase?: InputMaybe<Scalars['String']>;
  daily_not_ends_with?: InputMaybe<Scalars['String']>;
  daily_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  daily_?: InputMaybe<DailyCurrencyPriceCandle_filter>;
  monthly?: InputMaybe<Scalars['String']>;
  monthly_not?: InputMaybe<Scalars['String']>;
  monthly_gt?: InputMaybe<Scalars['String']>;
  monthly_lt?: InputMaybe<Scalars['String']>;
  monthly_gte?: InputMaybe<Scalars['String']>;
  monthly_lte?: InputMaybe<Scalars['String']>;
  monthly_in?: InputMaybe<Array<Scalars['String']>>;
  monthly_not_in?: InputMaybe<Array<Scalars['String']>>;
  monthly_contains?: InputMaybe<Scalars['String']>;
  monthly_contains_nocase?: InputMaybe<Scalars['String']>;
  monthly_not_contains?: InputMaybe<Scalars['String']>;
  monthly_not_contains_nocase?: InputMaybe<Scalars['String']>;
  monthly_starts_with?: InputMaybe<Scalars['String']>;
  monthly_starts_with_nocase?: InputMaybe<Scalars['String']>;
  monthly_not_starts_with?: InputMaybe<Scalars['String']>;
  monthly_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  monthly_ends_with?: InputMaybe<Scalars['String']>;
  monthly_ends_with_nocase?: InputMaybe<Scalars['String']>;
  monthly_not_ends_with?: InputMaybe<Scalars['String']>;
  monthly_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  monthly_?: InputMaybe<MonthlyCurrencyPriceCandle_filter>;
  hourlyHistory_?: InputMaybe<HourlyCurrencyPriceCandle_filter>;
  dailyHistory_?: InputMaybe<DailyCurrencyPriceCandle_filter>;
  monthlyHistory_?: InputMaybe<MonthlyCurrencyPriceCandle_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Currency_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Currency_filter>>>;
};

export type Currency_orderBy =
  | 'id'
  | 'price'
  | 'price__id'
  | 'price__price'
  | 'price__timestamp'
  | 'hourly'
  | 'hourly__id'
  | 'hourly__from'
  | 'hourly__to'
  | 'hourly__open'
  | 'hourly__close'
  | 'hourly__low'
  | 'hourly__high'
  | 'daily'
  | 'daily__id'
  | 'daily__from'
  | 'daily__to'
  | 'daily__open'
  | 'daily__close'
  | 'daily__low'
  | 'daily__high'
  | 'monthly'
  | 'monthly__id'
  | 'monthly__from'
  | 'monthly__to'
  | 'monthly__open'
  | 'monthly__close'
  | 'monthly__low'
  | 'monthly__high'
  | 'hourlyHistory'
  | 'dailyHistory'
  | 'monthlyHistory';

export type DailyCurrencyPriceCandle = {
  id: Scalars['ID'];
  currency: Currency;
  group: DailyPriceCandleGroup;
  from: Scalars['BigInt'];
  to: Scalars['BigInt'];
  open: Scalars['BigDecimal'];
  openRef: CurrencyPrice;
  close: Scalars['BigDecimal'];
  closeRef: CurrencyPrice;
  low: Scalars['BigDecimal'];
  lowRef: CurrencyPrice;
  high: Scalars['BigDecimal'];
  highRef: CurrencyPrice;
};

export type DailyCurrencyPriceCandle_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  currency?: InputMaybe<Scalars['String']>;
  currency_not?: InputMaybe<Scalars['String']>;
  currency_gt?: InputMaybe<Scalars['String']>;
  currency_lt?: InputMaybe<Scalars['String']>;
  currency_gte?: InputMaybe<Scalars['String']>;
  currency_lte?: InputMaybe<Scalars['String']>;
  currency_in?: InputMaybe<Array<Scalars['String']>>;
  currency_not_in?: InputMaybe<Array<Scalars['String']>>;
  currency_contains?: InputMaybe<Scalars['String']>;
  currency_contains_nocase?: InputMaybe<Scalars['String']>;
  currency_not_contains?: InputMaybe<Scalars['String']>;
  currency_not_contains_nocase?: InputMaybe<Scalars['String']>;
  currency_starts_with?: InputMaybe<Scalars['String']>;
  currency_starts_with_nocase?: InputMaybe<Scalars['String']>;
  currency_not_starts_with?: InputMaybe<Scalars['String']>;
  currency_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  currency_ends_with?: InputMaybe<Scalars['String']>;
  currency_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currency_not_ends_with?: InputMaybe<Scalars['String']>;
  currency_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currency_?: InputMaybe<Currency_filter>;
  group?: InputMaybe<Scalars['String']>;
  group_not?: InputMaybe<Scalars['String']>;
  group_gt?: InputMaybe<Scalars['String']>;
  group_lt?: InputMaybe<Scalars['String']>;
  group_gte?: InputMaybe<Scalars['String']>;
  group_lte?: InputMaybe<Scalars['String']>;
  group_in?: InputMaybe<Array<Scalars['String']>>;
  group_not_in?: InputMaybe<Array<Scalars['String']>>;
  group_contains?: InputMaybe<Scalars['String']>;
  group_contains_nocase?: InputMaybe<Scalars['String']>;
  group_not_contains?: InputMaybe<Scalars['String']>;
  group_not_contains_nocase?: InputMaybe<Scalars['String']>;
  group_starts_with?: InputMaybe<Scalars['String']>;
  group_starts_with_nocase?: InputMaybe<Scalars['String']>;
  group_not_starts_with?: InputMaybe<Scalars['String']>;
  group_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  group_ends_with?: InputMaybe<Scalars['String']>;
  group_ends_with_nocase?: InputMaybe<Scalars['String']>;
  group_not_ends_with?: InputMaybe<Scalars['String']>;
  group_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  group_?: InputMaybe<DailyPriceCandleGroup_filter>;
  from?: InputMaybe<Scalars['BigInt']>;
  from_not?: InputMaybe<Scalars['BigInt']>;
  from_gt?: InputMaybe<Scalars['BigInt']>;
  from_lt?: InputMaybe<Scalars['BigInt']>;
  from_gte?: InputMaybe<Scalars['BigInt']>;
  from_lte?: InputMaybe<Scalars['BigInt']>;
  from_in?: InputMaybe<Array<Scalars['BigInt']>>;
  from_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<Scalars['BigInt']>;
  to_not?: InputMaybe<Scalars['BigInt']>;
  to_gt?: InputMaybe<Scalars['BigInt']>;
  to_lt?: InputMaybe<Scalars['BigInt']>;
  to_gte?: InputMaybe<Scalars['BigInt']>;
  to_lte?: InputMaybe<Scalars['BigInt']>;
  to_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  open?: InputMaybe<Scalars['BigDecimal']>;
  open_not?: InputMaybe<Scalars['BigDecimal']>;
  open_gt?: InputMaybe<Scalars['BigDecimal']>;
  open_lt?: InputMaybe<Scalars['BigDecimal']>;
  open_gte?: InputMaybe<Scalars['BigDecimal']>;
  open_lte?: InputMaybe<Scalars['BigDecimal']>;
  open_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  open_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  openRef?: InputMaybe<Scalars['String']>;
  openRef_not?: InputMaybe<Scalars['String']>;
  openRef_gt?: InputMaybe<Scalars['String']>;
  openRef_lt?: InputMaybe<Scalars['String']>;
  openRef_gte?: InputMaybe<Scalars['String']>;
  openRef_lte?: InputMaybe<Scalars['String']>;
  openRef_in?: InputMaybe<Array<Scalars['String']>>;
  openRef_not_in?: InputMaybe<Array<Scalars['String']>>;
  openRef_contains?: InputMaybe<Scalars['String']>;
  openRef_contains_nocase?: InputMaybe<Scalars['String']>;
  openRef_not_contains?: InputMaybe<Scalars['String']>;
  openRef_not_contains_nocase?: InputMaybe<Scalars['String']>;
  openRef_starts_with?: InputMaybe<Scalars['String']>;
  openRef_starts_with_nocase?: InputMaybe<Scalars['String']>;
  openRef_not_starts_with?: InputMaybe<Scalars['String']>;
  openRef_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  openRef_ends_with?: InputMaybe<Scalars['String']>;
  openRef_ends_with_nocase?: InputMaybe<Scalars['String']>;
  openRef_not_ends_with?: InputMaybe<Scalars['String']>;
  openRef_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  openRef_?: InputMaybe<CurrencyPrice_filter>;
  close?: InputMaybe<Scalars['BigDecimal']>;
  close_not?: InputMaybe<Scalars['BigDecimal']>;
  close_gt?: InputMaybe<Scalars['BigDecimal']>;
  close_lt?: InputMaybe<Scalars['BigDecimal']>;
  close_gte?: InputMaybe<Scalars['BigDecimal']>;
  close_lte?: InputMaybe<Scalars['BigDecimal']>;
  close_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  close_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  closeRef?: InputMaybe<Scalars['String']>;
  closeRef_not?: InputMaybe<Scalars['String']>;
  closeRef_gt?: InputMaybe<Scalars['String']>;
  closeRef_lt?: InputMaybe<Scalars['String']>;
  closeRef_gte?: InputMaybe<Scalars['String']>;
  closeRef_lte?: InputMaybe<Scalars['String']>;
  closeRef_in?: InputMaybe<Array<Scalars['String']>>;
  closeRef_not_in?: InputMaybe<Array<Scalars['String']>>;
  closeRef_contains?: InputMaybe<Scalars['String']>;
  closeRef_contains_nocase?: InputMaybe<Scalars['String']>;
  closeRef_not_contains?: InputMaybe<Scalars['String']>;
  closeRef_not_contains_nocase?: InputMaybe<Scalars['String']>;
  closeRef_starts_with?: InputMaybe<Scalars['String']>;
  closeRef_starts_with_nocase?: InputMaybe<Scalars['String']>;
  closeRef_not_starts_with?: InputMaybe<Scalars['String']>;
  closeRef_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  closeRef_ends_with?: InputMaybe<Scalars['String']>;
  closeRef_ends_with_nocase?: InputMaybe<Scalars['String']>;
  closeRef_not_ends_with?: InputMaybe<Scalars['String']>;
  closeRef_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  closeRef_?: InputMaybe<CurrencyPrice_filter>;
  low?: InputMaybe<Scalars['BigDecimal']>;
  low_not?: InputMaybe<Scalars['BigDecimal']>;
  low_gt?: InputMaybe<Scalars['BigDecimal']>;
  low_lt?: InputMaybe<Scalars['BigDecimal']>;
  low_gte?: InputMaybe<Scalars['BigDecimal']>;
  low_lte?: InputMaybe<Scalars['BigDecimal']>;
  low_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  low_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  lowRef?: InputMaybe<Scalars['String']>;
  lowRef_not?: InputMaybe<Scalars['String']>;
  lowRef_gt?: InputMaybe<Scalars['String']>;
  lowRef_lt?: InputMaybe<Scalars['String']>;
  lowRef_gte?: InputMaybe<Scalars['String']>;
  lowRef_lte?: InputMaybe<Scalars['String']>;
  lowRef_in?: InputMaybe<Array<Scalars['String']>>;
  lowRef_not_in?: InputMaybe<Array<Scalars['String']>>;
  lowRef_contains?: InputMaybe<Scalars['String']>;
  lowRef_contains_nocase?: InputMaybe<Scalars['String']>;
  lowRef_not_contains?: InputMaybe<Scalars['String']>;
  lowRef_not_contains_nocase?: InputMaybe<Scalars['String']>;
  lowRef_starts_with?: InputMaybe<Scalars['String']>;
  lowRef_starts_with_nocase?: InputMaybe<Scalars['String']>;
  lowRef_not_starts_with?: InputMaybe<Scalars['String']>;
  lowRef_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  lowRef_ends_with?: InputMaybe<Scalars['String']>;
  lowRef_ends_with_nocase?: InputMaybe<Scalars['String']>;
  lowRef_not_ends_with?: InputMaybe<Scalars['String']>;
  lowRef_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  lowRef_?: InputMaybe<CurrencyPrice_filter>;
  high?: InputMaybe<Scalars['BigDecimal']>;
  high_not?: InputMaybe<Scalars['BigDecimal']>;
  high_gt?: InputMaybe<Scalars['BigDecimal']>;
  high_lt?: InputMaybe<Scalars['BigDecimal']>;
  high_gte?: InputMaybe<Scalars['BigDecimal']>;
  high_lte?: InputMaybe<Scalars['BigDecimal']>;
  high_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  high_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  highRef?: InputMaybe<Scalars['String']>;
  highRef_not?: InputMaybe<Scalars['String']>;
  highRef_gt?: InputMaybe<Scalars['String']>;
  highRef_lt?: InputMaybe<Scalars['String']>;
  highRef_gte?: InputMaybe<Scalars['String']>;
  highRef_lte?: InputMaybe<Scalars['String']>;
  highRef_in?: InputMaybe<Array<Scalars['String']>>;
  highRef_not_in?: InputMaybe<Array<Scalars['String']>>;
  highRef_contains?: InputMaybe<Scalars['String']>;
  highRef_contains_nocase?: InputMaybe<Scalars['String']>;
  highRef_not_contains?: InputMaybe<Scalars['String']>;
  highRef_not_contains_nocase?: InputMaybe<Scalars['String']>;
  highRef_starts_with?: InputMaybe<Scalars['String']>;
  highRef_starts_with_nocase?: InputMaybe<Scalars['String']>;
  highRef_not_starts_with?: InputMaybe<Scalars['String']>;
  highRef_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  highRef_ends_with?: InputMaybe<Scalars['String']>;
  highRef_ends_with_nocase?: InputMaybe<Scalars['String']>;
  highRef_not_ends_with?: InputMaybe<Scalars['String']>;
  highRef_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  highRef_?: InputMaybe<CurrencyPrice_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DailyCurrencyPriceCandle_filter>>>;
  or?: InputMaybe<Array<InputMaybe<DailyCurrencyPriceCandle_filter>>>;
};

export type DailyCurrencyPriceCandle_orderBy =
  | 'id'
  | 'currency'
  | 'currency__id'
  | 'group'
  | 'group__id'
  | 'group__from'
  | 'group__to'
  | 'from'
  | 'to'
  | 'open'
  | 'openRef'
  | 'openRef__id'
  | 'openRef__price'
  | 'openRef__timestamp'
  | 'close'
  | 'closeRef'
  | 'closeRef__id'
  | 'closeRef__price'
  | 'closeRef__timestamp'
  | 'low'
  | 'lowRef'
  | 'lowRef__id'
  | 'lowRef__price'
  | 'lowRef__timestamp'
  | 'high'
  | 'highRef'
  | 'highRef__id'
  | 'highRef__price'
  | 'highRef__timestamp';

export type DailyMeTokenState = PeriodicMeTokenStateInterface & {
  id: Scalars['ID'];
  metoken: MeToken;
  start: Scalars['BigInt'];
  end: Scalars['BigInt'];
  first: MeTokenState;
  last: MeTokenState;
};

export type DailyMeTokenState_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  metoken?: InputMaybe<Scalars['String']>;
  metoken_not?: InputMaybe<Scalars['String']>;
  metoken_gt?: InputMaybe<Scalars['String']>;
  metoken_lt?: InputMaybe<Scalars['String']>;
  metoken_gte?: InputMaybe<Scalars['String']>;
  metoken_lte?: InputMaybe<Scalars['String']>;
  metoken_in?: InputMaybe<Array<Scalars['String']>>;
  metoken_not_in?: InputMaybe<Array<Scalars['String']>>;
  metoken_contains?: InputMaybe<Scalars['String']>;
  metoken_contains_nocase?: InputMaybe<Scalars['String']>;
  metoken_not_contains?: InputMaybe<Scalars['String']>;
  metoken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  metoken_starts_with?: InputMaybe<Scalars['String']>;
  metoken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metoken_not_starts_with?: InputMaybe<Scalars['String']>;
  metoken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metoken_ends_with?: InputMaybe<Scalars['String']>;
  metoken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metoken_not_ends_with?: InputMaybe<Scalars['String']>;
  metoken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metoken_?: InputMaybe<MeToken_filter>;
  start?: InputMaybe<Scalars['BigInt']>;
  start_not?: InputMaybe<Scalars['BigInt']>;
  start_gt?: InputMaybe<Scalars['BigInt']>;
  start_lt?: InputMaybe<Scalars['BigInt']>;
  start_gte?: InputMaybe<Scalars['BigInt']>;
  start_lte?: InputMaybe<Scalars['BigInt']>;
  start_in?: InputMaybe<Array<Scalars['BigInt']>>;
  start_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  end?: InputMaybe<Scalars['BigInt']>;
  end_not?: InputMaybe<Scalars['BigInt']>;
  end_gt?: InputMaybe<Scalars['BigInt']>;
  end_lt?: InputMaybe<Scalars['BigInt']>;
  end_gte?: InputMaybe<Scalars['BigInt']>;
  end_lte?: InputMaybe<Scalars['BigInt']>;
  end_in?: InputMaybe<Array<Scalars['BigInt']>>;
  end_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  first?: InputMaybe<Scalars['String']>;
  first_not?: InputMaybe<Scalars['String']>;
  first_gt?: InputMaybe<Scalars['String']>;
  first_lt?: InputMaybe<Scalars['String']>;
  first_gte?: InputMaybe<Scalars['String']>;
  first_lte?: InputMaybe<Scalars['String']>;
  first_in?: InputMaybe<Array<Scalars['String']>>;
  first_not_in?: InputMaybe<Array<Scalars['String']>>;
  first_contains?: InputMaybe<Scalars['String']>;
  first_contains_nocase?: InputMaybe<Scalars['String']>;
  first_not_contains?: InputMaybe<Scalars['String']>;
  first_not_contains_nocase?: InputMaybe<Scalars['String']>;
  first_starts_with?: InputMaybe<Scalars['String']>;
  first_starts_with_nocase?: InputMaybe<Scalars['String']>;
  first_not_starts_with?: InputMaybe<Scalars['String']>;
  first_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  first_ends_with?: InputMaybe<Scalars['String']>;
  first_ends_with_nocase?: InputMaybe<Scalars['String']>;
  first_not_ends_with?: InputMaybe<Scalars['String']>;
  first_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  first_?: InputMaybe<MeTokenState_filter>;
  last?: InputMaybe<Scalars['String']>;
  last_not?: InputMaybe<Scalars['String']>;
  last_gt?: InputMaybe<Scalars['String']>;
  last_lt?: InputMaybe<Scalars['String']>;
  last_gte?: InputMaybe<Scalars['String']>;
  last_lte?: InputMaybe<Scalars['String']>;
  last_in?: InputMaybe<Array<Scalars['String']>>;
  last_not_in?: InputMaybe<Array<Scalars['String']>>;
  last_contains?: InputMaybe<Scalars['String']>;
  last_contains_nocase?: InputMaybe<Scalars['String']>;
  last_not_contains?: InputMaybe<Scalars['String']>;
  last_not_contains_nocase?: InputMaybe<Scalars['String']>;
  last_starts_with?: InputMaybe<Scalars['String']>;
  last_starts_with_nocase?: InputMaybe<Scalars['String']>;
  last_not_starts_with?: InputMaybe<Scalars['String']>;
  last_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  last_ends_with?: InputMaybe<Scalars['String']>;
  last_ends_with_nocase?: InputMaybe<Scalars['String']>;
  last_not_ends_with?: InputMaybe<Scalars['String']>;
  last_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  last_?: InputMaybe<MeTokenState_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DailyMeTokenState_filter>>>;
  or?: InputMaybe<Array<InputMaybe<DailyMeTokenState_filter>>>;
};

export type DailyMeTokenState_orderBy =
  | 'id'
  | 'metoken'
  | 'metoken__id'
  | 'metoken__createdAt'
  | 'metoken__name'
  | 'metoken__symbol'
  | 'start'
  | 'end'
  | 'first'
  | 'first__id'
  | 'first__balanceLocked'
  | 'first__balancePooled'
  | 'first__currentRate'
  | 'first__buyRate'
  | 'first__sellRate'
  | 'first__spendRate'
  | 'first__supply'
  | 'first__timestamp'
  | 'first__totalHolders'
  | 'first__tvl'
  | 'last'
  | 'last__id'
  | 'last__balanceLocked'
  | 'last__balancePooled'
  | 'last__currentRate'
  | 'last__buyRate'
  | 'last__sellRate'
  | 'last__spendRate'
  | 'last__supply'
  | 'last__timestamp'
  | 'last__totalHolders'
  | 'last__tvl';

export type DailyPriceCandleGroup = {
  id: Scalars['ID'];
  from: Scalars['BigInt'];
  to: Scalars['BigInt'];
  currencyCandles: Array<DailyCurrencyPriceCandle>;
};


export type DailyPriceCandleGroupcurrencyCandlesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DailyCurrencyPriceCandle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DailyCurrencyPriceCandle_filter>;
};

export type DailyPriceCandleGroup_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  from?: InputMaybe<Scalars['BigInt']>;
  from_not?: InputMaybe<Scalars['BigInt']>;
  from_gt?: InputMaybe<Scalars['BigInt']>;
  from_lt?: InputMaybe<Scalars['BigInt']>;
  from_gte?: InputMaybe<Scalars['BigInt']>;
  from_lte?: InputMaybe<Scalars['BigInt']>;
  from_in?: InputMaybe<Array<Scalars['BigInt']>>;
  from_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<Scalars['BigInt']>;
  to_not?: InputMaybe<Scalars['BigInt']>;
  to_gt?: InputMaybe<Scalars['BigInt']>;
  to_lt?: InputMaybe<Scalars['BigInt']>;
  to_gte?: InputMaybe<Scalars['BigInt']>;
  to_lte?: InputMaybe<Scalars['BigInt']>;
  to_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currencyCandles_?: InputMaybe<DailyCurrencyPriceCandle_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DailyPriceCandleGroup_filter>>>;
  or?: InputMaybe<Array<InputMaybe<DailyPriceCandleGroup_filter>>>;
};

export type DailyPriceCandleGroup_orderBy =
  | 'id'
  | 'from'
  | 'to'
  | 'currencyCandles';

export type EACAggregatorProxy = {
  id: Scalars['ID'];
  aggregator: Scalars['String'];
  currency?: Maybe<Currency>;
};

export type EACAggregatorProxy_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  aggregator?: InputMaybe<Scalars['String']>;
  aggregator_not?: InputMaybe<Scalars['String']>;
  aggregator_gt?: InputMaybe<Scalars['String']>;
  aggregator_lt?: InputMaybe<Scalars['String']>;
  aggregator_gte?: InputMaybe<Scalars['String']>;
  aggregator_lte?: InputMaybe<Scalars['String']>;
  aggregator_in?: InputMaybe<Array<Scalars['String']>>;
  aggregator_not_in?: InputMaybe<Array<Scalars['String']>>;
  aggregator_contains?: InputMaybe<Scalars['String']>;
  aggregator_contains_nocase?: InputMaybe<Scalars['String']>;
  aggregator_not_contains?: InputMaybe<Scalars['String']>;
  aggregator_not_contains_nocase?: InputMaybe<Scalars['String']>;
  aggregator_starts_with?: InputMaybe<Scalars['String']>;
  aggregator_starts_with_nocase?: InputMaybe<Scalars['String']>;
  aggregator_not_starts_with?: InputMaybe<Scalars['String']>;
  aggregator_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  aggregator_ends_with?: InputMaybe<Scalars['String']>;
  aggregator_ends_with_nocase?: InputMaybe<Scalars['String']>;
  aggregator_not_ends_with?: InputMaybe<Scalars['String']>;
  aggregator_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Scalars['String']>;
  currency_not?: InputMaybe<Scalars['String']>;
  currency_gt?: InputMaybe<Scalars['String']>;
  currency_lt?: InputMaybe<Scalars['String']>;
  currency_gte?: InputMaybe<Scalars['String']>;
  currency_lte?: InputMaybe<Scalars['String']>;
  currency_in?: InputMaybe<Array<Scalars['String']>>;
  currency_not_in?: InputMaybe<Array<Scalars['String']>>;
  currency_contains?: InputMaybe<Scalars['String']>;
  currency_contains_nocase?: InputMaybe<Scalars['String']>;
  currency_not_contains?: InputMaybe<Scalars['String']>;
  currency_not_contains_nocase?: InputMaybe<Scalars['String']>;
  currency_starts_with?: InputMaybe<Scalars['String']>;
  currency_starts_with_nocase?: InputMaybe<Scalars['String']>;
  currency_not_starts_with?: InputMaybe<Scalars['String']>;
  currency_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  currency_ends_with?: InputMaybe<Scalars['String']>;
  currency_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currency_not_ends_with?: InputMaybe<Scalars['String']>;
  currency_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currency_?: InputMaybe<Currency_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EACAggregatorProxy_filter>>>;
  or?: InputMaybe<Array<InputMaybe<EACAggregatorProxy_filter>>>;
};

export type EACAggregatorProxy_orderBy =
  | 'id'
  | 'aggregator'
  | 'currency'
  | 'currency__id';

export type Holding = {
  id: Scalars['ID'];
  amount: Scalars['BigDecimal'];
  since: Scalars['BigInt'];
  state: HoldingState;
  stateHistory?: Maybe<Array<HoldingState>>;
  user: User;
  token: MeToken;
};


export type HoldingstateHistoryArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<HoldingState_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<HoldingState_filter>;
};

export type HoldingState = {
  id: Scalars['ID'];
  amount: Scalars['BigDecimal'];
  holding: Holding;
  timestamp: Scalars['BigInt'];
  token: MeToken;
  tokenState?: Maybe<MeTokenState>;
  user: User;
};

export type HoldingState_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  amount?: InputMaybe<Scalars['BigDecimal']>;
  amount_not?: InputMaybe<Scalars['BigDecimal']>;
  amount_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  holding?: InputMaybe<Scalars['String']>;
  holding_not?: InputMaybe<Scalars['String']>;
  holding_gt?: InputMaybe<Scalars['String']>;
  holding_lt?: InputMaybe<Scalars['String']>;
  holding_gte?: InputMaybe<Scalars['String']>;
  holding_lte?: InputMaybe<Scalars['String']>;
  holding_in?: InputMaybe<Array<Scalars['String']>>;
  holding_not_in?: InputMaybe<Array<Scalars['String']>>;
  holding_contains?: InputMaybe<Scalars['String']>;
  holding_contains_nocase?: InputMaybe<Scalars['String']>;
  holding_not_contains?: InputMaybe<Scalars['String']>;
  holding_not_contains_nocase?: InputMaybe<Scalars['String']>;
  holding_starts_with?: InputMaybe<Scalars['String']>;
  holding_starts_with_nocase?: InputMaybe<Scalars['String']>;
  holding_not_starts_with?: InputMaybe<Scalars['String']>;
  holding_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  holding_ends_with?: InputMaybe<Scalars['String']>;
  holding_ends_with_nocase?: InputMaybe<Scalars['String']>;
  holding_not_ends_with?: InputMaybe<Scalars['String']>;
  holding_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  holding_?: InputMaybe<Holding_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<MeToken_filter>;
  tokenState?: InputMaybe<Scalars['String']>;
  tokenState_not?: InputMaybe<Scalars['String']>;
  tokenState_gt?: InputMaybe<Scalars['String']>;
  tokenState_lt?: InputMaybe<Scalars['String']>;
  tokenState_gte?: InputMaybe<Scalars['String']>;
  tokenState_lte?: InputMaybe<Scalars['String']>;
  tokenState_in?: InputMaybe<Array<Scalars['String']>>;
  tokenState_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenState_contains?: InputMaybe<Scalars['String']>;
  tokenState_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenState_not_contains?: InputMaybe<Scalars['String']>;
  tokenState_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenState_starts_with?: InputMaybe<Scalars['String']>;
  tokenState_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenState_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenState_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenState_ends_with?: InputMaybe<Scalars['String']>;
  tokenState_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenState_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenState_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenState_?: InputMaybe<MeTokenState_filter>;
  user?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_?: InputMaybe<User_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<HoldingState_filter>>>;
  or?: InputMaybe<Array<InputMaybe<HoldingState_filter>>>;
};

export type HoldingState_orderBy =
  | 'id'
  | 'amount'
  | 'holding'
  | 'holding__id'
  | 'holding__amount'
  | 'holding__since'
  | 'timestamp'
  | 'token'
  | 'token__id'
  | 'token__createdAt'
  | 'token__name'
  | 'token__symbol'
  | 'tokenState'
  | 'tokenState__id'
  | 'tokenState__balanceLocked'
  | 'tokenState__balancePooled'
  | 'tokenState__currentRate'
  | 'tokenState__buyRate'
  | 'tokenState__sellRate'
  | 'tokenState__spendRate'
  | 'tokenState__supply'
  | 'tokenState__timestamp'
  | 'tokenState__totalHolders'
  | 'tokenState__tvl'
  | 'user'
  | 'user__id'
  | 'user__totalHoldings';

export type Holding_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  amount?: InputMaybe<Scalars['BigDecimal']>;
  amount_not?: InputMaybe<Scalars['BigDecimal']>;
  amount_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  since?: InputMaybe<Scalars['BigInt']>;
  since_not?: InputMaybe<Scalars['BigInt']>;
  since_gt?: InputMaybe<Scalars['BigInt']>;
  since_lt?: InputMaybe<Scalars['BigInt']>;
  since_gte?: InputMaybe<Scalars['BigInt']>;
  since_lte?: InputMaybe<Scalars['BigInt']>;
  since_in?: InputMaybe<Array<Scalars['BigInt']>>;
  since_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  state?: InputMaybe<Scalars['String']>;
  state_not?: InputMaybe<Scalars['String']>;
  state_gt?: InputMaybe<Scalars['String']>;
  state_lt?: InputMaybe<Scalars['String']>;
  state_gte?: InputMaybe<Scalars['String']>;
  state_lte?: InputMaybe<Scalars['String']>;
  state_in?: InputMaybe<Array<Scalars['String']>>;
  state_not_in?: InputMaybe<Array<Scalars['String']>>;
  state_contains?: InputMaybe<Scalars['String']>;
  state_contains_nocase?: InputMaybe<Scalars['String']>;
  state_not_contains?: InputMaybe<Scalars['String']>;
  state_not_contains_nocase?: InputMaybe<Scalars['String']>;
  state_starts_with?: InputMaybe<Scalars['String']>;
  state_starts_with_nocase?: InputMaybe<Scalars['String']>;
  state_not_starts_with?: InputMaybe<Scalars['String']>;
  state_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  state_ends_with?: InputMaybe<Scalars['String']>;
  state_ends_with_nocase?: InputMaybe<Scalars['String']>;
  state_not_ends_with?: InputMaybe<Scalars['String']>;
  state_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  state_?: InputMaybe<HoldingState_filter>;
  stateHistory_?: InputMaybe<HoldingState_filter>;
  user?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_?: InputMaybe<User_filter>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<MeToken_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Holding_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Holding_filter>>>;
};

export type Holding_orderBy =
  | 'id'
  | 'amount'
  | 'since'
  | 'state'
  | 'state__id'
  | 'state__amount'
  | 'state__timestamp'
  | 'stateHistory'
  | 'user'
  | 'user__id'
  | 'user__totalHoldings'
  | 'token'
  | 'token__id'
  | 'token__createdAt'
  | 'token__name'
  | 'token__symbol';

export type HourlyCurrencyPriceCandle = {
  id: Scalars['ID'];
  currency: Currency;
  group: HourlyPriceCandleGroup;
  from: Scalars['BigInt'];
  to: Scalars['BigInt'];
  open: Scalars['BigDecimal'];
  openRef: CurrencyPrice;
  close: Scalars['BigDecimal'];
  closeRef: CurrencyPrice;
  low: Scalars['BigDecimal'];
  lowRef: CurrencyPrice;
  high: Scalars['BigDecimal'];
  highRef: CurrencyPrice;
};

export type HourlyCurrencyPriceCandle_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  currency?: InputMaybe<Scalars['String']>;
  currency_not?: InputMaybe<Scalars['String']>;
  currency_gt?: InputMaybe<Scalars['String']>;
  currency_lt?: InputMaybe<Scalars['String']>;
  currency_gte?: InputMaybe<Scalars['String']>;
  currency_lte?: InputMaybe<Scalars['String']>;
  currency_in?: InputMaybe<Array<Scalars['String']>>;
  currency_not_in?: InputMaybe<Array<Scalars['String']>>;
  currency_contains?: InputMaybe<Scalars['String']>;
  currency_contains_nocase?: InputMaybe<Scalars['String']>;
  currency_not_contains?: InputMaybe<Scalars['String']>;
  currency_not_contains_nocase?: InputMaybe<Scalars['String']>;
  currency_starts_with?: InputMaybe<Scalars['String']>;
  currency_starts_with_nocase?: InputMaybe<Scalars['String']>;
  currency_not_starts_with?: InputMaybe<Scalars['String']>;
  currency_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  currency_ends_with?: InputMaybe<Scalars['String']>;
  currency_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currency_not_ends_with?: InputMaybe<Scalars['String']>;
  currency_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currency_?: InputMaybe<Currency_filter>;
  group?: InputMaybe<Scalars['String']>;
  group_not?: InputMaybe<Scalars['String']>;
  group_gt?: InputMaybe<Scalars['String']>;
  group_lt?: InputMaybe<Scalars['String']>;
  group_gte?: InputMaybe<Scalars['String']>;
  group_lte?: InputMaybe<Scalars['String']>;
  group_in?: InputMaybe<Array<Scalars['String']>>;
  group_not_in?: InputMaybe<Array<Scalars['String']>>;
  group_contains?: InputMaybe<Scalars['String']>;
  group_contains_nocase?: InputMaybe<Scalars['String']>;
  group_not_contains?: InputMaybe<Scalars['String']>;
  group_not_contains_nocase?: InputMaybe<Scalars['String']>;
  group_starts_with?: InputMaybe<Scalars['String']>;
  group_starts_with_nocase?: InputMaybe<Scalars['String']>;
  group_not_starts_with?: InputMaybe<Scalars['String']>;
  group_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  group_ends_with?: InputMaybe<Scalars['String']>;
  group_ends_with_nocase?: InputMaybe<Scalars['String']>;
  group_not_ends_with?: InputMaybe<Scalars['String']>;
  group_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  group_?: InputMaybe<HourlyPriceCandleGroup_filter>;
  from?: InputMaybe<Scalars['BigInt']>;
  from_not?: InputMaybe<Scalars['BigInt']>;
  from_gt?: InputMaybe<Scalars['BigInt']>;
  from_lt?: InputMaybe<Scalars['BigInt']>;
  from_gte?: InputMaybe<Scalars['BigInt']>;
  from_lte?: InputMaybe<Scalars['BigInt']>;
  from_in?: InputMaybe<Array<Scalars['BigInt']>>;
  from_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<Scalars['BigInt']>;
  to_not?: InputMaybe<Scalars['BigInt']>;
  to_gt?: InputMaybe<Scalars['BigInt']>;
  to_lt?: InputMaybe<Scalars['BigInt']>;
  to_gte?: InputMaybe<Scalars['BigInt']>;
  to_lte?: InputMaybe<Scalars['BigInt']>;
  to_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  open?: InputMaybe<Scalars['BigDecimal']>;
  open_not?: InputMaybe<Scalars['BigDecimal']>;
  open_gt?: InputMaybe<Scalars['BigDecimal']>;
  open_lt?: InputMaybe<Scalars['BigDecimal']>;
  open_gte?: InputMaybe<Scalars['BigDecimal']>;
  open_lte?: InputMaybe<Scalars['BigDecimal']>;
  open_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  open_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  openRef?: InputMaybe<Scalars['String']>;
  openRef_not?: InputMaybe<Scalars['String']>;
  openRef_gt?: InputMaybe<Scalars['String']>;
  openRef_lt?: InputMaybe<Scalars['String']>;
  openRef_gte?: InputMaybe<Scalars['String']>;
  openRef_lte?: InputMaybe<Scalars['String']>;
  openRef_in?: InputMaybe<Array<Scalars['String']>>;
  openRef_not_in?: InputMaybe<Array<Scalars['String']>>;
  openRef_contains?: InputMaybe<Scalars['String']>;
  openRef_contains_nocase?: InputMaybe<Scalars['String']>;
  openRef_not_contains?: InputMaybe<Scalars['String']>;
  openRef_not_contains_nocase?: InputMaybe<Scalars['String']>;
  openRef_starts_with?: InputMaybe<Scalars['String']>;
  openRef_starts_with_nocase?: InputMaybe<Scalars['String']>;
  openRef_not_starts_with?: InputMaybe<Scalars['String']>;
  openRef_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  openRef_ends_with?: InputMaybe<Scalars['String']>;
  openRef_ends_with_nocase?: InputMaybe<Scalars['String']>;
  openRef_not_ends_with?: InputMaybe<Scalars['String']>;
  openRef_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  openRef_?: InputMaybe<CurrencyPrice_filter>;
  close?: InputMaybe<Scalars['BigDecimal']>;
  close_not?: InputMaybe<Scalars['BigDecimal']>;
  close_gt?: InputMaybe<Scalars['BigDecimal']>;
  close_lt?: InputMaybe<Scalars['BigDecimal']>;
  close_gte?: InputMaybe<Scalars['BigDecimal']>;
  close_lte?: InputMaybe<Scalars['BigDecimal']>;
  close_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  close_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  closeRef?: InputMaybe<Scalars['String']>;
  closeRef_not?: InputMaybe<Scalars['String']>;
  closeRef_gt?: InputMaybe<Scalars['String']>;
  closeRef_lt?: InputMaybe<Scalars['String']>;
  closeRef_gte?: InputMaybe<Scalars['String']>;
  closeRef_lte?: InputMaybe<Scalars['String']>;
  closeRef_in?: InputMaybe<Array<Scalars['String']>>;
  closeRef_not_in?: InputMaybe<Array<Scalars['String']>>;
  closeRef_contains?: InputMaybe<Scalars['String']>;
  closeRef_contains_nocase?: InputMaybe<Scalars['String']>;
  closeRef_not_contains?: InputMaybe<Scalars['String']>;
  closeRef_not_contains_nocase?: InputMaybe<Scalars['String']>;
  closeRef_starts_with?: InputMaybe<Scalars['String']>;
  closeRef_starts_with_nocase?: InputMaybe<Scalars['String']>;
  closeRef_not_starts_with?: InputMaybe<Scalars['String']>;
  closeRef_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  closeRef_ends_with?: InputMaybe<Scalars['String']>;
  closeRef_ends_with_nocase?: InputMaybe<Scalars['String']>;
  closeRef_not_ends_with?: InputMaybe<Scalars['String']>;
  closeRef_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  closeRef_?: InputMaybe<CurrencyPrice_filter>;
  low?: InputMaybe<Scalars['BigDecimal']>;
  low_not?: InputMaybe<Scalars['BigDecimal']>;
  low_gt?: InputMaybe<Scalars['BigDecimal']>;
  low_lt?: InputMaybe<Scalars['BigDecimal']>;
  low_gte?: InputMaybe<Scalars['BigDecimal']>;
  low_lte?: InputMaybe<Scalars['BigDecimal']>;
  low_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  low_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  lowRef?: InputMaybe<Scalars['String']>;
  lowRef_not?: InputMaybe<Scalars['String']>;
  lowRef_gt?: InputMaybe<Scalars['String']>;
  lowRef_lt?: InputMaybe<Scalars['String']>;
  lowRef_gte?: InputMaybe<Scalars['String']>;
  lowRef_lte?: InputMaybe<Scalars['String']>;
  lowRef_in?: InputMaybe<Array<Scalars['String']>>;
  lowRef_not_in?: InputMaybe<Array<Scalars['String']>>;
  lowRef_contains?: InputMaybe<Scalars['String']>;
  lowRef_contains_nocase?: InputMaybe<Scalars['String']>;
  lowRef_not_contains?: InputMaybe<Scalars['String']>;
  lowRef_not_contains_nocase?: InputMaybe<Scalars['String']>;
  lowRef_starts_with?: InputMaybe<Scalars['String']>;
  lowRef_starts_with_nocase?: InputMaybe<Scalars['String']>;
  lowRef_not_starts_with?: InputMaybe<Scalars['String']>;
  lowRef_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  lowRef_ends_with?: InputMaybe<Scalars['String']>;
  lowRef_ends_with_nocase?: InputMaybe<Scalars['String']>;
  lowRef_not_ends_with?: InputMaybe<Scalars['String']>;
  lowRef_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  lowRef_?: InputMaybe<CurrencyPrice_filter>;
  high?: InputMaybe<Scalars['BigDecimal']>;
  high_not?: InputMaybe<Scalars['BigDecimal']>;
  high_gt?: InputMaybe<Scalars['BigDecimal']>;
  high_lt?: InputMaybe<Scalars['BigDecimal']>;
  high_gte?: InputMaybe<Scalars['BigDecimal']>;
  high_lte?: InputMaybe<Scalars['BigDecimal']>;
  high_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  high_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  highRef?: InputMaybe<Scalars['String']>;
  highRef_not?: InputMaybe<Scalars['String']>;
  highRef_gt?: InputMaybe<Scalars['String']>;
  highRef_lt?: InputMaybe<Scalars['String']>;
  highRef_gte?: InputMaybe<Scalars['String']>;
  highRef_lte?: InputMaybe<Scalars['String']>;
  highRef_in?: InputMaybe<Array<Scalars['String']>>;
  highRef_not_in?: InputMaybe<Array<Scalars['String']>>;
  highRef_contains?: InputMaybe<Scalars['String']>;
  highRef_contains_nocase?: InputMaybe<Scalars['String']>;
  highRef_not_contains?: InputMaybe<Scalars['String']>;
  highRef_not_contains_nocase?: InputMaybe<Scalars['String']>;
  highRef_starts_with?: InputMaybe<Scalars['String']>;
  highRef_starts_with_nocase?: InputMaybe<Scalars['String']>;
  highRef_not_starts_with?: InputMaybe<Scalars['String']>;
  highRef_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  highRef_ends_with?: InputMaybe<Scalars['String']>;
  highRef_ends_with_nocase?: InputMaybe<Scalars['String']>;
  highRef_not_ends_with?: InputMaybe<Scalars['String']>;
  highRef_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  highRef_?: InputMaybe<CurrencyPrice_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<HourlyCurrencyPriceCandle_filter>>>;
  or?: InputMaybe<Array<InputMaybe<HourlyCurrencyPriceCandle_filter>>>;
};

export type HourlyCurrencyPriceCandle_orderBy =
  | 'id'
  | 'currency'
  | 'currency__id'
  | 'group'
  | 'group__id'
  | 'group__from'
  | 'group__to'
  | 'from'
  | 'to'
  | 'open'
  | 'openRef'
  | 'openRef__id'
  | 'openRef__price'
  | 'openRef__timestamp'
  | 'close'
  | 'closeRef'
  | 'closeRef__id'
  | 'closeRef__price'
  | 'closeRef__timestamp'
  | 'low'
  | 'lowRef'
  | 'lowRef__id'
  | 'lowRef__price'
  | 'lowRef__timestamp'
  | 'high'
  | 'highRef'
  | 'highRef__id'
  | 'highRef__price'
  | 'highRef__timestamp';

export type HourlyMeTokenState = PeriodicMeTokenStateInterface & {
  id: Scalars['ID'];
  metoken: MeToken;
  start: Scalars['BigInt'];
  end: Scalars['BigInt'];
  first: MeTokenState;
  last: MeTokenState;
};

export type HourlyMeTokenState_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  metoken?: InputMaybe<Scalars['String']>;
  metoken_not?: InputMaybe<Scalars['String']>;
  metoken_gt?: InputMaybe<Scalars['String']>;
  metoken_lt?: InputMaybe<Scalars['String']>;
  metoken_gte?: InputMaybe<Scalars['String']>;
  metoken_lte?: InputMaybe<Scalars['String']>;
  metoken_in?: InputMaybe<Array<Scalars['String']>>;
  metoken_not_in?: InputMaybe<Array<Scalars['String']>>;
  metoken_contains?: InputMaybe<Scalars['String']>;
  metoken_contains_nocase?: InputMaybe<Scalars['String']>;
  metoken_not_contains?: InputMaybe<Scalars['String']>;
  metoken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  metoken_starts_with?: InputMaybe<Scalars['String']>;
  metoken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metoken_not_starts_with?: InputMaybe<Scalars['String']>;
  metoken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metoken_ends_with?: InputMaybe<Scalars['String']>;
  metoken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metoken_not_ends_with?: InputMaybe<Scalars['String']>;
  metoken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metoken_?: InputMaybe<MeToken_filter>;
  start?: InputMaybe<Scalars['BigInt']>;
  start_not?: InputMaybe<Scalars['BigInt']>;
  start_gt?: InputMaybe<Scalars['BigInt']>;
  start_lt?: InputMaybe<Scalars['BigInt']>;
  start_gte?: InputMaybe<Scalars['BigInt']>;
  start_lte?: InputMaybe<Scalars['BigInt']>;
  start_in?: InputMaybe<Array<Scalars['BigInt']>>;
  start_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  end?: InputMaybe<Scalars['BigInt']>;
  end_not?: InputMaybe<Scalars['BigInt']>;
  end_gt?: InputMaybe<Scalars['BigInt']>;
  end_lt?: InputMaybe<Scalars['BigInt']>;
  end_gte?: InputMaybe<Scalars['BigInt']>;
  end_lte?: InputMaybe<Scalars['BigInt']>;
  end_in?: InputMaybe<Array<Scalars['BigInt']>>;
  end_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  first?: InputMaybe<Scalars['String']>;
  first_not?: InputMaybe<Scalars['String']>;
  first_gt?: InputMaybe<Scalars['String']>;
  first_lt?: InputMaybe<Scalars['String']>;
  first_gte?: InputMaybe<Scalars['String']>;
  first_lte?: InputMaybe<Scalars['String']>;
  first_in?: InputMaybe<Array<Scalars['String']>>;
  first_not_in?: InputMaybe<Array<Scalars['String']>>;
  first_contains?: InputMaybe<Scalars['String']>;
  first_contains_nocase?: InputMaybe<Scalars['String']>;
  first_not_contains?: InputMaybe<Scalars['String']>;
  first_not_contains_nocase?: InputMaybe<Scalars['String']>;
  first_starts_with?: InputMaybe<Scalars['String']>;
  first_starts_with_nocase?: InputMaybe<Scalars['String']>;
  first_not_starts_with?: InputMaybe<Scalars['String']>;
  first_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  first_ends_with?: InputMaybe<Scalars['String']>;
  first_ends_with_nocase?: InputMaybe<Scalars['String']>;
  first_not_ends_with?: InputMaybe<Scalars['String']>;
  first_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  first_?: InputMaybe<MeTokenState_filter>;
  last?: InputMaybe<Scalars['String']>;
  last_not?: InputMaybe<Scalars['String']>;
  last_gt?: InputMaybe<Scalars['String']>;
  last_lt?: InputMaybe<Scalars['String']>;
  last_gte?: InputMaybe<Scalars['String']>;
  last_lte?: InputMaybe<Scalars['String']>;
  last_in?: InputMaybe<Array<Scalars['String']>>;
  last_not_in?: InputMaybe<Array<Scalars['String']>>;
  last_contains?: InputMaybe<Scalars['String']>;
  last_contains_nocase?: InputMaybe<Scalars['String']>;
  last_not_contains?: InputMaybe<Scalars['String']>;
  last_not_contains_nocase?: InputMaybe<Scalars['String']>;
  last_starts_with?: InputMaybe<Scalars['String']>;
  last_starts_with_nocase?: InputMaybe<Scalars['String']>;
  last_not_starts_with?: InputMaybe<Scalars['String']>;
  last_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  last_ends_with?: InputMaybe<Scalars['String']>;
  last_ends_with_nocase?: InputMaybe<Scalars['String']>;
  last_not_ends_with?: InputMaybe<Scalars['String']>;
  last_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  last_?: InputMaybe<MeTokenState_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<HourlyMeTokenState_filter>>>;
  or?: InputMaybe<Array<InputMaybe<HourlyMeTokenState_filter>>>;
};

export type HourlyMeTokenState_orderBy =
  | 'id'
  | 'metoken'
  | 'metoken__id'
  | 'metoken__createdAt'
  | 'metoken__name'
  | 'metoken__symbol'
  | 'start'
  | 'end'
  | 'first'
  | 'first__id'
  | 'first__balanceLocked'
  | 'first__balancePooled'
  | 'first__currentRate'
  | 'first__buyRate'
  | 'first__sellRate'
  | 'first__spendRate'
  | 'first__supply'
  | 'first__timestamp'
  | 'first__totalHolders'
  | 'first__tvl'
  | 'last'
  | 'last__id'
  | 'last__balanceLocked'
  | 'last__balancePooled'
  | 'last__currentRate'
  | 'last__buyRate'
  | 'last__sellRate'
  | 'last__spendRate'
  | 'last__supply'
  | 'last__timestamp'
  | 'last__totalHolders'
  | 'last__tvl';

export type HourlyPriceCandleGroup = {
  id: Scalars['ID'];
  from: Scalars['BigInt'];
  to: Scalars['BigInt'];
  currencyCandles: Array<HourlyCurrencyPriceCandle>;
};


export type HourlyPriceCandleGroupcurrencyCandlesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<HourlyCurrencyPriceCandle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<HourlyCurrencyPriceCandle_filter>;
};

export type HourlyPriceCandleGroup_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  from?: InputMaybe<Scalars['BigInt']>;
  from_not?: InputMaybe<Scalars['BigInt']>;
  from_gt?: InputMaybe<Scalars['BigInt']>;
  from_lt?: InputMaybe<Scalars['BigInt']>;
  from_gte?: InputMaybe<Scalars['BigInt']>;
  from_lte?: InputMaybe<Scalars['BigInt']>;
  from_in?: InputMaybe<Array<Scalars['BigInt']>>;
  from_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<Scalars['BigInt']>;
  to_not?: InputMaybe<Scalars['BigInt']>;
  to_gt?: InputMaybe<Scalars['BigInt']>;
  to_lt?: InputMaybe<Scalars['BigInt']>;
  to_gte?: InputMaybe<Scalars['BigInt']>;
  to_lte?: InputMaybe<Scalars['BigInt']>;
  to_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currencyCandles_?: InputMaybe<HourlyCurrencyPriceCandle_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<HourlyPriceCandleGroup_filter>>>;
  or?: InputMaybe<Array<InputMaybe<HourlyPriceCandleGroup_filter>>>;
};

export type HourlyPriceCandleGroup_orderBy =
  | 'id'
  | 'from'
  | 'to'
  | 'currencyCandles';

export type Hub = {
  id: Scalars['ID'];
  active: Scalars['Boolean'];
  asset: Scalars['Bytes'];
  meTokens?: Maybe<Array<MeToken>>;
  owner: Scalars['Bytes'];
  refundRatio: Scalars['BigInt'];
  targetRefundRatio?: Maybe<Scalars['BigInt']>;
  updating: Scalars['Boolean'];
  vault: Scalars['Bytes'];
};


export type HubmeTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MeToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MeToken_filter>;
};

export type Hub_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  active?: InputMaybe<Scalars['Boolean']>;
  active_not?: InputMaybe<Scalars['Boolean']>;
  active_in?: InputMaybe<Array<Scalars['Boolean']>>;
  active_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  asset?: InputMaybe<Scalars['Bytes']>;
  asset_not?: InputMaybe<Scalars['Bytes']>;
  asset_gt?: InputMaybe<Scalars['Bytes']>;
  asset_lt?: InputMaybe<Scalars['Bytes']>;
  asset_gte?: InputMaybe<Scalars['Bytes']>;
  asset_lte?: InputMaybe<Scalars['Bytes']>;
  asset_in?: InputMaybe<Array<Scalars['Bytes']>>;
  asset_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  asset_contains?: InputMaybe<Scalars['Bytes']>;
  asset_not_contains?: InputMaybe<Scalars['Bytes']>;
  meTokens_?: InputMaybe<MeToken_filter>;
  owner?: InputMaybe<Scalars['Bytes']>;
  owner_not?: InputMaybe<Scalars['Bytes']>;
  owner_gt?: InputMaybe<Scalars['Bytes']>;
  owner_lt?: InputMaybe<Scalars['Bytes']>;
  owner_gte?: InputMaybe<Scalars['Bytes']>;
  owner_lte?: InputMaybe<Scalars['Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_contains?: InputMaybe<Scalars['Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  refundRatio?: InputMaybe<Scalars['BigInt']>;
  refundRatio_not?: InputMaybe<Scalars['BigInt']>;
  refundRatio_gt?: InputMaybe<Scalars['BigInt']>;
  refundRatio_lt?: InputMaybe<Scalars['BigInt']>;
  refundRatio_gte?: InputMaybe<Scalars['BigInt']>;
  refundRatio_lte?: InputMaybe<Scalars['BigInt']>;
  refundRatio_in?: InputMaybe<Array<Scalars['BigInt']>>;
  refundRatio_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  targetRefundRatio?: InputMaybe<Scalars['BigInt']>;
  targetRefundRatio_not?: InputMaybe<Scalars['BigInt']>;
  targetRefundRatio_gt?: InputMaybe<Scalars['BigInt']>;
  targetRefundRatio_lt?: InputMaybe<Scalars['BigInt']>;
  targetRefundRatio_gte?: InputMaybe<Scalars['BigInt']>;
  targetRefundRatio_lte?: InputMaybe<Scalars['BigInt']>;
  targetRefundRatio_in?: InputMaybe<Array<Scalars['BigInt']>>;
  targetRefundRatio_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updating?: InputMaybe<Scalars['Boolean']>;
  updating_not?: InputMaybe<Scalars['Boolean']>;
  updating_in?: InputMaybe<Array<Scalars['Boolean']>>;
  updating_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  vault?: InputMaybe<Scalars['Bytes']>;
  vault_not?: InputMaybe<Scalars['Bytes']>;
  vault_gt?: InputMaybe<Scalars['Bytes']>;
  vault_lt?: InputMaybe<Scalars['Bytes']>;
  vault_gte?: InputMaybe<Scalars['Bytes']>;
  vault_lte?: InputMaybe<Scalars['Bytes']>;
  vault_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vault_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vault_contains?: InputMaybe<Scalars['Bytes']>;
  vault_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Hub_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Hub_filter>>>;
};

export type Hub_orderBy =
  | 'id'
  | 'active'
  | 'asset'
  | 'meTokens'
  | 'owner'
  | 'refundRatio'
  | 'targetRefundRatio'
  | 'updating'
  | 'vault';

export type MeToken = {
  id: Scalars['ID'];
  collateralToken: CollateralToken;
  createdAt: Scalars['BigInt'];
  holdings?: Maybe<Array<Holding>>;
  hub: Hub;
  name: Scalars['String'];
  owner: User;
  previousOwner?: Maybe<User>;
  state: MeTokenState;
  symbol: Scalars['String'];
  transactions?: Maybe<Array<TokenTransaction>>;
  hourlyStates: Array<HourlyMeTokenState>;
  dailyStates: Array<DailyMeTokenState>;
  monthlyStates: Array<MonthlyMeTokenState>;
};


export type MeTokenholdingsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Holding_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Holding_filter>;
};


export type MeTokentransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenTransaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenTransaction_filter>;
};


export type MeTokenhourlyStatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<HourlyMeTokenState_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<HourlyMeTokenState_filter>;
};


export type MeTokendailyStatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DailyMeTokenState_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DailyMeTokenState_filter>;
};


export type MeTokenmonthlyStatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MonthlyMeTokenState_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MonthlyMeTokenState_filter>;
};

export type MeTokenState = {
  id: Scalars['ID'];
  balanceLocked: Scalars['BigDecimal'];
  balancePooled: Scalars['BigDecimal'];
  currencyPrices: Array<CurrencyPrice>;
  currentRate: Scalars['BigDecimal'];
  buyRate: Scalars['BigDecimal'];
  sellRate: Scalars['BigDecimal'];
  spendRate: Scalars['BigDecimal'];
  metoken: MeToken;
  supply: Scalars['BigDecimal'];
  timestamp: Scalars['BigInt'];
  totalHolders?: Maybe<Scalars['BigInt']>;
  tvl?: Maybe<Scalars['BigDecimal']>;
};


export type MeTokenStatecurrencyPricesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CurrencyPrice_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CurrencyPrice_filter>;
};

export type MeTokenState_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  balanceLocked?: InputMaybe<Scalars['BigDecimal']>;
  balanceLocked_not?: InputMaybe<Scalars['BigDecimal']>;
  balanceLocked_gt?: InputMaybe<Scalars['BigDecimal']>;
  balanceLocked_lt?: InputMaybe<Scalars['BigDecimal']>;
  balanceLocked_gte?: InputMaybe<Scalars['BigDecimal']>;
  balanceLocked_lte?: InputMaybe<Scalars['BigDecimal']>;
  balanceLocked_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  balanceLocked_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  balancePooled?: InputMaybe<Scalars['BigDecimal']>;
  balancePooled_not?: InputMaybe<Scalars['BigDecimal']>;
  balancePooled_gt?: InputMaybe<Scalars['BigDecimal']>;
  balancePooled_lt?: InputMaybe<Scalars['BigDecimal']>;
  balancePooled_gte?: InputMaybe<Scalars['BigDecimal']>;
  balancePooled_lte?: InputMaybe<Scalars['BigDecimal']>;
  balancePooled_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  balancePooled_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  currencyPrices?: InputMaybe<Array<Scalars['String']>>;
  currencyPrices_not?: InputMaybe<Array<Scalars['String']>>;
  currencyPrices_contains?: InputMaybe<Array<Scalars['String']>>;
  currencyPrices_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  currencyPrices_not_contains?: InputMaybe<Array<Scalars['String']>>;
  currencyPrices_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  currencyPrices_?: InputMaybe<CurrencyPrice_filter>;
  currentRate?: InputMaybe<Scalars['BigDecimal']>;
  currentRate_not?: InputMaybe<Scalars['BigDecimal']>;
  currentRate_gt?: InputMaybe<Scalars['BigDecimal']>;
  currentRate_lt?: InputMaybe<Scalars['BigDecimal']>;
  currentRate_gte?: InputMaybe<Scalars['BigDecimal']>;
  currentRate_lte?: InputMaybe<Scalars['BigDecimal']>;
  currentRate_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  currentRate_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  buyRate?: InputMaybe<Scalars['BigDecimal']>;
  buyRate_not?: InputMaybe<Scalars['BigDecimal']>;
  buyRate_gt?: InputMaybe<Scalars['BigDecimal']>;
  buyRate_lt?: InputMaybe<Scalars['BigDecimal']>;
  buyRate_gte?: InputMaybe<Scalars['BigDecimal']>;
  buyRate_lte?: InputMaybe<Scalars['BigDecimal']>;
  buyRate_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  buyRate_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sellRate?: InputMaybe<Scalars['BigDecimal']>;
  sellRate_not?: InputMaybe<Scalars['BigDecimal']>;
  sellRate_gt?: InputMaybe<Scalars['BigDecimal']>;
  sellRate_lt?: InputMaybe<Scalars['BigDecimal']>;
  sellRate_gte?: InputMaybe<Scalars['BigDecimal']>;
  sellRate_lte?: InputMaybe<Scalars['BigDecimal']>;
  sellRate_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sellRate_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  spendRate?: InputMaybe<Scalars['BigDecimal']>;
  spendRate_not?: InputMaybe<Scalars['BigDecimal']>;
  spendRate_gt?: InputMaybe<Scalars['BigDecimal']>;
  spendRate_lt?: InputMaybe<Scalars['BigDecimal']>;
  spendRate_gte?: InputMaybe<Scalars['BigDecimal']>;
  spendRate_lte?: InputMaybe<Scalars['BigDecimal']>;
  spendRate_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  spendRate_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  metoken?: InputMaybe<Scalars['String']>;
  metoken_not?: InputMaybe<Scalars['String']>;
  metoken_gt?: InputMaybe<Scalars['String']>;
  metoken_lt?: InputMaybe<Scalars['String']>;
  metoken_gte?: InputMaybe<Scalars['String']>;
  metoken_lte?: InputMaybe<Scalars['String']>;
  metoken_in?: InputMaybe<Array<Scalars['String']>>;
  metoken_not_in?: InputMaybe<Array<Scalars['String']>>;
  metoken_contains?: InputMaybe<Scalars['String']>;
  metoken_contains_nocase?: InputMaybe<Scalars['String']>;
  metoken_not_contains?: InputMaybe<Scalars['String']>;
  metoken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  metoken_starts_with?: InputMaybe<Scalars['String']>;
  metoken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metoken_not_starts_with?: InputMaybe<Scalars['String']>;
  metoken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metoken_ends_with?: InputMaybe<Scalars['String']>;
  metoken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metoken_not_ends_with?: InputMaybe<Scalars['String']>;
  metoken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metoken_?: InputMaybe<MeToken_filter>;
  supply?: InputMaybe<Scalars['BigDecimal']>;
  supply_not?: InputMaybe<Scalars['BigDecimal']>;
  supply_gt?: InputMaybe<Scalars['BigDecimal']>;
  supply_lt?: InputMaybe<Scalars['BigDecimal']>;
  supply_gte?: InputMaybe<Scalars['BigDecimal']>;
  supply_lte?: InputMaybe<Scalars['BigDecimal']>;
  supply_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  supply_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalHolders?: InputMaybe<Scalars['BigInt']>;
  totalHolders_not?: InputMaybe<Scalars['BigInt']>;
  totalHolders_gt?: InputMaybe<Scalars['BigInt']>;
  totalHolders_lt?: InputMaybe<Scalars['BigInt']>;
  totalHolders_gte?: InputMaybe<Scalars['BigInt']>;
  totalHolders_lte?: InputMaybe<Scalars['BigInt']>;
  totalHolders_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalHolders_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tvl?: InputMaybe<Scalars['BigDecimal']>;
  tvl_not?: InputMaybe<Scalars['BigDecimal']>;
  tvl_gt?: InputMaybe<Scalars['BigDecimal']>;
  tvl_lt?: InputMaybe<Scalars['BigDecimal']>;
  tvl_gte?: InputMaybe<Scalars['BigDecimal']>;
  tvl_lte?: InputMaybe<Scalars['BigDecimal']>;
  tvl_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tvl_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MeTokenState_filter>>>;
  or?: InputMaybe<Array<InputMaybe<MeTokenState_filter>>>;
};

export type MeTokenState_orderBy =
  | 'id'
  | 'balanceLocked'
  | 'balancePooled'
  | 'currencyPrices'
  | 'currentRate'
  | 'buyRate'
  | 'sellRate'
  | 'spendRate'
  | 'metoken'
  | 'metoken__id'
  | 'metoken__createdAt'
  | 'metoken__name'
  | 'metoken__symbol'
  | 'supply'
  | 'timestamp'
  | 'totalHolders'
  | 'tvl';

export type MeToken_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  collateralToken?: InputMaybe<Scalars['String']>;
  collateralToken_not?: InputMaybe<Scalars['String']>;
  collateralToken_gt?: InputMaybe<Scalars['String']>;
  collateralToken_lt?: InputMaybe<Scalars['String']>;
  collateralToken_gte?: InputMaybe<Scalars['String']>;
  collateralToken_lte?: InputMaybe<Scalars['String']>;
  collateralToken_in?: InputMaybe<Array<Scalars['String']>>;
  collateralToken_not_in?: InputMaybe<Array<Scalars['String']>>;
  collateralToken_contains?: InputMaybe<Scalars['String']>;
  collateralToken_contains_nocase?: InputMaybe<Scalars['String']>;
  collateralToken_not_contains?: InputMaybe<Scalars['String']>;
  collateralToken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  collateralToken_starts_with?: InputMaybe<Scalars['String']>;
  collateralToken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  collateralToken_not_starts_with?: InputMaybe<Scalars['String']>;
  collateralToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  collateralToken_ends_with?: InputMaybe<Scalars['String']>;
  collateralToken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collateralToken_not_ends_with?: InputMaybe<Scalars['String']>;
  collateralToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collateralToken_?: InputMaybe<CollateralToken_filter>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  holdings_?: InputMaybe<Holding_filter>;
  hub?: InputMaybe<Scalars['String']>;
  hub_not?: InputMaybe<Scalars['String']>;
  hub_gt?: InputMaybe<Scalars['String']>;
  hub_lt?: InputMaybe<Scalars['String']>;
  hub_gte?: InputMaybe<Scalars['String']>;
  hub_lte?: InputMaybe<Scalars['String']>;
  hub_in?: InputMaybe<Array<Scalars['String']>>;
  hub_not_in?: InputMaybe<Array<Scalars['String']>>;
  hub_contains?: InputMaybe<Scalars['String']>;
  hub_contains_nocase?: InputMaybe<Scalars['String']>;
  hub_not_contains?: InputMaybe<Scalars['String']>;
  hub_not_contains_nocase?: InputMaybe<Scalars['String']>;
  hub_starts_with?: InputMaybe<Scalars['String']>;
  hub_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hub_not_starts_with?: InputMaybe<Scalars['String']>;
  hub_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hub_ends_with?: InputMaybe<Scalars['String']>;
  hub_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hub_not_ends_with?: InputMaybe<Scalars['String']>;
  hub_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hub_?: InputMaybe<Hub_filter>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_?: InputMaybe<User_filter>;
  previousOwner?: InputMaybe<Scalars['String']>;
  previousOwner_not?: InputMaybe<Scalars['String']>;
  previousOwner_gt?: InputMaybe<Scalars['String']>;
  previousOwner_lt?: InputMaybe<Scalars['String']>;
  previousOwner_gte?: InputMaybe<Scalars['String']>;
  previousOwner_lte?: InputMaybe<Scalars['String']>;
  previousOwner_in?: InputMaybe<Array<Scalars['String']>>;
  previousOwner_not_in?: InputMaybe<Array<Scalars['String']>>;
  previousOwner_contains?: InputMaybe<Scalars['String']>;
  previousOwner_contains_nocase?: InputMaybe<Scalars['String']>;
  previousOwner_not_contains?: InputMaybe<Scalars['String']>;
  previousOwner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  previousOwner_starts_with?: InputMaybe<Scalars['String']>;
  previousOwner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  previousOwner_not_starts_with?: InputMaybe<Scalars['String']>;
  previousOwner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  previousOwner_ends_with?: InputMaybe<Scalars['String']>;
  previousOwner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  previousOwner_not_ends_with?: InputMaybe<Scalars['String']>;
  previousOwner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  previousOwner_?: InputMaybe<User_filter>;
  state?: InputMaybe<Scalars['String']>;
  state_not?: InputMaybe<Scalars['String']>;
  state_gt?: InputMaybe<Scalars['String']>;
  state_lt?: InputMaybe<Scalars['String']>;
  state_gte?: InputMaybe<Scalars['String']>;
  state_lte?: InputMaybe<Scalars['String']>;
  state_in?: InputMaybe<Array<Scalars['String']>>;
  state_not_in?: InputMaybe<Array<Scalars['String']>>;
  state_contains?: InputMaybe<Scalars['String']>;
  state_contains_nocase?: InputMaybe<Scalars['String']>;
  state_not_contains?: InputMaybe<Scalars['String']>;
  state_not_contains_nocase?: InputMaybe<Scalars['String']>;
  state_starts_with?: InputMaybe<Scalars['String']>;
  state_starts_with_nocase?: InputMaybe<Scalars['String']>;
  state_not_starts_with?: InputMaybe<Scalars['String']>;
  state_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  state_ends_with?: InputMaybe<Scalars['String']>;
  state_ends_with_nocase?: InputMaybe<Scalars['String']>;
  state_not_ends_with?: InputMaybe<Scalars['String']>;
  state_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  state_?: InputMaybe<MeTokenState_filter>;
  symbol?: InputMaybe<Scalars['String']>;
  symbol_not?: InputMaybe<Scalars['String']>;
  symbol_gt?: InputMaybe<Scalars['String']>;
  symbol_lt?: InputMaybe<Scalars['String']>;
  symbol_gte?: InputMaybe<Scalars['String']>;
  symbol_lte?: InputMaybe<Scalars['String']>;
  symbol_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_contains?: InputMaybe<Scalars['String']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_contains?: InputMaybe<Scalars['String']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_starts_with?: InputMaybe<Scalars['String']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_ends_with?: InputMaybe<Scalars['String']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transactions_?: InputMaybe<TokenTransaction_filter>;
  hourlyStates_?: InputMaybe<HourlyMeTokenState_filter>;
  dailyStates_?: InputMaybe<DailyMeTokenState_filter>;
  monthlyStates_?: InputMaybe<MonthlyMeTokenState_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MeToken_filter>>>;
  or?: InputMaybe<Array<InputMaybe<MeToken_filter>>>;
};

export type MeToken_orderBy =
  | 'id'
  | 'collateralToken'
  | 'collateralToken__id'
  | 'createdAt'
  | 'holdings'
  | 'hub'
  | 'hub__id'
  | 'hub__active'
  | 'hub__asset'
  | 'hub__owner'
  | 'hub__refundRatio'
  | 'hub__targetRefundRatio'
  | 'hub__updating'
  | 'hub__vault'
  | 'name'
  | 'owner'
  | 'owner__id'
  | 'owner__totalHoldings'
  | 'previousOwner'
  | 'previousOwner__id'
  | 'previousOwner__totalHoldings'
  | 'state'
  | 'state__id'
  | 'state__balanceLocked'
  | 'state__balancePooled'
  | 'state__currentRate'
  | 'state__buyRate'
  | 'state__sellRate'
  | 'state__spendRate'
  | 'state__supply'
  | 'state__timestamp'
  | 'state__totalHolders'
  | 'state__tvl'
  | 'symbol'
  | 'transactions'
  | 'hourlyStates'
  | 'dailyStates'
  | 'monthlyStates';

export type MonthlyCurrencyPriceCandle = {
  id: Scalars['ID'];
  currency: Currency;
  group: MonthlyPriceCandleGroup;
  from: Scalars['BigInt'];
  to: Scalars['BigInt'];
  open: Scalars['BigDecimal'];
  openRef: CurrencyPrice;
  close: Scalars['BigDecimal'];
  closeRef: CurrencyPrice;
  low: Scalars['BigDecimal'];
  lowRef: CurrencyPrice;
  high: Scalars['BigDecimal'];
  highRef: CurrencyPrice;
};

export type MonthlyCurrencyPriceCandle_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  currency?: InputMaybe<Scalars['String']>;
  currency_not?: InputMaybe<Scalars['String']>;
  currency_gt?: InputMaybe<Scalars['String']>;
  currency_lt?: InputMaybe<Scalars['String']>;
  currency_gte?: InputMaybe<Scalars['String']>;
  currency_lte?: InputMaybe<Scalars['String']>;
  currency_in?: InputMaybe<Array<Scalars['String']>>;
  currency_not_in?: InputMaybe<Array<Scalars['String']>>;
  currency_contains?: InputMaybe<Scalars['String']>;
  currency_contains_nocase?: InputMaybe<Scalars['String']>;
  currency_not_contains?: InputMaybe<Scalars['String']>;
  currency_not_contains_nocase?: InputMaybe<Scalars['String']>;
  currency_starts_with?: InputMaybe<Scalars['String']>;
  currency_starts_with_nocase?: InputMaybe<Scalars['String']>;
  currency_not_starts_with?: InputMaybe<Scalars['String']>;
  currency_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  currency_ends_with?: InputMaybe<Scalars['String']>;
  currency_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currency_not_ends_with?: InputMaybe<Scalars['String']>;
  currency_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currency_?: InputMaybe<Currency_filter>;
  group?: InputMaybe<Scalars['String']>;
  group_not?: InputMaybe<Scalars['String']>;
  group_gt?: InputMaybe<Scalars['String']>;
  group_lt?: InputMaybe<Scalars['String']>;
  group_gte?: InputMaybe<Scalars['String']>;
  group_lte?: InputMaybe<Scalars['String']>;
  group_in?: InputMaybe<Array<Scalars['String']>>;
  group_not_in?: InputMaybe<Array<Scalars['String']>>;
  group_contains?: InputMaybe<Scalars['String']>;
  group_contains_nocase?: InputMaybe<Scalars['String']>;
  group_not_contains?: InputMaybe<Scalars['String']>;
  group_not_contains_nocase?: InputMaybe<Scalars['String']>;
  group_starts_with?: InputMaybe<Scalars['String']>;
  group_starts_with_nocase?: InputMaybe<Scalars['String']>;
  group_not_starts_with?: InputMaybe<Scalars['String']>;
  group_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  group_ends_with?: InputMaybe<Scalars['String']>;
  group_ends_with_nocase?: InputMaybe<Scalars['String']>;
  group_not_ends_with?: InputMaybe<Scalars['String']>;
  group_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  group_?: InputMaybe<MonthlyPriceCandleGroup_filter>;
  from?: InputMaybe<Scalars['BigInt']>;
  from_not?: InputMaybe<Scalars['BigInt']>;
  from_gt?: InputMaybe<Scalars['BigInt']>;
  from_lt?: InputMaybe<Scalars['BigInt']>;
  from_gte?: InputMaybe<Scalars['BigInt']>;
  from_lte?: InputMaybe<Scalars['BigInt']>;
  from_in?: InputMaybe<Array<Scalars['BigInt']>>;
  from_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<Scalars['BigInt']>;
  to_not?: InputMaybe<Scalars['BigInt']>;
  to_gt?: InputMaybe<Scalars['BigInt']>;
  to_lt?: InputMaybe<Scalars['BigInt']>;
  to_gte?: InputMaybe<Scalars['BigInt']>;
  to_lte?: InputMaybe<Scalars['BigInt']>;
  to_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  open?: InputMaybe<Scalars['BigDecimal']>;
  open_not?: InputMaybe<Scalars['BigDecimal']>;
  open_gt?: InputMaybe<Scalars['BigDecimal']>;
  open_lt?: InputMaybe<Scalars['BigDecimal']>;
  open_gte?: InputMaybe<Scalars['BigDecimal']>;
  open_lte?: InputMaybe<Scalars['BigDecimal']>;
  open_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  open_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  openRef?: InputMaybe<Scalars['String']>;
  openRef_not?: InputMaybe<Scalars['String']>;
  openRef_gt?: InputMaybe<Scalars['String']>;
  openRef_lt?: InputMaybe<Scalars['String']>;
  openRef_gte?: InputMaybe<Scalars['String']>;
  openRef_lte?: InputMaybe<Scalars['String']>;
  openRef_in?: InputMaybe<Array<Scalars['String']>>;
  openRef_not_in?: InputMaybe<Array<Scalars['String']>>;
  openRef_contains?: InputMaybe<Scalars['String']>;
  openRef_contains_nocase?: InputMaybe<Scalars['String']>;
  openRef_not_contains?: InputMaybe<Scalars['String']>;
  openRef_not_contains_nocase?: InputMaybe<Scalars['String']>;
  openRef_starts_with?: InputMaybe<Scalars['String']>;
  openRef_starts_with_nocase?: InputMaybe<Scalars['String']>;
  openRef_not_starts_with?: InputMaybe<Scalars['String']>;
  openRef_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  openRef_ends_with?: InputMaybe<Scalars['String']>;
  openRef_ends_with_nocase?: InputMaybe<Scalars['String']>;
  openRef_not_ends_with?: InputMaybe<Scalars['String']>;
  openRef_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  openRef_?: InputMaybe<CurrencyPrice_filter>;
  close?: InputMaybe<Scalars['BigDecimal']>;
  close_not?: InputMaybe<Scalars['BigDecimal']>;
  close_gt?: InputMaybe<Scalars['BigDecimal']>;
  close_lt?: InputMaybe<Scalars['BigDecimal']>;
  close_gte?: InputMaybe<Scalars['BigDecimal']>;
  close_lte?: InputMaybe<Scalars['BigDecimal']>;
  close_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  close_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  closeRef?: InputMaybe<Scalars['String']>;
  closeRef_not?: InputMaybe<Scalars['String']>;
  closeRef_gt?: InputMaybe<Scalars['String']>;
  closeRef_lt?: InputMaybe<Scalars['String']>;
  closeRef_gte?: InputMaybe<Scalars['String']>;
  closeRef_lte?: InputMaybe<Scalars['String']>;
  closeRef_in?: InputMaybe<Array<Scalars['String']>>;
  closeRef_not_in?: InputMaybe<Array<Scalars['String']>>;
  closeRef_contains?: InputMaybe<Scalars['String']>;
  closeRef_contains_nocase?: InputMaybe<Scalars['String']>;
  closeRef_not_contains?: InputMaybe<Scalars['String']>;
  closeRef_not_contains_nocase?: InputMaybe<Scalars['String']>;
  closeRef_starts_with?: InputMaybe<Scalars['String']>;
  closeRef_starts_with_nocase?: InputMaybe<Scalars['String']>;
  closeRef_not_starts_with?: InputMaybe<Scalars['String']>;
  closeRef_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  closeRef_ends_with?: InputMaybe<Scalars['String']>;
  closeRef_ends_with_nocase?: InputMaybe<Scalars['String']>;
  closeRef_not_ends_with?: InputMaybe<Scalars['String']>;
  closeRef_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  closeRef_?: InputMaybe<CurrencyPrice_filter>;
  low?: InputMaybe<Scalars['BigDecimal']>;
  low_not?: InputMaybe<Scalars['BigDecimal']>;
  low_gt?: InputMaybe<Scalars['BigDecimal']>;
  low_lt?: InputMaybe<Scalars['BigDecimal']>;
  low_gte?: InputMaybe<Scalars['BigDecimal']>;
  low_lte?: InputMaybe<Scalars['BigDecimal']>;
  low_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  low_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  lowRef?: InputMaybe<Scalars['String']>;
  lowRef_not?: InputMaybe<Scalars['String']>;
  lowRef_gt?: InputMaybe<Scalars['String']>;
  lowRef_lt?: InputMaybe<Scalars['String']>;
  lowRef_gte?: InputMaybe<Scalars['String']>;
  lowRef_lte?: InputMaybe<Scalars['String']>;
  lowRef_in?: InputMaybe<Array<Scalars['String']>>;
  lowRef_not_in?: InputMaybe<Array<Scalars['String']>>;
  lowRef_contains?: InputMaybe<Scalars['String']>;
  lowRef_contains_nocase?: InputMaybe<Scalars['String']>;
  lowRef_not_contains?: InputMaybe<Scalars['String']>;
  lowRef_not_contains_nocase?: InputMaybe<Scalars['String']>;
  lowRef_starts_with?: InputMaybe<Scalars['String']>;
  lowRef_starts_with_nocase?: InputMaybe<Scalars['String']>;
  lowRef_not_starts_with?: InputMaybe<Scalars['String']>;
  lowRef_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  lowRef_ends_with?: InputMaybe<Scalars['String']>;
  lowRef_ends_with_nocase?: InputMaybe<Scalars['String']>;
  lowRef_not_ends_with?: InputMaybe<Scalars['String']>;
  lowRef_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  lowRef_?: InputMaybe<CurrencyPrice_filter>;
  high?: InputMaybe<Scalars['BigDecimal']>;
  high_not?: InputMaybe<Scalars['BigDecimal']>;
  high_gt?: InputMaybe<Scalars['BigDecimal']>;
  high_lt?: InputMaybe<Scalars['BigDecimal']>;
  high_gte?: InputMaybe<Scalars['BigDecimal']>;
  high_lte?: InputMaybe<Scalars['BigDecimal']>;
  high_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  high_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  highRef?: InputMaybe<Scalars['String']>;
  highRef_not?: InputMaybe<Scalars['String']>;
  highRef_gt?: InputMaybe<Scalars['String']>;
  highRef_lt?: InputMaybe<Scalars['String']>;
  highRef_gte?: InputMaybe<Scalars['String']>;
  highRef_lte?: InputMaybe<Scalars['String']>;
  highRef_in?: InputMaybe<Array<Scalars['String']>>;
  highRef_not_in?: InputMaybe<Array<Scalars['String']>>;
  highRef_contains?: InputMaybe<Scalars['String']>;
  highRef_contains_nocase?: InputMaybe<Scalars['String']>;
  highRef_not_contains?: InputMaybe<Scalars['String']>;
  highRef_not_contains_nocase?: InputMaybe<Scalars['String']>;
  highRef_starts_with?: InputMaybe<Scalars['String']>;
  highRef_starts_with_nocase?: InputMaybe<Scalars['String']>;
  highRef_not_starts_with?: InputMaybe<Scalars['String']>;
  highRef_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  highRef_ends_with?: InputMaybe<Scalars['String']>;
  highRef_ends_with_nocase?: InputMaybe<Scalars['String']>;
  highRef_not_ends_with?: InputMaybe<Scalars['String']>;
  highRef_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  highRef_?: InputMaybe<CurrencyPrice_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MonthlyCurrencyPriceCandle_filter>>>;
  or?: InputMaybe<Array<InputMaybe<MonthlyCurrencyPriceCandle_filter>>>;
};

export type MonthlyCurrencyPriceCandle_orderBy =
  | 'id'
  | 'currency'
  | 'currency__id'
  | 'group'
  | 'group__id'
  | 'group__from'
  | 'group__to'
  | 'from'
  | 'to'
  | 'open'
  | 'openRef'
  | 'openRef__id'
  | 'openRef__price'
  | 'openRef__timestamp'
  | 'close'
  | 'closeRef'
  | 'closeRef__id'
  | 'closeRef__price'
  | 'closeRef__timestamp'
  | 'low'
  | 'lowRef'
  | 'lowRef__id'
  | 'lowRef__price'
  | 'lowRef__timestamp'
  | 'high'
  | 'highRef'
  | 'highRef__id'
  | 'highRef__price'
  | 'highRef__timestamp';

export type MonthlyMeTokenState = PeriodicMeTokenStateInterface & {
  id: Scalars['ID'];
  metoken: MeToken;
  start: Scalars['BigInt'];
  end: Scalars['BigInt'];
  first: MeTokenState;
  last: MeTokenState;
};

export type MonthlyMeTokenState_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  metoken?: InputMaybe<Scalars['String']>;
  metoken_not?: InputMaybe<Scalars['String']>;
  metoken_gt?: InputMaybe<Scalars['String']>;
  metoken_lt?: InputMaybe<Scalars['String']>;
  metoken_gte?: InputMaybe<Scalars['String']>;
  metoken_lte?: InputMaybe<Scalars['String']>;
  metoken_in?: InputMaybe<Array<Scalars['String']>>;
  metoken_not_in?: InputMaybe<Array<Scalars['String']>>;
  metoken_contains?: InputMaybe<Scalars['String']>;
  metoken_contains_nocase?: InputMaybe<Scalars['String']>;
  metoken_not_contains?: InputMaybe<Scalars['String']>;
  metoken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  metoken_starts_with?: InputMaybe<Scalars['String']>;
  metoken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metoken_not_starts_with?: InputMaybe<Scalars['String']>;
  metoken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metoken_ends_with?: InputMaybe<Scalars['String']>;
  metoken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metoken_not_ends_with?: InputMaybe<Scalars['String']>;
  metoken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metoken_?: InputMaybe<MeToken_filter>;
  start?: InputMaybe<Scalars['BigInt']>;
  start_not?: InputMaybe<Scalars['BigInt']>;
  start_gt?: InputMaybe<Scalars['BigInt']>;
  start_lt?: InputMaybe<Scalars['BigInt']>;
  start_gte?: InputMaybe<Scalars['BigInt']>;
  start_lte?: InputMaybe<Scalars['BigInt']>;
  start_in?: InputMaybe<Array<Scalars['BigInt']>>;
  start_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  end?: InputMaybe<Scalars['BigInt']>;
  end_not?: InputMaybe<Scalars['BigInt']>;
  end_gt?: InputMaybe<Scalars['BigInt']>;
  end_lt?: InputMaybe<Scalars['BigInt']>;
  end_gte?: InputMaybe<Scalars['BigInt']>;
  end_lte?: InputMaybe<Scalars['BigInt']>;
  end_in?: InputMaybe<Array<Scalars['BigInt']>>;
  end_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  first?: InputMaybe<Scalars['String']>;
  first_not?: InputMaybe<Scalars['String']>;
  first_gt?: InputMaybe<Scalars['String']>;
  first_lt?: InputMaybe<Scalars['String']>;
  first_gte?: InputMaybe<Scalars['String']>;
  first_lte?: InputMaybe<Scalars['String']>;
  first_in?: InputMaybe<Array<Scalars['String']>>;
  first_not_in?: InputMaybe<Array<Scalars['String']>>;
  first_contains?: InputMaybe<Scalars['String']>;
  first_contains_nocase?: InputMaybe<Scalars['String']>;
  first_not_contains?: InputMaybe<Scalars['String']>;
  first_not_contains_nocase?: InputMaybe<Scalars['String']>;
  first_starts_with?: InputMaybe<Scalars['String']>;
  first_starts_with_nocase?: InputMaybe<Scalars['String']>;
  first_not_starts_with?: InputMaybe<Scalars['String']>;
  first_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  first_ends_with?: InputMaybe<Scalars['String']>;
  first_ends_with_nocase?: InputMaybe<Scalars['String']>;
  first_not_ends_with?: InputMaybe<Scalars['String']>;
  first_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  first_?: InputMaybe<MeTokenState_filter>;
  last?: InputMaybe<Scalars['String']>;
  last_not?: InputMaybe<Scalars['String']>;
  last_gt?: InputMaybe<Scalars['String']>;
  last_lt?: InputMaybe<Scalars['String']>;
  last_gte?: InputMaybe<Scalars['String']>;
  last_lte?: InputMaybe<Scalars['String']>;
  last_in?: InputMaybe<Array<Scalars['String']>>;
  last_not_in?: InputMaybe<Array<Scalars['String']>>;
  last_contains?: InputMaybe<Scalars['String']>;
  last_contains_nocase?: InputMaybe<Scalars['String']>;
  last_not_contains?: InputMaybe<Scalars['String']>;
  last_not_contains_nocase?: InputMaybe<Scalars['String']>;
  last_starts_with?: InputMaybe<Scalars['String']>;
  last_starts_with_nocase?: InputMaybe<Scalars['String']>;
  last_not_starts_with?: InputMaybe<Scalars['String']>;
  last_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  last_ends_with?: InputMaybe<Scalars['String']>;
  last_ends_with_nocase?: InputMaybe<Scalars['String']>;
  last_not_ends_with?: InputMaybe<Scalars['String']>;
  last_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  last_?: InputMaybe<MeTokenState_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MonthlyMeTokenState_filter>>>;
  or?: InputMaybe<Array<InputMaybe<MonthlyMeTokenState_filter>>>;
};

export type MonthlyMeTokenState_orderBy =
  | 'id'
  | 'metoken'
  | 'metoken__id'
  | 'metoken__createdAt'
  | 'metoken__name'
  | 'metoken__symbol'
  | 'start'
  | 'end'
  | 'first'
  | 'first__id'
  | 'first__balanceLocked'
  | 'first__balancePooled'
  | 'first__currentRate'
  | 'first__buyRate'
  | 'first__sellRate'
  | 'first__spendRate'
  | 'first__supply'
  | 'first__timestamp'
  | 'first__totalHolders'
  | 'first__tvl'
  | 'last'
  | 'last__id'
  | 'last__balanceLocked'
  | 'last__balancePooled'
  | 'last__currentRate'
  | 'last__buyRate'
  | 'last__sellRate'
  | 'last__spendRate'
  | 'last__supply'
  | 'last__timestamp'
  | 'last__totalHolders'
  | 'last__tvl';

export type MonthlyPriceCandleGroup = {
  id: Scalars['ID'];
  from: Scalars['BigInt'];
  to: Scalars['BigInt'];
  currencyCandles: Array<MonthlyCurrencyPriceCandle>;
};


export type MonthlyPriceCandleGroupcurrencyCandlesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MonthlyCurrencyPriceCandle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MonthlyCurrencyPriceCandle_filter>;
};

export type MonthlyPriceCandleGroup_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  from?: InputMaybe<Scalars['BigInt']>;
  from_not?: InputMaybe<Scalars['BigInt']>;
  from_gt?: InputMaybe<Scalars['BigInt']>;
  from_lt?: InputMaybe<Scalars['BigInt']>;
  from_gte?: InputMaybe<Scalars['BigInt']>;
  from_lte?: InputMaybe<Scalars['BigInt']>;
  from_in?: InputMaybe<Array<Scalars['BigInt']>>;
  from_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<Scalars['BigInt']>;
  to_not?: InputMaybe<Scalars['BigInt']>;
  to_gt?: InputMaybe<Scalars['BigInt']>;
  to_lt?: InputMaybe<Scalars['BigInt']>;
  to_gte?: InputMaybe<Scalars['BigInt']>;
  to_lte?: InputMaybe<Scalars['BigInt']>;
  to_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currencyCandles_?: InputMaybe<MonthlyCurrencyPriceCandle_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MonthlyPriceCandleGroup_filter>>>;
  or?: InputMaybe<Array<InputMaybe<MonthlyPriceCandleGroup_filter>>>;
};

export type MonthlyPriceCandleGroup_orderBy =
  | 'id'
  | 'from'
  | 'to'
  | 'currencyCandles';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type PeriodicMeTokenStateInterface = {
  id: Scalars['ID'];
  metoken: MeToken;
  start: Scalars['BigInt'];
  end: Scalars['BigInt'];
  first: MeTokenState;
  last: MeTokenState;
};

export type PeriodicMeTokenStateInterface_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  metoken?: InputMaybe<Scalars['String']>;
  metoken_not?: InputMaybe<Scalars['String']>;
  metoken_gt?: InputMaybe<Scalars['String']>;
  metoken_lt?: InputMaybe<Scalars['String']>;
  metoken_gte?: InputMaybe<Scalars['String']>;
  metoken_lte?: InputMaybe<Scalars['String']>;
  metoken_in?: InputMaybe<Array<Scalars['String']>>;
  metoken_not_in?: InputMaybe<Array<Scalars['String']>>;
  metoken_contains?: InputMaybe<Scalars['String']>;
  metoken_contains_nocase?: InputMaybe<Scalars['String']>;
  metoken_not_contains?: InputMaybe<Scalars['String']>;
  metoken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  metoken_starts_with?: InputMaybe<Scalars['String']>;
  metoken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metoken_not_starts_with?: InputMaybe<Scalars['String']>;
  metoken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metoken_ends_with?: InputMaybe<Scalars['String']>;
  metoken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metoken_not_ends_with?: InputMaybe<Scalars['String']>;
  metoken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metoken_?: InputMaybe<MeToken_filter>;
  start?: InputMaybe<Scalars['BigInt']>;
  start_not?: InputMaybe<Scalars['BigInt']>;
  start_gt?: InputMaybe<Scalars['BigInt']>;
  start_lt?: InputMaybe<Scalars['BigInt']>;
  start_gte?: InputMaybe<Scalars['BigInt']>;
  start_lte?: InputMaybe<Scalars['BigInt']>;
  start_in?: InputMaybe<Array<Scalars['BigInt']>>;
  start_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  end?: InputMaybe<Scalars['BigInt']>;
  end_not?: InputMaybe<Scalars['BigInt']>;
  end_gt?: InputMaybe<Scalars['BigInt']>;
  end_lt?: InputMaybe<Scalars['BigInt']>;
  end_gte?: InputMaybe<Scalars['BigInt']>;
  end_lte?: InputMaybe<Scalars['BigInt']>;
  end_in?: InputMaybe<Array<Scalars['BigInt']>>;
  end_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  first?: InputMaybe<Scalars['String']>;
  first_not?: InputMaybe<Scalars['String']>;
  first_gt?: InputMaybe<Scalars['String']>;
  first_lt?: InputMaybe<Scalars['String']>;
  first_gte?: InputMaybe<Scalars['String']>;
  first_lte?: InputMaybe<Scalars['String']>;
  first_in?: InputMaybe<Array<Scalars['String']>>;
  first_not_in?: InputMaybe<Array<Scalars['String']>>;
  first_contains?: InputMaybe<Scalars['String']>;
  first_contains_nocase?: InputMaybe<Scalars['String']>;
  first_not_contains?: InputMaybe<Scalars['String']>;
  first_not_contains_nocase?: InputMaybe<Scalars['String']>;
  first_starts_with?: InputMaybe<Scalars['String']>;
  first_starts_with_nocase?: InputMaybe<Scalars['String']>;
  first_not_starts_with?: InputMaybe<Scalars['String']>;
  first_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  first_ends_with?: InputMaybe<Scalars['String']>;
  first_ends_with_nocase?: InputMaybe<Scalars['String']>;
  first_not_ends_with?: InputMaybe<Scalars['String']>;
  first_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  first_?: InputMaybe<MeTokenState_filter>;
  last?: InputMaybe<Scalars['String']>;
  last_not?: InputMaybe<Scalars['String']>;
  last_gt?: InputMaybe<Scalars['String']>;
  last_lt?: InputMaybe<Scalars['String']>;
  last_gte?: InputMaybe<Scalars['String']>;
  last_lte?: InputMaybe<Scalars['String']>;
  last_in?: InputMaybe<Array<Scalars['String']>>;
  last_not_in?: InputMaybe<Array<Scalars['String']>>;
  last_contains?: InputMaybe<Scalars['String']>;
  last_contains_nocase?: InputMaybe<Scalars['String']>;
  last_not_contains?: InputMaybe<Scalars['String']>;
  last_not_contains_nocase?: InputMaybe<Scalars['String']>;
  last_starts_with?: InputMaybe<Scalars['String']>;
  last_starts_with_nocase?: InputMaybe<Scalars['String']>;
  last_not_starts_with?: InputMaybe<Scalars['String']>;
  last_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  last_ends_with?: InputMaybe<Scalars['String']>;
  last_ends_with_nocase?: InputMaybe<Scalars['String']>;
  last_not_ends_with?: InputMaybe<Scalars['String']>;
  last_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  last_?: InputMaybe<MeTokenState_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PeriodicMeTokenStateInterface_filter>>>;
  or?: InputMaybe<Array<InputMaybe<PeriodicMeTokenStateInterface_filter>>>;
};

export type PeriodicMeTokenStateInterface_orderBy =
  | 'id'
  | 'metoken'
  | 'metoken__id'
  | 'metoken__createdAt'
  | 'metoken__name'
  | 'metoken__symbol'
  | 'start'
  | 'end'
  | 'first'
  | 'first__id'
  | 'first__balanceLocked'
  | 'first__balancePooled'
  | 'first__currentRate'
  | 'first__buyRate'
  | 'first__sellRate'
  | 'first__spendRate'
  | 'first__supply'
  | 'first__timestamp'
  | 'first__totalHolders'
  | 'first__tvl'
  | 'last'
  | 'last__id'
  | 'last__balanceLocked'
  | 'last__balancePooled'
  | 'last__currentRate'
  | 'last__buyRate'
  | 'last__sellRate'
  | 'last__spendRate'
  | 'last__supply'
  | 'last__timestamp'
  | 'last__totalHolders'
  | 'last__tvl';

export type Query = {
  eacaggregatorProxy?: Maybe<EACAggregatorProxy>;
  eacaggregatorProxies: Array<EACAggregatorProxy>;
  collateralToken?: Maybe<CollateralToken>;
  collateralTokens: Array<CollateralToken>;
  cron?: Maybe<Cron>;
  crons: Array<Cron>;
  currency?: Maybe<Currency>;
  currencies: Array<Currency>;
  currencyPrice?: Maybe<CurrencyPrice>;
  currencyPrices: Array<CurrencyPrice>;
  hourlyCurrencyPriceCandle?: Maybe<HourlyCurrencyPriceCandle>;
  hourlyCurrencyPriceCandles: Array<HourlyCurrencyPriceCandle>;
  dailyCurrencyPriceCandle?: Maybe<DailyCurrencyPriceCandle>;
  dailyCurrencyPriceCandles: Array<DailyCurrencyPriceCandle>;
  monthlyCurrencyPriceCandle?: Maybe<MonthlyCurrencyPriceCandle>;
  monthlyCurrencyPriceCandles: Array<MonthlyCurrencyPriceCandle>;
  hourlyPriceCandleGroup?: Maybe<HourlyPriceCandleGroup>;
  hourlyPriceCandleGroups: Array<HourlyPriceCandleGroup>;
  dailyPriceCandleGroup?: Maybe<DailyPriceCandleGroup>;
  dailyPriceCandleGroups: Array<DailyPriceCandleGroup>;
  monthlyPriceCandleGroup?: Maybe<MonthlyPriceCandleGroup>;
  monthlyPriceCandleGroups: Array<MonthlyPriceCandleGroup>;
  holding?: Maybe<Holding>;
  holdings: Array<Holding>;
  holdingState?: Maybe<HoldingState>;
  holdingStates: Array<HoldingState>;
  hub?: Maybe<Hub>;
  hubs: Array<Hub>;
  meToken?: Maybe<MeToken>;
  meTokens: Array<MeToken>;
  meTokenState?: Maybe<MeTokenState>;
  meTokenStates: Array<MeTokenState>;
  hourlyMeTokenState?: Maybe<HourlyMeTokenState>;
  hourlyMeTokenStates: Array<HourlyMeTokenState>;
  dailyMeTokenState?: Maybe<DailyMeTokenState>;
  dailyMeTokenStates: Array<DailyMeTokenState>;
  monthlyMeTokenState?: Maybe<MonthlyMeTokenState>;
  monthlyMeTokenStates: Array<MonthlyMeTokenState>;
  tokenTransaction?: Maybe<TokenTransaction>;
  tokenTransactions: Array<TokenTransaction>;
  user?: Maybe<User>;
  users: Array<User>;
  periodicMeTokenStateInterface?: Maybe<PeriodicMeTokenStateInterface>;
  periodicMeTokenStateInterfaces: Array<PeriodicMeTokenStateInterface>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QueryeacaggregatorProxyArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryeacaggregatorProxiesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<EACAggregatorProxy_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<EACAggregatorProxy_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycollateralTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycollateralTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CollateralToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CollateralToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycronArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycronsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Cron_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Cron_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycurrencyArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycurrenciesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Currency_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Currency_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycurrencyPriceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycurrencyPricesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CurrencyPrice_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CurrencyPrice_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryhourlyCurrencyPriceCandleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryhourlyCurrencyPriceCandlesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<HourlyCurrencyPriceCandle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<HourlyCurrencyPriceCandle_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydailyCurrencyPriceCandleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydailyCurrencyPriceCandlesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DailyCurrencyPriceCandle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DailyCurrencyPriceCandle_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymonthlyCurrencyPriceCandleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymonthlyCurrencyPriceCandlesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MonthlyCurrencyPriceCandle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MonthlyCurrencyPriceCandle_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryhourlyPriceCandleGroupArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryhourlyPriceCandleGroupsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<HourlyPriceCandleGroup_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<HourlyPriceCandleGroup_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydailyPriceCandleGroupArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydailyPriceCandleGroupsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DailyPriceCandleGroup_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DailyPriceCandleGroup_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymonthlyPriceCandleGroupArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymonthlyPriceCandleGroupsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MonthlyPriceCandleGroup_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MonthlyPriceCandleGroup_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryholdingArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryholdingsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Holding_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Holding_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryholdingStateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryholdingStatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<HoldingState_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<HoldingState_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryhubArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryhubsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Hub_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Hub_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymeTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymeTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MeToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MeToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymeTokenStateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymeTokenStatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MeTokenState_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MeTokenState_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryhourlyMeTokenStateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryhourlyMeTokenStatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<HourlyMeTokenState_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<HourlyMeTokenState_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydailyMeTokenStateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydailyMeTokenStatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DailyMeTokenState_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DailyMeTokenState_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymonthlyMeTokenStateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymonthlyMeTokenStatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MonthlyMeTokenState_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MonthlyMeTokenState_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenTransactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenTransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenTransaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenTransaction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryusersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryperiodicMeTokenStateInterfaceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryperiodicMeTokenStateInterfacesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PeriodicMeTokenStateInterface_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PeriodicMeTokenStateInterface_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Subscription = {
  eacaggregatorProxy?: Maybe<EACAggregatorProxy>;
  eacaggregatorProxies: Array<EACAggregatorProxy>;
  collateralToken?: Maybe<CollateralToken>;
  collateralTokens: Array<CollateralToken>;
  cron?: Maybe<Cron>;
  crons: Array<Cron>;
  currency?: Maybe<Currency>;
  currencies: Array<Currency>;
  currencyPrice?: Maybe<CurrencyPrice>;
  currencyPrices: Array<CurrencyPrice>;
  hourlyCurrencyPriceCandle?: Maybe<HourlyCurrencyPriceCandle>;
  hourlyCurrencyPriceCandles: Array<HourlyCurrencyPriceCandle>;
  dailyCurrencyPriceCandle?: Maybe<DailyCurrencyPriceCandle>;
  dailyCurrencyPriceCandles: Array<DailyCurrencyPriceCandle>;
  monthlyCurrencyPriceCandle?: Maybe<MonthlyCurrencyPriceCandle>;
  monthlyCurrencyPriceCandles: Array<MonthlyCurrencyPriceCandle>;
  hourlyPriceCandleGroup?: Maybe<HourlyPriceCandleGroup>;
  hourlyPriceCandleGroups: Array<HourlyPriceCandleGroup>;
  dailyPriceCandleGroup?: Maybe<DailyPriceCandleGroup>;
  dailyPriceCandleGroups: Array<DailyPriceCandleGroup>;
  monthlyPriceCandleGroup?: Maybe<MonthlyPriceCandleGroup>;
  monthlyPriceCandleGroups: Array<MonthlyPriceCandleGroup>;
  holding?: Maybe<Holding>;
  holdings: Array<Holding>;
  holdingState?: Maybe<HoldingState>;
  holdingStates: Array<HoldingState>;
  hub?: Maybe<Hub>;
  hubs: Array<Hub>;
  meToken?: Maybe<MeToken>;
  meTokens: Array<MeToken>;
  meTokenState?: Maybe<MeTokenState>;
  meTokenStates: Array<MeTokenState>;
  hourlyMeTokenState?: Maybe<HourlyMeTokenState>;
  hourlyMeTokenStates: Array<HourlyMeTokenState>;
  dailyMeTokenState?: Maybe<DailyMeTokenState>;
  dailyMeTokenStates: Array<DailyMeTokenState>;
  monthlyMeTokenState?: Maybe<MonthlyMeTokenState>;
  monthlyMeTokenStates: Array<MonthlyMeTokenState>;
  tokenTransaction?: Maybe<TokenTransaction>;
  tokenTransactions: Array<TokenTransaction>;
  user?: Maybe<User>;
  users: Array<User>;
  periodicMeTokenStateInterface?: Maybe<PeriodicMeTokenStateInterface>;
  periodicMeTokenStateInterfaces: Array<PeriodicMeTokenStateInterface>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptioneacaggregatorProxyArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioneacaggregatorProxiesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<EACAggregatorProxy_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<EACAggregatorProxy_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncollateralTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncollateralTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CollateralToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CollateralToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncronArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncronsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Cron_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Cron_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncurrencyArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncurrenciesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Currency_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Currency_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncurrencyPriceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncurrencyPricesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CurrencyPrice_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CurrencyPrice_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionhourlyCurrencyPriceCandleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionhourlyCurrencyPriceCandlesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<HourlyCurrencyPriceCandle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<HourlyCurrencyPriceCandle_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondailyCurrencyPriceCandleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondailyCurrencyPriceCandlesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DailyCurrencyPriceCandle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DailyCurrencyPriceCandle_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmonthlyCurrencyPriceCandleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmonthlyCurrencyPriceCandlesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MonthlyCurrencyPriceCandle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MonthlyCurrencyPriceCandle_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionhourlyPriceCandleGroupArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionhourlyPriceCandleGroupsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<HourlyPriceCandleGroup_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<HourlyPriceCandleGroup_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondailyPriceCandleGroupArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondailyPriceCandleGroupsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DailyPriceCandleGroup_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DailyPriceCandleGroup_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmonthlyPriceCandleGroupArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmonthlyPriceCandleGroupsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MonthlyPriceCandleGroup_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MonthlyPriceCandleGroup_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionholdingArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionholdingsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Holding_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Holding_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionholdingStateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionholdingStatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<HoldingState_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<HoldingState_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionhubArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionhubsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Hub_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Hub_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmeTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmeTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MeToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MeToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmeTokenStateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmeTokenStatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MeTokenState_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MeTokenState_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionhourlyMeTokenStateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionhourlyMeTokenStatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<HourlyMeTokenState_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<HourlyMeTokenState_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondailyMeTokenStateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondailyMeTokenStatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DailyMeTokenState_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DailyMeTokenState_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmonthlyMeTokenStateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmonthlyMeTokenStatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MonthlyMeTokenState_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MonthlyMeTokenState_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenTransactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenTransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenTransaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenTransaction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionusersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionperiodicMeTokenStateInterfaceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionperiodicMeTokenStateInterfacesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PeriodicMeTokenStateInterface_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PeriodicMeTokenStateInterface_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type TokenTransaction = {
  id: Scalars['ID'];
  type?: Maybe<TransactionType>;
  from: Scalars['Bytes'];
  to: Scalars['Bytes'];
  collateralAmount: Scalars['BigDecimal'];
  metoken: MeToken;
  metokenAmount: Scalars['BigDecimal'];
  timestamp: Scalars['BigInt'];
};

export type TokenTransaction_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  type?: InputMaybe<TransactionType>;
  type_not?: InputMaybe<TransactionType>;
  type_in?: InputMaybe<Array<TransactionType>>;
  type_not_in?: InputMaybe<Array<TransactionType>>;
  from?: InputMaybe<Scalars['Bytes']>;
  from_not?: InputMaybe<Scalars['Bytes']>;
  from_gt?: InputMaybe<Scalars['Bytes']>;
  from_lt?: InputMaybe<Scalars['Bytes']>;
  from_gte?: InputMaybe<Scalars['Bytes']>;
  from_lte?: InputMaybe<Scalars['Bytes']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from_contains?: InputMaybe<Scalars['Bytes']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']>;
  to?: InputMaybe<Scalars['Bytes']>;
  to_not?: InputMaybe<Scalars['Bytes']>;
  to_gt?: InputMaybe<Scalars['Bytes']>;
  to_lt?: InputMaybe<Scalars['Bytes']>;
  to_gte?: InputMaybe<Scalars['Bytes']>;
  to_lte?: InputMaybe<Scalars['Bytes']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_contains?: InputMaybe<Scalars['Bytes']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']>;
  collateralAmount?: InputMaybe<Scalars['BigDecimal']>;
  collateralAmount_not?: InputMaybe<Scalars['BigDecimal']>;
  collateralAmount_gt?: InputMaybe<Scalars['BigDecimal']>;
  collateralAmount_lt?: InputMaybe<Scalars['BigDecimal']>;
  collateralAmount_gte?: InputMaybe<Scalars['BigDecimal']>;
  collateralAmount_lte?: InputMaybe<Scalars['BigDecimal']>;
  collateralAmount_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  collateralAmount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  metoken?: InputMaybe<Scalars['String']>;
  metoken_not?: InputMaybe<Scalars['String']>;
  metoken_gt?: InputMaybe<Scalars['String']>;
  metoken_lt?: InputMaybe<Scalars['String']>;
  metoken_gte?: InputMaybe<Scalars['String']>;
  metoken_lte?: InputMaybe<Scalars['String']>;
  metoken_in?: InputMaybe<Array<Scalars['String']>>;
  metoken_not_in?: InputMaybe<Array<Scalars['String']>>;
  metoken_contains?: InputMaybe<Scalars['String']>;
  metoken_contains_nocase?: InputMaybe<Scalars['String']>;
  metoken_not_contains?: InputMaybe<Scalars['String']>;
  metoken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  metoken_starts_with?: InputMaybe<Scalars['String']>;
  metoken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metoken_not_starts_with?: InputMaybe<Scalars['String']>;
  metoken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metoken_ends_with?: InputMaybe<Scalars['String']>;
  metoken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metoken_not_ends_with?: InputMaybe<Scalars['String']>;
  metoken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metoken_?: InputMaybe<MeToken_filter>;
  metokenAmount?: InputMaybe<Scalars['BigDecimal']>;
  metokenAmount_not?: InputMaybe<Scalars['BigDecimal']>;
  metokenAmount_gt?: InputMaybe<Scalars['BigDecimal']>;
  metokenAmount_lt?: InputMaybe<Scalars['BigDecimal']>;
  metokenAmount_gte?: InputMaybe<Scalars['BigDecimal']>;
  metokenAmount_lte?: InputMaybe<Scalars['BigDecimal']>;
  metokenAmount_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  metokenAmount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TokenTransaction_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TokenTransaction_filter>>>;
};

export type TokenTransaction_orderBy =
  | 'id'
  | 'type'
  | 'from'
  | 'to'
  | 'collateralAmount'
  | 'metoken'
  | 'metoken__id'
  | 'metoken__createdAt'
  | 'metoken__name'
  | 'metoken__symbol'
  | 'metokenAmount'
  | 'timestamp';

export type TransactionType =
  | 'token_bought'
  | 'token_sold'
  | 'token_spent'
  | 'token_transferred';

export type User = {
  id: Scalars['ID'];
  holdings?: Maybe<Array<Holding>>;
  metoken?: Maybe<MeToken>;
  totalHoldings?: Maybe<Scalars['BigInt']>;
  transactions?: Maybe<Array<TokenTransaction>>;
};


export type UserholdingsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Holding_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Holding_filter>;
};


export type UsertransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenTransaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenTransaction_filter>;
};

export type User_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  holdings_?: InputMaybe<Holding_filter>;
  metoken?: InputMaybe<Scalars['String']>;
  metoken_not?: InputMaybe<Scalars['String']>;
  metoken_gt?: InputMaybe<Scalars['String']>;
  metoken_lt?: InputMaybe<Scalars['String']>;
  metoken_gte?: InputMaybe<Scalars['String']>;
  metoken_lte?: InputMaybe<Scalars['String']>;
  metoken_in?: InputMaybe<Array<Scalars['String']>>;
  metoken_not_in?: InputMaybe<Array<Scalars['String']>>;
  metoken_contains?: InputMaybe<Scalars['String']>;
  metoken_contains_nocase?: InputMaybe<Scalars['String']>;
  metoken_not_contains?: InputMaybe<Scalars['String']>;
  metoken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  metoken_starts_with?: InputMaybe<Scalars['String']>;
  metoken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metoken_not_starts_with?: InputMaybe<Scalars['String']>;
  metoken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metoken_ends_with?: InputMaybe<Scalars['String']>;
  metoken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metoken_not_ends_with?: InputMaybe<Scalars['String']>;
  metoken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metoken_?: InputMaybe<MeToken_filter>;
  totalHoldings?: InputMaybe<Scalars['BigInt']>;
  totalHoldings_not?: InputMaybe<Scalars['BigInt']>;
  totalHoldings_gt?: InputMaybe<Scalars['BigInt']>;
  totalHoldings_lt?: InputMaybe<Scalars['BigInt']>;
  totalHoldings_gte?: InputMaybe<Scalars['BigInt']>;
  totalHoldings_lte?: InputMaybe<Scalars['BigInt']>;
  totalHoldings_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalHoldings_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactions?: InputMaybe<Array<Scalars['String']>>;
  transactions_not?: InputMaybe<Array<Scalars['String']>>;
  transactions_contains?: InputMaybe<Array<Scalars['String']>>;
  transactions_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  transactions_not_contains?: InputMaybe<Array<Scalars['String']>>;
  transactions_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  transactions_?: InputMaybe<TokenTransaction_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<User_filter>>>;
  or?: InputMaybe<Array<InputMaybe<User_filter>>>;
};

export type User_orderBy =
  | 'id'
  | 'holdings'
  | 'metoken'
  | 'metoken__id'
  | 'metoken__createdAt'
  | 'metoken__name'
  | 'metoken__symbol'
  | 'totalHoldings'
  | 'transactions';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  eacaggregatorProxy: InContextSdkMethod<Query['eacaggregatorProxy'], QueryeacaggregatorProxyArgs, MeshContext>,
  /** null **/
  eacaggregatorProxies: InContextSdkMethod<Query['eacaggregatorProxies'], QueryeacaggregatorProxiesArgs, MeshContext>,
  /** null **/
  collateralToken: InContextSdkMethod<Query['collateralToken'], QuerycollateralTokenArgs, MeshContext>,
  /** null **/
  collateralTokens: InContextSdkMethod<Query['collateralTokens'], QuerycollateralTokensArgs, MeshContext>,
  /** null **/
  cron: InContextSdkMethod<Query['cron'], QuerycronArgs, MeshContext>,
  /** null **/
  crons: InContextSdkMethod<Query['crons'], QuerycronsArgs, MeshContext>,
  /** null **/
  currency: InContextSdkMethod<Query['currency'], QuerycurrencyArgs, MeshContext>,
  /** null **/
  currencies: InContextSdkMethod<Query['currencies'], QuerycurrenciesArgs, MeshContext>,
  /** null **/
  currencyPrice: InContextSdkMethod<Query['currencyPrice'], QuerycurrencyPriceArgs, MeshContext>,
  /** null **/
  currencyPrices: InContextSdkMethod<Query['currencyPrices'], QuerycurrencyPricesArgs, MeshContext>,
  /** null **/
  hourlyCurrencyPriceCandle: InContextSdkMethod<Query['hourlyCurrencyPriceCandle'], QueryhourlyCurrencyPriceCandleArgs, MeshContext>,
  /** null **/
  hourlyCurrencyPriceCandles: InContextSdkMethod<Query['hourlyCurrencyPriceCandles'], QueryhourlyCurrencyPriceCandlesArgs, MeshContext>,
  /** null **/
  dailyCurrencyPriceCandle: InContextSdkMethod<Query['dailyCurrencyPriceCandle'], QuerydailyCurrencyPriceCandleArgs, MeshContext>,
  /** null **/
  dailyCurrencyPriceCandles: InContextSdkMethod<Query['dailyCurrencyPriceCandles'], QuerydailyCurrencyPriceCandlesArgs, MeshContext>,
  /** null **/
  monthlyCurrencyPriceCandle: InContextSdkMethod<Query['monthlyCurrencyPriceCandle'], QuerymonthlyCurrencyPriceCandleArgs, MeshContext>,
  /** null **/
  monthlyCurrencyPriceCandles: InContextSdkMethod<Query['monthlyCurrencyPriceCandles'], QuerymonthlyCurrencyPriceCandlesArgs, MeshContext>,
  /** null **/
  hourlyPriceCandleGroup: InContextSdkMethod<Query['hourlyPriceCandleGroup'], QueryhourlyPriceCandleGroupArgs, MeshContext>,
  /** null **/
  hourlyPriceCandleGroups: InContextSdkMethod<Query['hourlyPriceCandleGroups'], QueryhourlyPriceCandleGroupsArgs, MeshContext>,
  /** null **/
  dailyPriceCandleGroup: InContextSdkMethod<Query['dailyPriceCandleGroup'], QuerydailyPriceCandleGroupArgs, MeshContext>,
  /** null **/
  dailyPriceCandleGroups: InContextSdkMethod<Query['dailyPriceCandleGroups'], QuerydailyPriceCandleGroupsArgs, MeshContext>,
  /** null **/
  monthlyPriceCandleGroup: InContextSdkMethod<Query['monthlyPriceCandleGroup'], QuerymonthlyPriceCandleGroupArgs, MeshContext>,
  /** null **/
  monthlyPriceCandleGroups: InContextSdkMethod<Query['monthlyPriceCandleGroups'], QuerymonthlyPriceCandleGroupsArgs, MeshContext>,
  /** null **/
  holding: InContextSdkMethod<Query['holding'], QueryholdingArgs, MeshContext>,
  /** null **/
  holdings: InContextSdkMethod<Query['holdings'], QueryholdingsArgs, MeshContext>,
  /** null **/
  holdingState: InContextSdkMethod<Query['holdingState'], QueryholdingStateArgs, MeshContext>,
  /** null **/
  holdingStates: InContextSdkMethod<Query['holdingStates'], QueryholdingStatesArgs, MeshContext>,
  /** null **/
  hub: InContextSdkMethod<Query['hub'], QueryhubArgs, MeshContext>,
  /** null **/
  hubs: InContextSdkMethod<Query['hubs'], QueryhubsArgs, MeshContext>,
  /** null **/
  meToken: InContextSdkMethod<Query['meToken'], QuerymeTokenArgs, MeshContext>,
  /** null **/
  meTokens: InContextSdkMethod<Query['meTokens'], QuerymeTokensArgs, MeshContext>,
  /** null **/
  meTokenState: InContextSdkMethod<Query['meTokenState'], QuerymeTokenStateArgs, MeshContext>,
  /** null **/
  meTokenStates: InContextSdkMethod<Query['meTokenStates'], QuerymeTokenStatesArgs, MeshContext>,
  /** null **/
  hourlyMeTokenState: InContextSdkMethod<Query['hourlyMeTokenState'], QueryhourlyMeTokenStateArgs, MeshContext>,
  /** null **/
  hourlyMeTokenStates: InContextSdkMethod<Query['hourlyMeTokenStates'], QueryhourlyMeTokenStatesArgs, MeshContext>,
  /** null **/
  dailyMeTokenState: InContextSdkMethod<Query['dailyMeTokenState'], QuerydailyMeTokenStateArgs, MeshContext>,
  /** null **/
  dailyMeTokenStates: InContextSdkMethod<Query['dailyMeTokenStates'], QuerydailyMeTokenStatesArgs, MeshContext>,
  /** null **/
  monthlyMeTokenState: InContextSdkMethod<Query['monthlyMeTokenState'], QuerymonthlyMeTokenStateArgs, MeshContext>,
  /** null **/
  monthlyMeTokenStates: InContextSdkMethod<Query['monthlyMeTokenStates'], QuerymonthlyMeTokenStatesArgs, MeshContext>,
  /** null **/
  tokenTransaction: InContextSdkMethod<Query['tokenTransaction'], QuerytokenTransactionArgs, MeshContext>,
  /** null **/
  tokenTransactions: InContextSdkMethod<Query['tokenTransactions'], QuerytokenTransactionsArgs, MeshContext>,
  /** null **/
  user: InContextSdkMethod<Query['user'], QueryuserArgs, MeshContext>,
  /** null **/
  users: InContextSdkMethod<Query['users'], QueryusersArgs, MeshContext>,
  /** null **/
  periodicMeTokenStateInterface: InContextSdkMethod<Query['periodicMeTokenStateInterface'], QueryperiodicMeTokenStateInterfaceArgs, MeshContext>,
  /** null **/
  periodicMeTokenStateInterfaces: InContextSdkMethod<Query['periodicMeTokenStateInterfaces'], QueryperiodicMeTokenStateInterfacesArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  eacaggregatorProxy: InContextSdkMethod<Subscription['eacaggregatorProxy'], SubscriptioneacaggregatorProxyArgs, MeshContext>,
  /** null **/
  eacaggregatorProxies: InContextSdkMethod<Subscription['eacaggregatorProxies'], SubscriptioneacaggregatorProxiesArgs, MeshContext>,
  /** null **/
  collateralToken: InContextSdkMethod<Subscription['collateralToken'], SubscriptioncollateralTokenArgs, MeshContext>,
  /** null **/
  collateralTokens: InContextSdkMethod<Subscription['collateralTokens'], SubscriptioncollateralTokensArgs, MeshContext>,
  /** null **/
  cron: InContextSdkMethod<Subscription['cron'], SubscriptioncronArgs, MeshContext>,
  /** null **/
  crons: InContextSdkMethod<Subscription['crons'], SubscriptioncronsArgs, MeshContext>,
  /** null **/
  currency: InContextSdkMethod<Subscription['currency'], SubscriptioncurrencyArgs, MeshContext>,
  /** null **/
  currencies: InContextSdkMethod<Subscription['currencies'], SubscriptioncurrenciesArgs, MeshContext>,
  /** null **/
  currencyPrice: InContextSdkMethod<Subscription['currencyPrice'], SubscriptioncurrencyPriceArgs, MeshContext>,
  /** null **/
  currencyPrices: InContextSdkMethod<Subscription['currencyPrices'], SubscriptioncurrencyPricesArgs, MeshContext>,
  /** null **/
  hourlyCurrencyPriceCandle: InContextSdkMethod<Subscription['hourlyCurrencyPriceCandle'], SubscriptionhourlyCurrencyPriceCandleArgs, MeshContext>,
  /** null **/
  hourlyCurrencyPriceCandles: InContextSdkMethod<Subscription['hourlyCurrencyPriceCandles'], SubscriptionhourlyCurrencyPriceCandlesArgs, MeshContext>,
  /** null **/
  dailyCurrencyPriceCandle: InContextSdkMethod<Subscription['dailyCurrencyPriceCandle'], SubscriptiondailyCurrencyPriceCandleArgs, MeshContext>,
  /** null **/
  dailyCurrencyPriceCandles: InContextSdkMethod<Subscription['dailyCurrencyPriceCandles'], SubscriptiondailyCurrencyPriceCandlesArgs, MeshContext>,
  /** null **/
  monthlyCurrencyPriceCandle: InContextSdkMethod<Subscription['monthlyCurrencyPriceCandle'], SubscriptionmonthlyCurrencyPriceCandleArgs, MeshContext>,
  /** null **/
  monthlyCurrencyPriceCandles: InContextSdkMethod<Subscription['monthlyCurrencyPriceCandles'], SubscriptionmonthlyCurrencyPriceCandlesArgs, MeshContext>,
  /** null **/
  hourlyPriceCandleGroup: InContextSdkMethod<Subscription['hourlyPriceCandleGroup'], SubscriptionhourlyPriceCandleGroupArgs, MeshContext>,
  /** null **/
  hourlyPriceCandleGroups: InContextSdkMethod<Subscription['hourlyPriceCandleGroups'], SubscriptionhourlyPriceCandleGroupsArgs, MeshContext>,
  /** null **/
  dailyPriceCandleGroup: InContextSdkMethod<Subscription['dailyPriceCandleGroup'], SubscriptiondailyPriceCandleGroupArgs, MeshContext>,
  /** null **/
  dailyPriceCandleGroups: InContextSdkMethod<Subscription['dailyPriceCandleGroups'], SubscriptiondailyPriceCandleGroupsArgs, MeshContext>,
  /** null **/
  monthlyPriceCandleGroup: InContextSdkMethod<Subscription['monthlyPriceCandleGroup'], SubscriptionmonthlyPriceCandleGroupArgs, MeshContext>,
  /** null **/
  monthlyPriceCandleGroups: InContextSdkMethod<Subscription['monthlyPriceCandleGroups'], SubscriptionmonthlyPriceCandleGroupsArgs, MeshContext>,
  /** null **/
  holding: InContextSdkMethod<Subscription['holding'], SubscriptionholdingArgs, MeshContext>,
  /** null **/
  holdings: InContextSdkMethod<Subscription['holdings'], SubscriptionholdingsArgs, MeshContext>,
  /** null **/
  holdingState: InContextSdkMethod<Subscription['holdingState'], SubscriptionholdingStateArgs, MeshContext>,
  /** null **/
  holdingStates: InContextSdkMethod<Subscription['holdingStates'], SubscriptionholdingStatesArgs, MeshContext>,
  /** null **/
  hub: InContextSdkMethod<Subscription['hub'], SubscriptionhubArgs, MeshContext>,
  /** null **/
  hubs: InContextSdkMethod<Subscription['hubs'], SubscriptionhubsArgs, MeshContext>,
  /** null **/
  meToken: InContextSdkMethod<Subscription['meToken'], SubscriptionmeTokenArgs, MeshContext>,
  /** null **/
  meTokens: InContextSdkMethod<Subscription['meTokens'], SubscriptionmeTokensArgs, MeshContext>,
  /** null **/
  meTokenState: InContextSdkMethod<Subscription['meTokenState'], SubscriptionmeTokenStateArgs, MeshContext>,
  /** null **/
  meTokenStates: InContextSdkMethod<Subscription['meTokenStates'], SubscriptionmeTokenStatesArgs, MeshContext>,
  /** null **/
  hourlyMeTokenState: InContextSdkMethod<Subscription['hourlyMeTokenState'], SubscriptionhourlyMeTokenStateArgs, MeshContext>,
  /** null **/
  hourlyMeTokenStates: InContextSdkMethod<Subscription['hourlyMeTokenStates'], SubscriptionhourlyMeTokenStatesArgs, MeshContext>,
  /** null **/
  dailyMeTokenState: InContextSdkMethod<Subscription['dailyMeTokenState'], SubscriptiondailyMeTokenStateArgs, MeshContext>,
  /** null **/
  dailyMeTokenStates: InContextSdkMethod<Subscription['dailyMeTokenStates'], SubscriptiondailyMeTokenStatesArgs, MeshContext>,
  /** null **/
  monthlyMeTokenState: InContextSdkMethod<Subscription['monthlyMeTokenState'], SubscriptionmonthlyMeTokenStateArgs, MeshContext>,
  /** null **/
  monthlyMeTokenStates: InContextSdkMethod<Subscription['monthlyMeTokenStates'], SubscriptionmonthlyMeTokenStatesArgs, MeshContext>,
  /** null **/
  tokenTransaction: InContextSdkMethod<Subscription['tokenTransaction'], SubscriptiontokenTransactionArgs, MeshContext>,
  /** null **/
  tokenTransactions: InContextSdkMethod<Subscription['tokenTransactions'], SubscriptiontokenTransactionsArgs, MeshContext>,
  /** null **/
  user: InContextSdkMethod<Subscription['user'], SubscriptionuserArgs, MeshContext>,
  /** null **/
  users: InContextSdkMethod<Subscription['users'], SubscriptionusersArgs, MeshContext>,
  /** null **/
  periodicMeTokenStateInterface: InContextSdkMethod<Subscription['periodicMeTokenStateInterface'], SubscriptionperiodicMeTokenStateInterfaceArgs, MeshContext>,
  /** null **/
  periodicMeTokenStateInterfaces: InContextSdkMethod<Subscription['periodicMeTokenStateInterfaces'], SubscriptionperiodicMeTokenStateInterfacesArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["metokens"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
