import gql from 'graphql-tag'
import * as Urql from 'urql'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Query = {
  __typename?: 'Query'
  games: PaginatedGames
  salesByTitles: PaginatedGames
  salesByCrossPlatformTitles: PaginatedCrossPlatformSales
  salesByGenre: PaginatedGenreSales
  salesByYear: PaginatedYearSales
  salesByPublisher: PaginatedPublisherSales
  salesByConsole: PaginatedConsoleGameSales
  salesByRating: PaginatedRatingSales
  highestCriticScores: PaginatedGames
  highestUserScores: PaginatedGames
  consoles: Array<Consoles>
  consoleMakers: Array<Console_Makers>
}

export type QueryGamesArgs = {
  options: PaginatedQueryOptions
}

export type QuerySalesByTitlesArgs = {
  options: PaginatedQueryOptions
}

export type QuerySalesByCrossPlatformTitlesArgs = {
  options: PaginatedQueryOptions
}

export type QuerySalesByGenreArgs = {
  options: PaginatedQueryOptions
}

export type QuerySalesByYearArgs = {
  options: PaginatedQueryOptions
}

export type QuerySalesByPublisherArgs = {
  options: PaginatedQueryOptions
}

export type QuerySalesByConsoleArgs = {
  options: PaginatedQueryOptions
}

export type QuerySalesByRatingArgs = {
  options: PaginatedQueryOptions
}

export type QueryHighestCriticScoresArgs = {
  options: PaginatedQueryOptions
}

export type QueryHighestUserScoresArgs = {
  options: PaginatedQueryOptions
}

export type PaginatedGames = {
  __typename?: 'PaginatedGames'
  rows: Array<Games>
  hasMore: Scalars['Boolean']
}

export type Games = {
  __typename?: 'GAMES'
  id: Scalars['Int']
  title: Scalars['String']
  console: Console
  year_of_release: Scalars['Int']
  genre: Genre
  publisher: Scalars['String']
  na_sales: Scalars['Float']
  eu_sales: Scalars['Float']
  jp_sales: Scalars['Float']
  other_sales: Scalars['Float']
  global_sales: Scalars['Float']
  critic_score?: Maybe<Scalars['Int']>
  critic_count?: Maybe<Scalars['Int']>
  user_score?: Maybe<Scalars['Int']>
  user_count?: Maybe<Scalars['Int']>
  developer?: Maybe<Scalars['String']>
  rating?: Maybe<Rating>
}

/** select games by different consoles */
export enum Console {
  _2600 = '_2600',
  _3Do = '_3DO',
  _3Ds = '_3DS',
  Dc = 'DC',
  Ds = 'DS',
  Gb = 'GB',
  Gba = 'GBA',
  Gc = 'GC',
  Gen = 'GEN',
  Gg = 'GG',
  N64 = 'N64',
  Nes = 'NES',
  Ng = 'NG',
  Pc = 'PC',
  Pcfx = 'PCFX',
  Ps = 'PS',
  Ps2 = 'PS2',
  Ps3 = 'PS3',
  Ps4 = 'PS4',
  Psp = 'PSP',
  Psv = 'PSV',
  Sat = 'SAT',
  Scd = 'SCD',
  Snes = 'SNES',
  Tg16 = 'TG16',
  Wii = 'WII',
  Wiiu = 'WIIU',
  Ws = 'WS',
  X360 = 'X360',
  Xb = 'XB',
  Xone = 'XONE',
}

/** select games by different genres */
export enum Genre {
  Action = 'ACTION',
  Adventure = 'ADVENTURE',
  Fighting = 'FIGHTING',
  Misc = 'MISC',
  Platform = 'PLATFORM',
  Puzzle = 'PUZZLE',
  Racing = 'RACING',
  Roleplaying = 'ROLEPLAYING',
  Shooter = 'SHOOTER',
  Simulation = 'SIMULATION',
  Sports = 'SPORTS',
  Strategy = 'STRATEGY',
}

/** select games by different ratings */
export enum Rating {
  Ao = 'AO',
  E = 'E',
  E10Plus = 'E10PLUS',
  Ec = 'EC',
  KA = 'K_A',
  M = 'M',
  Rp = 'RP',
  T = 'T',
}

export type PaginatedQueryOptions = {
  where: WhereOptions
  groupBy?: Maybe<Array<Column>>
  orderBy?: Maybe<Array<OrderByColumn>>
  limit: Scalars['Int']
  offset: Scalars['Int']
}

export type WhereOptions = {
  title?: Maybe<Array<Scalars['String']>>
  titleStartsWith?: Maybe<Array<Scalars['String']>>
  titleEndsWith?: Maybe<Array<Scalars['String']>>
  titleContains?: Maybe<Array<Scalars['String']>>
  console?: Maybe<Array<Console>>
  year_of_release?: Maybe<Array<Scalars['Int']>>
  publisher?: Maybe<Array<Scalars['String']>>
  genre?: Maybe<Array<Genre>>
  rating?: Maybe<Array<Rating>>
  critic_score?: Maybe<Array<Scalars['Int']>>
  user_score?: Maybe<Array<Scalars['Int']>>
  developer?: Maybe<Array<Scalars['String']>>
  global_sales?: Maybe<Array<Scalars['Float']>>
  na_sales?: Maybe<Array<Scalars['Float']>>
  eu_sales?: Maybe<Array<Scalars['Float']>>
  jp_sales?: Maybe<Array<Scalars['Float']>>
  other_sales?: Maybe<Array<Scalars['Float']>>
}

/** The columns that can be used to group the search by */
export enum Column {
  Genre = 'GENRE',
  Rating = 'RATING',
  Console = 'CONSOLE',
  Title = 'TITLE',
  Publisher = 'PUBLISHER',
  YearOfRelease = 'YEAR_OF_RELEASE',
}

export type OrderByColumn = {
  column: OrderByColumns
  order: SortOrder
}

/** select columns to order results by */
export enum OrderByColumns {
  Title = 'TITLE',
  Console = 'CONSOLE',
  YearOfRelease = 'YEAR_OF_RELEASE',
  Publisher = 'PUBLISHER',
  Genre = 'GENRE',
  Rating = 'RATING',
  CriticScore = 'CRITIC_SCORE',
  UserScore = 'USER_SCORE',
  Developer = 'DEVELOPER',
  GlobalSales = 'GLOBAL_SALES',
  NaSales = 'NA_SALES',
  EuSales = 'EU_SALES',
  JpSales = 'JP_SALES',
  OtherSales = 'OTHER_SALES',
}

/** select whether column should be sorted as ascending or descending */
export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type PaginatedCrossPlatformSales = {
  __typename?: 'PaginatedCrossPlatformSales'
  rows: Array<CrossPlatformSales>
  hasMore: Scalars['Boolean']
}

export type CrossPlatformSales = {
  __typename?: 'CrossPlatformSales'
  global_sales: Scalars['Float']
  na_sales: Scalars['Float']
  eu_sales: Scalars['Float']
  jp_sales: Scalars['Float']
  other_sales: Scalars['Float']
  console?: Maybe<Scalars['String']>
  year_of_release?: Maybe<Scalars['Int']>
  genre?: Maybe<Scalars['String']>
  rating?: Maybe<Scalars['String']>
  publisher?: Maybe<Scalars['String']>
  title: Scalars['String']
}

export type PaginatedGenreSales = {
  __typename?: 'PaginatedGenreSales'
  rows: Array<GenreSales>
  hasMore: Scalars['Boolean']
}

export type GenreSales = {
  __typename?: 'GenreSales'
  global_sales: Scalars['Float']
  na_sales: Scalars['Float']
  eu_sales: Scalars['Float']
  jp_sales: Scalars['Float']
  other_sales: Scalars['Float']
  console?: Maybe<Scalars['String']>
  year_of_release?: Maybe<Scalars['Int']>
  genre: Scalars['String']
  rating?: Maybe<Scalars['String']>
  publisher?: Maybe<Scalars['String']>
}

export type PaginatedYearSales = {
  __typename?: 'PaginatedYearSales'
  rows: Array<YearSales>
  hasMore: Scalars['Boolean']
}

export type YearSales = {
  __typename?: 'YearSales'
  global_sales: Scalars['Float']
  na_sales: Scalars['Float']
  eu_sales: Scalars['Float']
  jp_sales: Scalars['Float']
  other_sales: Scalars['Float']
  console?: Maybe<Scalars['String']>
  year_of_release: Scalars['Int']
  genre?: Maybe<Scalars['String']>
  rating?: Maybe<Scalars['String']>
  publisher?: Maybe<Scalars['String']>
}

export type PaginatedPublisherSales = {
  __typename?: 'PaginatedPublisherSales'
  rows: Array<PublisherSales>
  hasMore: Scalars['Boolean']
}

export type PublisherSales = {
  __typename?: 'PublisherSales'
  global_sales: Scalars['Float']
  na_sales: Scalars['Float']
  eu_sales: Scalars['Float']
  jp_sales: Scalars['Float']
  other_sales: Scalars['Float']
  console?: Maybe<Scalars['String']>
  year_of_release?: Maybe<Scalars['Int']>
  genre?: Maybe<Scalars['String']>
  rating?: Maybe<Scalars['String']>
  publisher: Scalars['String']
}

export type PaginatedConsoleGameSales = {
  __typename?: 'PaginatedConsoleGameSales'
  rows: Array<ConsoleGameSales>
  hasMore: Scalars['Boolean']
}

export type ConsoleGameSales = {
  __typename?: 'ConsoleGameSales'
  global_sales: Scalars['Float']
  na_sales: Scalars['Float']
  eu_sales: Scalars['Float']
  jp_sales: Scalars['Float']
  other_sales: Scalars['Float']
  console: Scalars['String']
  year_of_release?: Maybe<Scalars['Int']>
  genre?: Maybe<Scalars['String']>
  rating?: Maybe<Scalars['String']>
  publisher?: Maybe<Scalars['String']>
}

export type PaginatedRatingSales = {
  __typename?: 'PaginatedRatingSales'
  rows: Array<RatingSales>
  hasMore: Scalars['Boolean']
}

export type RatingSales = {
  __typename?: 'RatingSales'
  global_sales: Scalars['Float']
  na_sales: Scalars['Float']
  eu_sales: Scalars['Float']
  jp_sales: Scalars['Float']
  other_sales: Scalars['Float']
  console?: Maybe<Scalars['String']>
  year_of_release?: Maybe<Scalars['Int']>
  genre?: Maybe<Scalars['String']>
  rating?: Maybe<Scalars['String']>
  publisher?: Maybe<Scalars['String']>
}

export type Consoles = {
  __typename?: 'CONSOLES'
  console: Scalars['String']
  full_name: Scalars['String']
  year_released: Scalars['Int']
  global_sales?: Maybe<Scalars['Float']>
  maker: Scalars['String']
  console_type: Scalars['String']
}

export type Console_Makers = {
  __typename?: 'CONSOLE_MAKERS'
  maker: Scalars['String']
}

export type SalesResponseFragment = { __typename?: 'GenreSales' } & Pick<
  GenreSales,
  'genre' | 'global_sales'
>

export type GenreSalesByQueryVariables = Exact<{
  options: PaginatedQueryOptions
}>

export type GenreSalesByQuery = { __typename?: 'Query' } & {
  salesByGenre: { __typename?: 'PaginatedGenreSales' } & Pick<
    PaginatedGenreSales,
    'hasMore'
  > & { rows: Array<{ __typename?: 'GenreSales' } & SalesResponseFragment> }
}

export const SalesResponseFragmentDoc = gql`
  fragment SalesResponse on GenreSales {
    genre
    global_sales
  }
`
export const GenreSalesByDocument = gql`
  query GenreSalesBy($options: PaginatedQueryOptions!) {
    salesByGenre(options: $options) {
      rows {
        ...SalesResponse
      }
      hasMore
    }
  }
  ${SalesResponseFragmentDoc}
`

export function useGenreSalesByQuery(
  options: Omit<Urql.UseQueryArgs<GenreSalesByQueryVariables>, 'query'> = {}
) {
  return Urql.useQuery<GenreSalesByQuery>({
    query: GenreSalesByDocument,
    ...options,
  })
}
