// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@graphql-mesh/utils';

import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetch as fetchFn } from '@whatwg-node/fetch';

import { MeshResolvedSource } from '@graphql-mesh/runtime';
import { MeshTransform, MeshPlugin } from '@graphql-mesh/types';
import GraphqlHandler from "@graphql-mesh/graphql"
import BareMerger from "@graphql-mesh/merger-bare";
import { printWithCache } from '@graphql-mesh/utils';
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { MetokensTypes } from './sources/metokens/types';
import * as importedModule$0 from "./sources/metokens/introspectionSchema";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



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

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']>;
  CollateralToken: ResolverTypeWrapper<CollateralToken>;
  CollateralToken_filter: CollateralToken_filter;
  CollateralToken_orderBy: CollateralToken_orderBy;
  Cron: ResolverTypeWrapper<Cron>;
  Cron_filter: Cron_filter;
  Cron_orderBy: Cron_orderBy;
  Currency: ResolverTypeWrapper<Currency>;
  CurrencyPrice: ResolverTypeWrapper<CurrencyPrice>;
  CurrencyPrice_filter: CurrencyPrice_filter;
  CurrencyPrice_orderBy: CurrencyPrice_orderBy;
  Currency_filter: Currency_filter;
  Currency_orderBy: Currency_orderBy;
  DailyCurrencyPriceCandle: ResolverTypeWrapper<DailyCurrencyPriceCandle>;
  DailyCurrencyPriceCandle_filter: DailyCurrencyPriceCandle_filter;
  DailyCurrencyPriceCandle_orderBy: DailyCurrencyPriceCandle_orderBy;
  DailyMeTokenState: ResolverTypeWrapper<DailyMeTokenState>;
  DailyMeTokenState_filter: DailyMeTokenState_filter;
  DailyMeTokenState_orderBy: DailyMeTokenState_orderBy;
  DailyPriceCandleGroup: ResolverTypeWrapper<DailyPriceCandleGroup>;
  DailyPriceCandleGroup_filter: DailyPriceCandleGroup_filter;
  DailyPriceCandleGroup_orderBy: DailyPriceCandleGroup_orderBy;
  EACAggregatorProxy: ResolverTypeWrapper<EACAggregatorProxy>;
  EACAggregatorProxy_filter: EACAggregatorProxy_filter;
  EACAggregatorProxy_orderBy: EACAggregatorProxy_orderBy;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Holding: ResolverTypeWrapper<Holding>;
  HoldingState: ResolverTypeWrapper<HoldingState>;
  HoldingState_filter: HoldingState_filter;
  HoldingState_orderBy: HoldingState_orderBy;
  Holding_filter: Holding_filter;
  Holding_orderBy: Holding_orderBy;
  HourlyCurrencyPriceCandle: ResolverTypeWrapper<HourlyCurrencyPriceCandle>;
  HourlyCurrencyPriceCandle_filter: HourlyCurrencyPriceCandle_filter;
  HourlyCurrencyPriceCandle_orderBy: HourlyCurrencyPriceCandle_orderBy;
  HourlyMeTokenState: ResolverTypeWrapper<HourlyMeTokenState>;
  HourlyMeTokenState_filter: HourlyMeTokenState_filter;
  HourlyMeTokenState_orderBy: HourlyMeTokenState_orderBy;
  HourlyPriceCandleGroup: ResolverTypeWrapper<HourlyPriceCandleGroup>;
  HourlyPriceCandleGroup_filter: HourlyPriceCandleGroup_filter;
  HourlyPriceCandleGroup_orderBy: HourlyPriceCandleGroup_orderBy;
  Hub: ResolverTypeWrapper<Hub>;
  Hub_filter: Hub_filter;
  Hub_orderBy: Hub_orderBy;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Int8: ResolverTypeWrapper<Scalars['Int8']>;
  MeToken: ResolverTypeWrapper<MeToken>;
  MeTokenState: ResolverTypeWrapper<MeTokenState>;
  MeTokenState_filter: MeTokenState_filter;
  MeTokenState_orderBy: MeTokenState_orderBy;
  MeToken_filter: MeToken_filter;
  MeToken_orderBy: MeToken_orderBy;
  MonthlyCurrencyPriceCandle: ResolverTypeWrapper<MonthlyCurrencyPriceCandle>;
  MonthlyCurrencyPriceCandle_filter: MonthlyCurrencyPriceCandle_filter;
  MonthlyCurrencyPriceCandle_orderBy: MonthlyCurrencyPriceCandle_orderBy;
  MonthlyMeTokenState: ResolverTypeWrapper<MonthlyMeTokenState>;
  MonthlyMeTokenState_filter: MonthlyMeTokenState_filter;
  MonthlyMeTokenState_orderBy: MonthlyMeTokenState_orderBy;
  MonthlyPriceCandleGroup: ResolverTypeWrapper<MonthlyPriceCandleGroup>;
  MonthlyPriceCandleGroup_filter: MonthlyPriceCandleGroup_filter;
  MonthlyPriceCandleGroup_orderBy: MonthlyPriceCandleGroup_orderBy;
  OrderDirection: OrderDirection;
  PeriodicMeTokenStateInterface: ResolversTypes['DailyMeTokenState'] | ResolversTypes['HourlyMeTokenState'] | ResolversTypes['MonthlyMeTokenState'];
  PeriodicMeTokenStateInterface_filter: PeriodicMeTokenStateInterface_filter;
  PeriodicMeTokenStateInterface_orderBy: PeriodicMeTokenStateInterface_orderBy;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Subscription: ResolverTypeWrapper<{}>;
  TokenTransaction: ResolverTypeWrapper<TokenTransaction>;
  TokenTransaction_filter: TokenTransaction_filter;
  TokenTransaction_orderBy: TokenTransaction_orderBy;
  TransactionType: TransactionType;
  User: ResolverTypeWrapper<User>;
  User_filter: User_filter;
  User_orderBy: User_orderBy;
  _Block_: ResolverTypeWrapper<_Block_>;
  _Meta_: ResolverTypeWrapper<_Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  BigDecimal: Scalars['BigDecimal'];
  BigInt: Scalars['BigInt'];
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: Scalars['Boolean'];
  Bytes: Scalars['Bytes'];
  CollateralToken: CollateralToken;
  CollateralToken_filter: CollateralToken_filter;
  Cron: Cron;
  Cron_filter: Cron_filter;
  Currency: Currency;
  CurrencyPrice: CurrencyPrice;
  CurrencyPrice_filter: CurrencyPrice_filter;
  Currency_filter: Currency_filter;
  DailyCurrencyPriceCandle: DailyCurrencyPriceCandle;
  DailyCurrencyPriceCandle_filter: DailyCurrencyPriceCandle_filter;
  DailyMeTokenState: DailyMeTokenState;
  DailyMeTokenState_filter: DailyMeTokenState_filter;
  DailyPriceCandleGroup: DailyPriceCandleGroup;
  DailyPriceCandleGroup_filter: DailyPriceCandleGroup_filter;
  EACAggregatorProxy: EACAggregatorProxy;
  EACAggregatorProxy_filter: EACAggregatorProxy_filter;
  Float: Scalars['Float'];
  Holding: Holding;
  HoldingState: HoldingState;
  HoldingState_filter: HoldingState_filter;
  Holding_filter: Holding_filter;
  HourlyCurrencyPriceCandle: HourlyCurrencyPriceCandle;
  HourlyCurrencyPriceCandle_filter: HourlyCurrencyPriceCandle_filter;
  HourlyMeTokenState: HourlyMeTokenState;
  HourlyMeTokenState_filter: HourlyMeTokenState_filter;
  HourlyPriceCandleGroup: HourlyPriceCandleGroup;
  HourlyPriceCandleGroup_filter: HourlyPriceCandleGroup_filter;
  Hub: Hub;
  Hub_filter: Hub_filter;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Int8: Scalars['Int8'];
  MeToken: MeToken;
  MeTokenState: MeTokenState;
  MeTokenState_filter: MeTokenState_filter;
  MeToken_filter: MeToken_filter;
  MonthlyCurrencyPriceCandle: MonthlyCurrencyPriceCandle;
  MonthlyCurrencyPriceCandle_filter: MonthlyCurrencyPriceCandle_filter;
  MonthlyMeTokenState: MonthlyMeTokenState;
  MonthlyMeTokenState_filter: MonthlyMeTokenState_filter;
  MonthlyPriceCandleGroup: MonthlyPriceCandleGroup;
  MonthlyPriceCandleGroup_filter: MonthlyPriceCandleGroup_filter;
  PeriodicMeTokenStateInterface: ResolversParentTypes['DailyMeTokenState'] | ResolversParentTypes['HourlyMeTokenState'] | ResolversParentTypes['MonthlyMeTokenState'];
  PeriodicMeTokenStateInterface_filter: PeriodicMeTokenStateInterface_filter;
  Query: {};
  String: Scalars['String'];
  Subscription: {};
  TokenTransaction: TokenTransaction;
  TokenTransaction_filter: TokenTransaction_filter;
  User: User;
  User_filter: User_filter;
  _Block_: _Block_;
  _Meta_: _Meta_;
}>;

export type entityDirectiveArgs = { };

export type entityDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = entityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type subgraphIdDirectiveArgs = {
  id: Scalars['String'];
};

export type subgraphIdDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = subgraphIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type derivedFromDirectiveArgs = {
  field: Scalars['String'];
};

export type derivedFromDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = derivedFromDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export type CollateralTokenResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CollateralToken'] = ResolversParentTypes['CollateralToken']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CronResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Cron'] = ResolversParentTypes['Cron']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  cron?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  currencies?: Resolver<Array<ResolversTypes['Currency']>, ParentType, ContextType, RequireFields<CroncurrenciesArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CurrencyResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Currency'] = ResolversParentTypes['Currency']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['CurrencyPrice']>, ParentType, ContextType>;
  hourly?: Resolver<Maybe<ResolversTypes['HourlyCurrencyPriceCandle']>, ParentType, ContextType>;
  daily?: Resolver<Maybe<ResolversTypes['DailyCurrencyPriceCandle']>, ParentType, ContextType>;
  monthly?: Resolver<Maybe<ResolversTypes['MonthlyCurrencyPriceCandle']>, ParentType, ContextType>;
  hourlyHistory?: Resolver<Array<ResolversTypes['HourlyCurrencyPriceCandle']>, ParentType, ContextType, RequireFields<CurrencyhourlyHistoryArgs, 'skip' | 'first'>>;
  dailyHistory?: Resolver<Array<ResolversTypes['DailyCurrencyPriceCandle']>, ParentType, ContextType, RequireFields<CurrencydailyHistoryArgs, 'skip' | 'first'>>;
  monthlyHistory?: Resolver<Array<ResolversTypes['MonthlyCurrencyPriceCandle']>, ParentType, ContextType, RequireFields<CurrencymonthlyHistoryArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CurrencyPriceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CurrencyPrice'] = ResolversParentTypes['CurrencyPrice']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  currency?: Resolver<ResolversTypes['Currency'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DailyCurrencyPriceCandleResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DailyCurrencyPriceCandle'] = ResolversParentTypes['DailyCurrencyPriceCandle']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  currency?: Resolver<ResolversTypes['Currency'], ParentType, ContextType>;
  group?: Resolver<ResolversTypes['DailyPriceCandleGroup'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  open?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  openRef?: Resolver<ResolversTypes['CurrencyPrice'], ParentType, ContextType>;
  close?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  closeRef?: Resolver<ResolversTypes['CurrencyPrice'], ParentType, ContextType>;
  low?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  lowRef?: Resolver<ResolversTypes['CurrencyPrice'], ParentType, ContextType>;
  high?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  highRef?: Resolver<ResolversTypes['CurrencyPrice'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DailyMeTokenStateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DailyMeTokenState'] = ResolversParentTypes['DailyMeTokenState']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  metoken?: Resolver<ResolversTypes['MeToken'], ParentType, ContextType>;
  start?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  end?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  first?: Resolver<ResolversTypes['MeTokenState'], ParentType, ContextType>;
  last?: Resolver<ResolversTypes['MeTokenState'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DailyPriceCandleGroupResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DailyPriceCandleGroup'] = ResolversParentTypes['DailyPriceCandleGroup']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  currencyCandles?: Resolver<Array<ResolversTypes['DailyCurrencyPriceCandle']>, ParentType, ContextType, RequireFields<DailyPriceCandleGroupcurrencyCandlesArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EACAggregatorProxyResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EACAggregatorProxy'] = ResolversParentTypes['EACAggregatorProxy']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  aggregator?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['Currency']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HoldingResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Holding'] = ResolversParentTypes['Holding']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  since?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  state?: Resolver<ResolversTypes['HoldingState'], ParentType, ContextType>;
  stateHistory?: Resolver<Maybe<Array<ResolversTypes['HoldingState']>>, ParentType, ContextType, RequireFields<HoldingstateHistoryArgs, 'skip' | 'first'>>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['MeToken'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HoldingStateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['HoldingState'] = ResolversParentTypes['HoldingState']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  holding?: Resolver<ResolversTypes['Holding'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['MeToken'], ParentType, ContextType>;
  tokenState?: Resolver<Maybe<ResolversTypes['MeTokenState']>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HourlyCurrencyPriceCandleResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['HourlyCurrencyPriceCandle'] = ResolversParentTypes['HourlyCurrencyPriceCandle']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  currency?: Resolver<ResolversTypes['Currency'], ParentType, ContextType>;
  group?: Resolver<ResolversTypes['HourlyPriceCandleGroup'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  open?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  openRef?: Resolver<ResolversTypes['CurrencyPrice'], ParentType, ContextType>;
  close?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  closeRef?: Resolver<ResolversTypes['CurrencyPrice'], ParentType, ContextType>;
  low?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  lowRef?: Resolver<ResolversTypes['CurrencyPrice'], ParentType, ContextType>;
  high?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  highRef?: Resolver<ResolversTypes['CurrencyPrice'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HourlyMeTokenStateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['HourlyMeTokenState'] = ResolversParentTypes['HourlyMeTokenState']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  metoken?: Resolver<ResolversTypes['MeToken'], ParentType, ContextType>;
  start?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  end?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  first?: Resolver<ResolversTypes['MeTokenState'], ParentType, ContextType>;
  last?: Resolver<ResolversTypes['MeTokenState'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HourlyPriceCandleGroupResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['HourlyPriceCandleGroup'] = ResolversParentTypes['HourlyPriceCandleGroup']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  currencyCandles?: Resolver<Array<ResolversTypes['HourlyCurrencyPriceCandle']>, ParentType, ContextType, RequireFields<HourlyPriceCandleGroupcurrencyCandlesArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HubResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Hub'] = ResolversParentTypes['Hub']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  asset?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  meTokens?: Resolver<Maybe<Array<ResolversTypes['MeToken']>>, ParentType, ContextType, RequireFields<HubmeTokensArgs, 'skip' | 'first'>>;
  owner?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  refundRatio?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  targetRefundRatio?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  updating?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  vault?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface Int8ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Int8'], any> {
  name: 'Int8';
}

export type MeTokenResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MeToken'] = ResolversParentTypes['MeToken']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  collateralToken?: Resolver<ResolversTypes['CollateralToken'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  holdings?: Resolver<Maybe<Array<ResolversTypes['Holding']>>, ParentType, ContextType, RequireFields<MeTokenholdingsArgs, 'skip' | 'first'>>;
  hub?: Resolver<ResolversTypes['Hub'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  previousOwner?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  state?: Resolver<ResolversTypes['MeTokenState'], ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  transactions?: Resolver<Maybe<Array<ResolversTypes['TokenTransaction']>>, ParentType, ContextType, RequireFields<MeTokentransactionsArgs, 'skip' | 'first'>>;
  hourlyStates?: Resolver<Array<ResolversTypes['HourlyMeTokenState']>, ParentType, ContextType, RequireFields<MeTokenhourlyStatesArgs, 'skip' | 'first'>>;
  dailyStates?: Resolver<Array<ResolversTypes['DailyMeTokenState']>, ParentType, ContextType, RequireFields<MeTokendailyStatesArgs, 'skip' | 'first'>>;
  monthlyStates?: Resolver<Array<ResolversTypes['MonthlyMeTokenState']>, ParentType, ContextType, RequireFields<MeTokenmonthlyStatesArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MeTokenStateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MeTokenState'] = ResolversParentTypes['MeTokenState']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  balanceLocked?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  balancePooled?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  currencyPrices?: Resolver<Array<ResolversTypes['CurrencyPrice']>, ParentType, ContextType, RequireFields<MeTokenStatecurrencyPricesArgs, 'skip' | 'first'>>;
  currentRate?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  buyRate?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  sellRate?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  spendRate?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  metoken?: Resolver<ResolversTypes['MeToken'], ParentType, ContextType>;
  supply?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalHolders?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  tvl?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MonthlyCurrencyPriceCandleResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MonthlyCurrencyPriceCandle'] = ResolversParentTypes['MonthlyCurrencyPriceCandle']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  currency?: Resolver<ResolversTypes['Currency'], ParentType, ContextType>;
  group?: Resolver<ResolversTypes['MonthlyPriceCandleGroup'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  open?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  openRef?: Resolver<ResolversTypes['CurrencyPrice'], ParentType, ContextType>;
  close?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  closeRef?: Resolver<ResolversTypes['CurrencyPrice'], ParentType, ContextType>;
  low?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  lowRef?: Resolver<ResolversTypes['CurrencyPrice'], ParentType, ContextType>;
  high?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  highRef?: Resolver<ResolversTypes['CurrencyPrice'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MonthlyMeTokenStateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MonthlyMeTokenState'] = ResolversParentTypes['MonthlyMeTokenState']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  metoken?: Resolver<ResolversTypes['MeToken'], ParentType, ContextType>;
  start?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  end?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  first?: Resolver<ResolversTypes['MeTokenState'], ParentType, ContextType>;
  last?: Resolver<ResolversTypes['MeTokenState'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MonthlyPriceCandleGroupResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MonthlyPriceCandleGroup'] = ResolversParentTypes['MonthlyPriceCandleGroup']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  currencyCandles?: Resolver<Array<ResolversTypes['MonthlyCurrencyPriceCandle']>, ParentType, ContextType, RequireFields<MonthlyPriceCandleGroupcurrencyCandlesArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PeriodicMeTokenStateInterfaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PeriodicMeTokenStateInterface'] = ResolversParentTypes['PeriodicMeTokenStateInterface']> = ResolversObject<{
  __resolveType: TypeResolveFn<'DailyMeTokenState' | 'HourlyMeTokenState' | 'MonthlyMeTokenState', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  metoken?: Resolver<ResolversTypes['MeToken'], ParentType, ContextType>;
  start?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  end?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  first?: Resolver<ResolversTypes['MeTokenState'], ParentType, ContextType>;
  last?: Resolver<ResolversTypes['MeTokenState'], ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  eacaggregatorProxy?: Resolver<Maybe<ResolversTypes['EACAggregatorProxy']>, ParentType, ContextType, RequireFields<QueryeacaggregatorProxyArgs, 'id' | 'subgraphError'>>;
  eacaggregatorProxies?: Resolver<Array<ResolversTypes['EACAggregatorProxy']>, ParentType, ContextType, RequireFields<QueryeacaggregatorProxiesArgs, 'skip' | 'first' | 'subgraphError'>>;
  collateralToken?: Resolver<Maybe<ResolversTypes['CollateralToken']>, ParentType, ContextType, RequireFields<QuerycollateralTokenArgs, 'id' | 'subgraphError'>>;
  collateralTokens?: Resolver<Array<ResolversTypes['CollateralToken']>, ParentType, ContextType, RequireFields<QuerycollateralTokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  cron?: Resolver<Maybe<ResolversTypes['Cron']>, ParentType, ContextType, RequireFields<QuerycronArgs, 'id' | 'subgraphError'>>;
  crons?: Resolver<Array<ResolversTypes['Cron']>, ParentType, ContextType, RequireFields<QuerycronsArgs, 'skip' | 'first' | 'subgraphError'>>;
  currency?: Resolver<Maybe<ResolversTypes['Currency']>, ParentType, ContextType, RequireFields<QuerycurrencyArgs, 'id' | 'subgraphError'>>;
  currencies?: Resolver<Array<ResolversTypes['Currency']>, ParentType, ContextType, RequireFields<QuerycurrenciesArgs, 'skip' | 'first' | 'subgraphError'>>;
  currencyPrice?: Resolver<Maybe<ResolversTypes['CurrencyPrice']>, ParentType, ContextType, RequireFields<QuerycurrencyPriceArgs, 'id' | 'subgraphError'>>;
  currencyPrices?: Resolver<Array<ResolversTypes['CurrencyPrice']>, ParentType, ContextType, RequireFields<QuerycurrencyPricesArgs, 'skip' | 'first' | 'subgraphError'>>;
  hourlyCurrencyPriceCandle?: Resolver<Maybe<ResolversTypes['HourlyCurrencyPriceCandle']>, ParentType, ContextType, RequireFields<QueryhourlyCurrencyPriceCandleArgs, 'id' | 'subgraphError'>>;
  hourlyCurrencyPriceCandles?: Resolver<Array<ResolversTypes['HourlyCurrencyPriceCandle']>, ParentType, ContextType, RequireFields<QueryhourlyCurrencyPriceCandlesArgs, 'skip' | 'first' | 'subgraphError'>>;
  dailyCurrencyPriceCandle?: Resolver<Maybe<ResolversTypes['DailyCurrencyPriceCandle']>, ParentType, ContextType, RequireFields<QuerydailyCurrencyPriceCandleArgs, 'id' | 'subgraphError'>>;
  dailyCurrencyPriceCandles?: Resolver<Array<ResolversTypes['DailyCurrencyPriceCandle']>, ParentType, ContextType, RequireFields<QuerydailyCurrencyPriceCandlesArgs, 'skip' | 'first' | 'subgraphError'>>;
  monthlyCurrencyPriceCandle?: Resolver<Maybe<ResolversTypes['MonthlyCurrencyPriceCandle']>, ParentType, ContextType, RequireFields<QuerymonthlyCurrencyPriceCandleArgs, 'id' | 'subgraphError'>>;
  monthlyCurrencyPriceCandles?: Resolver<Array<ResolversTypes['MonthlyCurrencyPriceCandle']>, ParentType, ContextType, RequireFields<QuerymonthlyCurrencyPriceCandlesArgs, 'skip' | 'first' | 'subgraphError'>>;
  hourlyPriceCandleGroup?: Resolver<Maybe<ResolversTypes['HourlyPriceCandleGroup']>, ParentType, ContextType, RequireFields<QueryhourlyPriceCandleGroupArgs, 'id' | 'subgraphError'>>;
  hourlyPriceCandleGroups?: Resolver<Array<ResolversTypes['HourlyPriceCandleGroup']>, ParentType, ContextType, RequireFields<QueryhourlyPriceCandleGroupsArgs, 'skip' | 'first' | 'subgraphError'>>;
  dailyPriceCandleGroup?: Resolver<Maybe<ResolversTypes['DailyPriceCandleGroup']>, ParentType, ContextType, RequireFields<QuerydailyPriceCandleGroupArgs, 'id' | 'subgraphError'>>;
  dailyPriceCandleGroups?: Resolver<Array<ResolversTypes['DailyPriceCandleGroup']>, ParentType, ContextType, RequireFields<QuerydailyPriceCandleGroupsArgs, 'skip' | 'first' | 'subgraphError'>>;
  monthlyPriceCandleGroup?: Resolver<Maybe<ResolversTypes['MonthlyPriceCandleGroup']>, ParentType, ContextType, RequireFields<QuerymonthlyPriceCandleGroupArgs, 'id' | 'subgraphError'>>;
  monthlyPriceCandleGroups?: Resolver<Array<ResolversTypes['MonthlyPriceCandleGroup']>, ParentType, ContextType, RequireFields<QuerymonthlyPriceCandleGroupsArgs, 'skip' | 'first' | 'subgraphError'>>;
  holding?: Resolver<Maybe<ResolversTypes['Holding']>, ParentType, ContextType, RequireFields<QueryholdingArgs, 'id' | 'subgraphError'>>;
  holdings?: Resolver<Array<ResolversTypes['Holding']>, ParentType, ContextType, RequireFields<QueryholdingsArgs, 'skip' | 'first' | 'subgraphError'>>;
  holdingState?: Resolver<Maybe<ResolversTypes['HoldingState']>, ParentType, ContextType, RequireFields<QueryholdingStateArgs, 'id' | 'subgraphError'>>;
  holdingStates?: Resolver<Array<ResolversTypes['HoldingState']>, ParentType, ContextType, RequireFields<QueryholdingStatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  hub?: Resolver<Maybe<ResolversTypes['Hub']>, ParentType, ContextType, RequireFields<QueryhubArgs, 'id' | 'subgraphError'>>;
  hubs?: Resolver<Array<ResolversTypes['Hub']>, ParentType, ContextType, RequireFields<QueryhubsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meToken?: Resolver<Maybe<ResolversTypes['MeToken']>, ParentType, ContextType, RequireFields<QuerymeTokenArgs, 'id' | 'subgraphError'>>;
  meTokens?: Resolver<Array<ResolversTypes['MeToken']>, ParentType, ContextType, RequireFields<QuerymeTokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  meTokenState?: Resolver<Maybe<ResolversTypes['MeTokenState']>, ParentType, ContextType, RequireFields<QuerymeTokenStateArgs, 'id' | 'subgraphError'>>;
  meTokenStates?: Resolver<Array<ResolversTypes['MeTokenState']>, ParentType, ContextType, RequireFields<QuerymeTokenStatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  hourlyMeTokenState?: Resolver<Maybe<ResolversTypes['HourlyMeTokenState']>, ParentType, ContextType, RequireFields<QueryhourlyMeTokenStateArgs, 'id' | 'subgraphError'>>;
  hourlyMeTokenStates?: Resolver<Array<ResolversTypes['HourlyMeTokenState']>, ParentType, ContextType, RequireFields<QueryhourlyMeTokenStatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  dailyMeTokenState?: Resolver<Maybe<ResolversTypes['DailyMeTokenState']>, ParentType, ContextType, RequireFields<QuerydailyMeTokenStateArgs, 'id' | 'subgraphError'>>;
  dailyMeTokenStates?: Resolver<Array<ResolversTypes['DailyMeTokenState']>, ParentType, ContextType, RequireFields<QuerydailyMeTokenStatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  monthlyMeTokenState?: Resolver<Maybe<ResolversTypes['MonthlyMeTokenState']>, ParentType, ContextType, RequireFields<QuerymonthlyMeTokenStateArgs, 'id' | 'subgraphError'>>;
  monthlyMeTokenStates?: Resolver<Array<ResolversTypes['MonthlyMeTokenState']>, ParentType, ContextType, RequireFields<QuerymonthlyMeTokenStatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  tokenTransaction?: Resolver<Maybe<ResolversTypes['TokenTransaction']>, ParentType, ContextType, RequireFields<QuerytokenTransactionArgs, 'id' | 'subgraphError'>>;
  tokenTransactions?: Resolver<Array<ResolversTypes['TokenTransaction']>, ParentType, ContextType, RequireFields<QuerytokenTransactionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryuserArgs, 'id' | 'subgraphError'>>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryusersArgs, 'skip' | 'first' | 'subgraphError'>>;
  periodicMeTokenStateInterface?: Resolver<Maybe<ResolversTypes['PeriodicMeTokenStateInterface']>, ParentType, ContextType, RequireFields<QueryperiodicMeTokenStateInterfaceArgs, 'id' | 'subgraphError'>>;
  periodicMeTokenStateInterfaces?: Resolver<Array<ResolversTypes['PeriodicMeTokenStateInterface']>, ParentType, ContextType, RequireFields<QueryperiodicMeTokenStateInterfacesArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_metaArgs>>;
}>;

export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  eacaggregatorProxy?: SubscriptionResolver<Maybe<ResolversTypes['EACAggregatorProxy']>, "eacaggregatorProxy", ParentType, ContextType, RequireFields<SubscriptioneacaggregatorProxyArgs, 'id' | 'subgraphError'>>;
  eacaggregatorProxies?: SubscriptionResolver<Array<ResolversTypes['EACAggregatorProxy']>, "eacaggregatorProxies", ParentType, ContextType, RequireFields<SubscriptioneacaggregatorProxiesArgs, 'skip' | 'first' | 'subgraphError'>>;
  collateralToken?: SubscriptionResolver<Maybe<ResolversTypes['CollateralToken']>, "collateralToken", ParentType, ContextType, RequireFields<SubscriptioncollateralTokenArgs, 'id' | 'subgraphError'>>;
  collateralTokens?: SubscriptionResolver<Array<ResolversTypes['CollateralToken']>, "collateralTokens", ParentType, ContextType, RequireFields<SubscriptioncollateralTokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  cron?: SubscriptionResolver<Maybe<ResolversTypes['Cron']>, "cron", ParentType, ContextType, RequireFields<SubscriptioncronArgs, 'id' | 'subgraphError'>>;
  crons?: SubscriptionResolver<Array<ResolversTypes['Cron']>, "crons", ParentType, ContextType, RequireFields<SubscriptioncronsArgs, 'skip' | 'first' | 'subgraphError'>>;
  currency?: SubscriptionResolver<Maybe<ResolversTypes['Currency']>, "currency", ParentType, ContextType, RequireFields<SubscriptioncurrencyArgs, 'id' | 'subgraphError'>>;
  currencies?: SubscriptionResolver<Array<ResolversTypes['Currency']>, "currencies", ParentType, ContextType, RequireFields<SubscriptioncurrenciesArgs, 'skip' | 'first' | 'subgraphError'>>;
  currencyPrice?: SubscriptionResolver<Maybe<ResolversTypes['CurrencyPrice']>, "currencyPrice", ParentType, ContextType, RequireFields<SubscriptioncurrencyPriceArgs, 'id' | 'subgraphError'>>;
  currencyPrices?: SubscriptionResolver<Array<ResolversTypes['CurrencyPrice']>, "currencyPrices", ParentType, ContextType, RequireFields<SubscriptioncurrencyPricesArgs, 'skip' | 'first' | 'subgraphError'>>;
  hourlyCurrencyPriceCandle?: SubscriptionResolver<Maybe<ResolversTypes['HourlyCurrencyPriceCandle']>, "hourlyCurrencyPriceCandle", ParentType, ContextType, RequireFields<SubscriptionhourlyCurrencyPriceCandleArgs, 'id' | 'subgraphError'>>;
  hourlyCurrencyPriceCandles?: SubscriptionResolver<Array<ResolversTypes['HourlyCurrencyPriceCandle']>, "hourlyCurrencyPriceCandles", ParentType, ContextType, RequireFields<SubscriptionhourlyCurrencyPriceCandlesArgs, 'skip' | 'first' | 'subgraphError'>>;
  dailyCurrencyPriceCandle?: SubscriptionResolver<Maybe<ResolversTypes['DailyCurrencyPriceCandle']>, "dailyCurrencyPriceCandle", ParentType, ContextType, RequireFields<SubscriptiondailyCurrencyPriceCandleArgs, 'id' | 'subgraphError'>>;
  dailyCurrencyPriceCandles?: SubscriptionResolver<Array<ResolversTypes['DailyCurrencyPriceCandle']>, "dailyCurrencyPriceCandles", ParentType, ContextType, RequireFields<SubscriptiondailyCurrencyPriceCandlesArgs, 'skip' | 'first' | 'subgraphError'>>;
  monthlyCurrencyPriceCandle?: SubscriptionResolver<Maybe<ResolversTypes['MonthlyCurrencyPriceCandle']>, "monthlyCurrencyPriceCandle", ParentType, ContextType, RequireFields<SubscriptionmonthlyCurrencyPriceCandleArgs, 'id' | 'subgraphError'>>;
  monthlyCurrencyPriceCandles?: SubscriptionResolver<Array<ResolversTypes['MonthlyCurrencyPriceCandle']>, "monthlyCurrencyPriceCandles", ParentType, ContextType, RequireFields<SubscriptionmonthlyCurrencyPriceCandlesArgs, 'skip' | 'first' | 'subgraphError'>>;
  hourlyPriceCandleGroup?: SubscriptionResolver<Maybe<ResolversTypes['HourlyPriceCandleGroup']>, "hourlyPriceCandleGroup", ParentType, ContextType, RequireFields<SubscriptionhourlyPriceCandleGroupArgs, 'id' | 'subgraphError'>>;
  hourlyPriceCandleGroups?: SubscriptionResolver<Array<ResolversTypes['HourlyPriceCandleGroup']>, "hourlyPriceCandleGroups", ParentType, ContextType, RequireFields<SubscriptionhourlyPriceCandleGroupsArgs, 'skip' | 'first' | 'subgraphError'>>;
  dailyPriceCandleGroup?: SubscriptionResolver<Maybe<ResolversTypes['DailyPriceCandleGroup']>, "dailyPriceCandleGroup", ParentType, ContextType, RequireFields<SubscriptiondailyPriceCandleGroupArgs, 'id' | 'subgraphError'>>;
  dailyPriceCandleGroups?: SubscriptionResolver<Array<ResolversTypes['DailyPriceCandleGroup']>, "dailyPriceCandleGroups", ParentType, ContextType, RequireFields<SubscriptiondailyPriceCandleGroupsArgs, 'skip' | 'first' | 'subgraphError'>>;
  monthlyPriceCandleGroup?: SubscriptionResolver<Maybe<ResolversTypes['MonthlyPriceCandleGroup']>, "monthlyPriceCandleGroup", ParentType, ContextType, RequireFields<SubscriptionmonthlyPriceCandleGroupArgs, 'id' | 'subgraphError'>>;
  monthlyPriceCandleGroups?: SubscriptionResolver<Array<ResolversTypes['MonthlyPriceCandleGroup']>, "monthlyPriceCandleGroups", ParentType, ContextType, RequireFields<SubscriptionmonthlyPriceCandleGroupsArgs, 'skip' | 'first' | 'subgraphError'>>;
  holding?: SubscriptionResolver<Maybe<ResolversTypes['Holding']>, "holding", ParentType, ContextType, RequireFields<SubscriptionholdingArgs, 'id' | 'subgraphError'>>;
  holdings?: SubscriptionResolver<Array<ResolversTypes['Holding']>, "holdings", ParentType, ContextType, RequireFields<SubscriptionholdingsArgs, 'skip' | 'first' | 'subgraphError'>>;
  holdingState?: SubscriptionResolver<Maybe<ResolversTypes['HoldingState']>, "holdingState", ParentType, ContextType, RequireFields<SubscriptionholdingStateArgs, 'id' | 'subgraphError'>>;
  holdingStates?: SubscriptionResolver<Array<ResolversTypes['HoldingState']>, "holdingStates", ParentType, ContextType, RequireFields<SubscriptionholdingStatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  hub?: SubscriptionResolver<Maybe<ResolversTypes['Hub']>, "hub", ParentType, ContextType, RequireFields<SubscriptionhubArgs, 'id' | 'subgraphError'>>;
  hubs?: SubscriptionResolver<Array<ResolversTypes['Hub']>, "hubs", ParentType, ContextType, RequireFields<SubscriptionhubsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meToken?: SubscriptionResolver<Maybe<ResolversTypes['MeToken']>, "meToken", ParentType, ContextType, RequireFields<SubscriptionmeTokenArgs, 'id' | 'subgraphError'>>;
  meTokens?: SubscriptionResolver<Array<ResolversTypes['MeToken']>, "meTokens", ParentType, ContextType, RequireFields<SubscriptionmeTokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  meTokenState?: SubscriptionResolver<Maybe<ResolversTypes['MeTokenState']>, "meTokenState", ParentType, ContextType, RequireFields<SubscriptionmeTokenStateArgs, 'id' | 'subgraphError'>>;
  meTokenStates?: SubscriptionResolver<Array<ResolversTypes['MeTokenState']>, "meTokenStates", ParentType, ContextType, RequireFields<SubscriptionmeTokenStatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  hourlyMeTokenState?: SubscriptionResolver<Maybe<ResolversTypes['HourlyMeTokenState']>, "hourlyMeTokenState", ParentType, ContextType, RequireFields<SubscriptionhourlyMeTokenStateArgs, 'id' | 'subgraphError'>>;
  hourlyMeTokenStates?: SubscriptionResolver<Array<ResolversTypes['HourlyMeTokenState']>, "hourlyMeTokenStates", ParentType, ContextType, RequireFields<SubscriptionhourlyMeTokenStatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  dailyMeTokenState?: SubscriptionResolver<Maybe<ResolversTypes['DailyMeTokenState']>, "dailyMeTokenState", ParentType, ContextType, RequireFields<SubscriptiondailyMeTokenStateArgs, 'id' | 'subgraphError'>>;
  dailyMeTokenStates?: SubscriptionResolver<Array<ResolversTypes['DailyMeTokenState']>, "dailyMeTokenStates", ParentType, ContextType, RequireFields<SubscriptiondailyMeTokenStatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  monthlyMeTokenState?: SubscriptionResolver<Maybe<ResolversTypes['MonthlyMeTokenState']>, "monthlyMeTokenState", ParentType, ContextType, RequireFields<SubscriptionmonthlyMeTokenStateArgs, 'id' | 'subgraphError'>>;
  monthlyMeTokenStates?: SubscriptionResolver<Array<ResolversTypes['MonthlyMeTokenState']>, "monthlyMeTokenStates", ParentType, ContextType, RequireFields<SubscriptionmonthlyMeTokenStatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  tokenTransaction?: SubscriptionResolver<Maybe<ResolversTypes['TokenTransaction']>, "tokenTransaction", ParentType, ContextType, RequireFields<SubscriptiontokenTransactionArgs, 'id' | 'subgraphError'>>;
  tokenTransactions?: SubscriptionResolver<Array<ResolversTypes['TokenTransaction']>, "tokenTransactions", ParentType, ContextType, RequireFields<SubscriptiontokenTransactionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  user?: SubscriptionResolver<Maybe<ResolversTypes['User']>, "user", ParentType, ContextType, RequireFields<SubscriptionuserArgs, 'id' | 'subgraphError'>>;
  users?: SubscriptionResolver<Array<ResolversTypes['User']>, "users", ParentType, ContextType, RequireFields<SubscriptionusersArgs, 'skip' | 'first' | 'subgraphError'>>;
  periodicMeTokenStateInterface?: SubscriptionResolver<Maybe<ResolversTypes['PeriodicMeTokenStateInterface']>, "periodicMeTokenStateInterface", ParentType, ContextType, RequireFields<SubscriptionperiodicMeTokenStateInterfaceArgs, 'id' | 'subgraphError'>>;
  periodicMeTokenStateInterfaces?: SubscriptionResolver<Array<ResolversTypes['PeriodicMeTokenStateInterface']>, "periodicMeTokenStateInterfaces", ParentType, ContextType, RequireFields<SubscriptionperiodicMeTokenStateInterfacesArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_metaArgs>>;
}>;

export type TokenTransactionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TokenTransaction'] = ResolversParentTypes['TokenTransaction']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['TransactionType']>, ParentType, ContextType>;
  from?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  collateralAmount?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  metoken?: Resolver<ResolversTypes['MeToken'], ParentType, ContextType>;
  metokenAmount?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  holdings?: Resolver<Maybe<Array<ResolversTypes['Holding']>>, ParentType, ContextType, RequireFields<UserholdingsArgs, 'skip' | 'first'>>;
  metoken?: Resolver<Maybe<ResolversTypes['MeToken']>, ParentType, ContextType>;
  totalHoldings?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  transactions?: Resolver<Maybe<Array<ResolversTypes['TokenTransaction']>>, ParentType, ContextType, RequireFields<UsertransactionsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Bytes?: GraphQLScalarType;
  CollateralToken?: CollateralTokenResolvers<ContextType>;
  Cron?: CronResolvers<ContextType>;
  Currency?: CurrencyResolvers<ContextType>;
  CurrencyPrice?: CurrencyPriceResolvers<ContextType>;
  DailyCurrencyPriceCandle?: DailyCurrencyPriceCandleResolvers<ContextType>;
  DailyMeTokenState?: DailyMeTokenStateResolvers<ContextType>;
  DailyPriceCandleGroup?: DailyPriceCandleGroupResolvers<ContextType>;
  EACAggregatorProxy?: EACAggregatorProxyResolvers<ContextType>;
  Holding?: HoldingResolvers<ContextType>;
  HoldingState?: HoldingStateResolvers<ContextType>;
  HourlyCurrencyPriceCandle?: HourlyCurrencyPriceCandleResolvers<ContextType>;
  HourlyMeTokenState?: HourlyMeTokenStateResolvers<ContextType>;
  HourlyPriceCandleGroup?: HourlyPriceCandleGroupResolvers<ContextType>;
  Hub?: HubResolvers<ContextType>;
  Int8?: GraphQLScalarType;
  MeToken?: MeTokenResolvers<ContextType>;
  MeTokenState?: MeTokenStateResolvers<ContextType>;
  MonthlyCurrencyPriceCandle?: MonthlyCurrencyPriceCandleResolvers<ContextType>;
  MonthlyMeTokenState?: MonthlyMeTokenStateResolvers<ContextType>;
  MonthlyPriceCandleGroup?: MonthlyPriceCandleGroupResolvers<ContextType>;
  PeriodicMeTokenStateInterface?: PeriodicMeTokenStateInterfaceResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  TokenTransaction?: TokenTransactionResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  entity?: entityDirectiveResolver<any, any, ContextType>;
  subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>;
  derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = MetokensTypes.Context & BaseMeshContext;


const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".graphclient/sources/metokens/introspectionSchema":
      return Promise.resolve(importedModule$0) as T;
    
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.graphclient', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export const rawServeConfig: YamlConfig.Config['serve'] = undefined as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger("GraphClient");
const cache = new (MeshCache as any)({
      ...({} as any),
      importFn,
      store: rootStore.child('cache'),
      pubsub,
      logger,
    } as any)

const sources: MeshResolvedSource[] = [];
const transforms: MeshTransform[] = [];
const additionalEnvelopPlugins: MeshPlugin<any>[] = [];
const metokensTransforms = [];
const additionalTypeDefs = [] as any[];
const metokensHandler = new GraphqlHandler({
              name: "metokens",
              config: {"sources":[{"endpoint":"https://api.studio.thegraph.com/query/35797/metokens-core-goerli/v0.2.0"}]},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("metokens"),
              logger: logger.child("metokens"),
              importFn,
            });
sources[0] = {
          name: 'metokens',
          handler: metokensHandler,
          transforms: metokensTransforms
        }
const additionalResolvers = [] as any[]
const merger = new(BareMerger as any)({
        cache,
        pubsub,
        logger: logger.child('bareMerger'),
        store: rootStore.child('bareMerger')
      })

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
      {
        document: GetOwnerMetokenDocument,
        get rawSDL() {
          return printWithCache(GetOwnerMetokenDocument);
        },
        location: 'GetOwnerMetokenDocument.graphql'
      }
    ];
    },
    fetchFn,
  };
}

export function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext> {
  return createMeshHTTPHandler<TServerContext>({
    baseDir,
    getBuiltMesh: getBuiltGraphClient,
    rawServeConfig: undefined,
  })
}


let meshInstance$: Promise<MeshInstance> | undefined;

export function getBuiltGraphClient(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltGraphClient().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));
export function getBuiltGraphSDK<TGlobalContext = any, TOperationContext = any>(globalContext?: TGlobalContext) {
  const sdkRequester$ = getBuiltGraphClient().then(({ sdkRequesterFactory }) => sdkRequesterFactory(globalContext));
  return getSdk<TOperationContext, TGlobalContext>((...args) => sdkRequester$.then(sdkRequester => sdkRequester(...args)));
}
export type GetOwnerMetokenQueryVariables = Exact<{
  ownerAddress?: InputMaybe<Scalars['String']>;
}>;


export type GetOwnerMetokenQuery = { meTokens: Array<(
    Pick<MeToken, 'id' | 'name' | 'symbol'>
    & { owner: Pick<User, 'id'> }
  )> };


export const GetOwnerMetokenDocument = gql`
    query GetOwnerMetoken($ownerAddress: String) {
  meTokens(where: {owner: $ownerAddress}) {
    id
    name
    symbol
    owner {
      id
    }
  }
}
    ` as unknown as DocumentNode<GetOwnerMetokenQuery, GetOwnerMetokenQueryVariables>;


export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    GetOwnerMetoken(variables?: GetOwnerMetokenQueryVariables, options?: C): Promise<GetOwnerMetokenQuery> {
      return requester<GetOwnerMetokenQuery, GetOwnerMetokenQueryVariables>(GetOwnerMetokenDocument, variables, options) as Promise<GetOwnerMetokenQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;