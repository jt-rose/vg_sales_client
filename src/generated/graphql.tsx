import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  games: PaginatedGames;
  salesByTitles: PaginatedGames;
  salesByCrossPlatformTitles: PaginatedCrossPlatformSales;
  salesByGenre: PaginatedGenreSales;
  salesByYear: PaginatedYearSales;
  salesByPublisher: PaginatedPublisherSales;
  salesByConsole: PaginatedConsoleGameSales;
  salesByRating: PaginatedRatingSales;
  highestCriticScores: PaginatedGames;
  highestUserScores: PaginatedGames;
  consoles: Array<Consoles>;
  consoleMakers: Array<Console_Makers>;
};


export type QueryGamesArgs = {
  options: PaginatedQueryOptions;
};


export type QuerySalesByTitlesArgs = {
  options: PaginatedQueryOptions;
};


export type QuerySalesByCrossPlatformTitlesArgs = {
  options: PaginatedQueryOptions;
};


export type QuerySalesByGenreArgs = {
  options: PaginatedQueryOptions;
};


export type QuerySalesByYearArgs = {
  options: PaginatedQueryOptions;
};


export type QuerySalesByPublisherArgs = {
  options: PaginatedQueryOptions;
};


export type QuerySalesByConsoleArgs = {
  options: PaginatedQueryOptions;
};


export type QuerySalesByRatingArgs = {
  options: PaginatedQueryOptions;
};


export type QueryHighestCriticScoresArgs = {
  options: PaginatedQueryOptions;
};


export type QueryHighestUserScoresArgs = {
  options: PaginatedQueryOptions;
};

export type PaginatedGames = {
  __typename?: 'PaginatedGames';
  rows: Array<GamesWithGroupBy>;
  groupedBy: Array<Column>;
  orderedBy: Array<OrderByColumn>;
  hasMore: Scalars['Boolean'];
};

export type GamesWithGroupBy = {
  __typename?: 'GamesWithGroupBy';
  id: Scalars['Int'];
  title: Scalars['String'];
  console: Console;
  year_of_release: Scalars['Int'];
  genre: Genre;
  publisher: Scalars['String'];
  na_sales: Scalars['Float'];
  eu_sales: Scalars['Float'];
  jp_sales: Scalars['Float'];
  other_sales: Scalars['Float'];
  global_sales: Scalars['Float'];
  critic_score?: Maybe<Scalars['Int']>;
  critic_count?: Maybe<Scalars['Int']>;
  user_score?: Maybe<Scalars['Int']>;
  user_count?: Maybe<Scalars['Int']>;
  developer?: Maybe<Scalars['String']>;
  rating?: Maybe<Rating>;
  grouping: Array<Scalars['String']>;
};

/** select games by different consoles */
export enum Console {
  '2600' = '_2600',
  '3Do' = '_3DO',
  '3Ds' = '_3DS',
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
  Xone = 'XONE'
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
  Strategy = 'STRATEGY'
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
  T = 'T'
}

/** The columns that can be used to group the search by */
export enum Column {
  Genre = 'GENRE',
  Rating = 'RATING',
  Console = 'CONSOLE',
  Title = 'TITLE',
  Publisher = 'PUBLISHER',
  YearOfRelease = 'YEAR_OF_RELEASE'
}

export type OrderByColumn = {
  __typename?: 'OrderByColumn';
  column: OrderByColumns;
  order: SortOrder;
};

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
  OtherSales = 'OTHER_SALES'
}

/** select whether column should be sorted as ascending or descending */
export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type PaginatedQueryOptions = {
  where: WhereOptions;
  groupBy?: Maybe<Array<Column>>;
  /**
   * if query uses group by columns,
   *       then order by columns must be present
   *       amongst group by options
   */
  orderBy?: Maybe<Array<OrderByColumnInput>>;
  limit: Scalars['Int'];
  offset: Scalars['Int'];
};

export type WhereOptions = {
  title?: Maybe<TextSearch>;
  console?: Maybe<Array<Console>>;
  year_of_release?: Maybe<Array<Scalars['Int']>>;
  publisher?: Maybe<Array<Scalars['String']>>;
  genre?: Maybe<Array<Genre>>;
  rating?: Maybe<Array<Rating>>;
  critic_score?: Maybe<Array<Scalars['Int']>>;
  user_score?: Maybe<Array<Scalars['Int']>>;
  developer?: Maybe<Array<Scalars['String']>>;
  global_sales?: Maybe<Array<Scalars['Float']>>;
  na_sales?: Maybe<Array<Scalars['Float']>>;
  eu_sales?: Maybe<Array<Scalars['Float']>>;
  jp_sales?: Maybe<Array<Scalars['Float']>>;
  other_sales?: Maybe<Array<Scalars['Float']>>;
};

export type TextSearch = {
  searchText: Array<Scalars['String']>;
  searchType: TextSearchType;
};

/** distinguish between searching for exact text, text appearing at start, at end, or included anywhere */
export enum TextSearchType {
  Equals = 'EQUALS',
  Contains = 'CONTAINS',
  Startswith = 'STARTSWITH',
  Endswith = 'ENDSWITH'
}

export type OrderByColumnInput = {
  column: OrderByColumns;
  order: SortOrder;
};

export type PaginatedCrossPlatformSales = {
  __typename?: 'PaginatedCrossPlatformSales';
  rows: Array<CrossPlatformSales>;
  groupedBy: Array<Column>;
  orderedBy: Array<OrderByColumn>;
  hasMore: Scalars['Boolean'];
};

export type CrossPlatformSales = {
  __typename?: 'CrossPlatformSales';
  global_sales: Scalars['Float'];
  na_sales: Scalars['Float'];
  eu_sales: Scalars['Float'];
  jp_sales: Scalars['Float'];
  other_sales: Scalars['Float'];
  grouping: Array<Scalars['String']>;
  console?: Maybe<Scalars['String']>;
  year_of_release?: Maybe<Scalars['Int']>;
  genre?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['String']>;
  publisher?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type PaginatedGenreSales = {
  __typename?: 'PaginatedGenreSales';
  rows: Array<GenreSales>;
  groupedBy: Array<Column>;
  orderedBy: Array<OrderByColumn>;
  hasMore: Scalars['Boolean'];
};

export type GenreSales = {
  __typename?: 'GenreSales';
  global_sales: Scalars['Float'];
  na_sales: Scalars['Float'];
  eu_sales: Scalars['Float'];
  jp_sales: Scalars['Float'];
  other_sales: Scalars['Float'];
  grouping: Array<Scalars['String']>;
  console?: Maybe<Scalars['String']>;
  year_of_release?: Maybe<Scalars['Int']>;
  genre: Scalars['String'];
  rating?: Maybe<Scalars['String']>;
  publisher?: Maybe<Scalars['String']>;
};

export type PaginatedYearSales = {
  __typename?: 'PaginatedYearSales';
  rows: Array<YearSales>;
  groupedBy: Array<Column>;
  orderedBy: Array<OrderByColumn>;
  hasMore: Scalars['Boolean'];
};

export type YearSales = {
  __typename?: 'YearSales';
  global_sales: Scalars['Float'];
  na_sales: Scalars['Float'];
  eu_sales: Scalars['Float'];
  jp_sales: Scalars['Float'];
  other_sales: Scalars['Float'];
  grouping: Array<Scalars['String']>;
  console?: Maybe<Scalars['String']>;
  year_of_release: Scalars['Int'];
  genre?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['String']>;
  publisher?: Maybe<Scalars['String']>;
};

export type PaginatedPublisherSales = {
  __typename?: 'PaginatedPublisherSales';
  rows: Array<PublisherSales>;
  groupedBy: Array<Column>;
  orderedBy: Array<OrderByColumn>;
  hasMore: Scalars['Boolean'];
};

export type PublisherSales = {
  __typename?: 'PublisherSales';
  global_sales: Scalars['Float'];
  na_sales: Scalars['Float'];
  eu_sales: Scalars['Float'];
  jp_sales: Scalars['Float'];
  other_sales: Scalars['Float'];
  grouping: Array<Scalars['String']>;
  console?: Maybe<Scalars['String']>;
  year_of_release?: Maybe<Scalars['Int']>;
  genre?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['String']>;
  publisher: Scalars['String'];
};

export type PaginatedConsoleGameSales = {
  __typename?: 'PaginatedConsoleGameSales';
  rows: Array<ConsoleGameSales>;
  groupedBy: Array<Column>;
  orderedBy: Array<OrderByColumn>;
  hasMore: Scalars['Boolean'];
};

export type ConsoleGameSales = {
  __typename?: 'ConsoleGameSales';
  global_sales: Scalars['Float'];
  na_sales: Scalars['Float'];
  eu_sales: Scalars['Float'];
  jp_sales: Scalars['Float'];
  other_sales: Scalars['Float'];
  grouping: Array<Scalars['String']>;
  console: Scalars['String'];
  year_of_release?: Maybe<Scalars['Int']>;
  genre?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['String']>;
  publisher?: Maybe<Scalars['String']>;
};

export type PaginatedRatingSales = {
  __typename?: 'PaginatedRatingSales';
  rows: Array<RatingSales>;
  groupedBy: Array<Column>;
  orderedBy: Array<OrderByColumn>;
  hasMore: Scalars['Boolean'];
};

export type RatingSales = {
  __typename?: 'RatingSales';
  global_sales: Scalars['Float'];
  na_sales: Scalars['Float'];
  eu_sales: Scalars['Float'];
  jp_sales: Scalars['Float'];
  other_sales: Scalars['Float'];
  grouping: Array<Scalars['String']>;
  console?: Maybe<Scalars['String']>;
  year_of_release?: Maybe<Scalars['Int']>;
  genre?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['String']>;
  publisher?: Maybe<Scalars['String']>;
};

export type Consoles = {
  __typename?: 'CONSOLES';
  console: Scalars['String'];
  full_name: Scalars['String'];
  year_released: Scalars['Int'];
  global_sales?: Maybe<Scalars['Float']>;
  maker: Scalars['String'];
  console_type: Scalars['String'];
};

export type Console_Makers = {
  __typename?: 'CONSOLE_MAKERS';
  maker: Scalars['String'];
};

export type ConsoleSalesQueryVariables = Exact<{
  options: PaginatedQueryOptions;
}>;


export type ConsoleSalesQuery = (
  { __typename?: 'Query' }
  & { salesByConsole: (
    { __typename?: 'PaginatedConsoleGameSales' }
    & Pick<PaginatedConsoleGameSales, 'groupedBy' | 'hasMore'>
    & { rows: Array<(
      { __typename?: 'ConsoleGameSales' }
      & Pick<ConsoleGameSales, 'global_sales' | 'na_sales' | 'eu_sales' | 'jp_sales' | 'other_sales' | 'console' | 'year_of_release' | 'genre' | 'rating' | 'publisher'>
    )>, orderedBy: Array<(
      { __typename?: 'OrderByColumn' }
      & Pick<OrderByColumn, 'column' | 'order'>
    )> }
  ) }
);

export type CriticScoresQueryVariables = Exact<{
  options: PaginatedQueryOptions;
}>;


export type CriticScoresQuery = (
  { __typename?: 'Query' }
  & { highestCriticScores: (
    { __typename?: 'PaginatedGames' }
    & Pick<PaginatedGames, 'groupedBy' | 'hasMore'>
    & { rows: Array<(
      { __typename?: 'GamesWithGroupBy' }
      & Pick<GamesWithGroupBy, 'global_sales' | 'na_sales' | 'eu_sales' | 'jp_sales' | 'other_sales' | 'console' | 'year_of_release' | 'genre' | 'rating' | 'publisher' | 'id' | 'title' | 'developer' | 'critic_score' | 'critic_count' | 'user_score' | 'user_count'>
    )>, orderedBy: Array<(
      { __typename?: 'OrderByColumn' }
      & Pick<OrderByColumn, 'column' | 'order'>
    )> }
  ) }
);

export type CrossPlatformSalesQueryVariables = Exact<{
  options: PaginatedQueryOptions;
}>;


export type CrossPlatformSalesQuery = (
  { __typename?: 'Query' }
  & { salesByCrossPlatformTitles: (
    { __typename?: 'PaginatedCrossPlatformSales' }
    & Pick<PaginatedCrossPlatformSales, 'groupedBy' | 'hasMore'>
    & { rows: Array<(
      { __typename?: 'CrossPlatformSales' }
      & Pick<CrossPlatformSales, 'global_sales' | 'na_sales' | 'eu_sales' | 'jp_sales' | 'other_sales' | 'console' | 'year_of_release' | 'genre' | 'rating' | 'publisher' | 'title'>
    )>, orderedBy: Array<(
      { __typename?: 'OrderByColumn' }
      & Pick<OrderByColumn, 'column' | 'order'>
    )> }
  ) }
);

export type GameSalesQueryVariables = Exact<{
  options: PaginatedQueryOptions;
}>;


export type GameSalesQuery = (
  { __typename?: 'Query' }
  & { salesByTitles: (
    { __typename?: 'PaginatedGames' }
    & Pick<PaginatedGames, 'groupedBy' | 'hasMore'>
    & { rows: Array<(
      { __typename?: 'GamesWithGroupBy' }
      & Pick<GamesWithGroupBy, 'global_sales' | 'na_sales' | 'eu_sales' | 'jp_sales' | 'other_sales' | 'console' | 'year_of_release' | 'genre' | 'rating' | 'publisher' | 'id' | 'title' | 'developer' | 'critic_score' | 'critic_count' | 'user_score' | 'user_count'>
    )>, orderedBy: Array<(
      { __typename?: 'OrderByColumn' }
      & Pick<OrderByColumn, 'column' | 'order'>
    )> }
  ) }
);

export type GamesListQueryVariables = Exact<{
  options: PaginatedQueryOptions;
}>;


export type GamesListQuery = (
  { __typename?: 'Query' }
  & { games: (
    { __typename?: 'PaginatedGames' }
    & Pick<PaginatedGames, 'groupedBy' | 'hasMore'>
    & { rows: Array<(
      { __typename?: 'GamesWithGroupBy' }
      & Pick<GamesWithGroupBy, 'global_sales' | 'na_sales' | 'eu_sales' | 'jp_sales' | 'other_sales' | 'console' | 'year_of_release' | 'genre' | 'rating' | 'publisher' | 'id' | 'title' | 'developer' | 'critic_score' | 'critic_count' | 'user_score' | 'user_count'>
    )>, orderedBy: Array<(
      { __typename?: 'OrderByColumn' }
      & Pick<OrderByColumn, 'column' | 'order'>
    )> }
  ) }
);

export type GenreSalesQueryVariables = Exact<{
  options: PaginatedQueryOptions;
}>;


export type GenreSalesQuery = (
  { __typename?: 'Query' }
  & { salesByGenre: (
    { __typename?: 'PaginatedGenreSales' }
    & Pick<PaginatedGenreSales, 'groupedBy' | 'hasMore'>
    & { rows: Array<(
      { __typename?: 'GenreSales' }
      & Pick<GenreSales, 'global_sales' | 'na_sales' | 'eu_sales' | 'jp_sales' | 'other_sales' | 'console' | 'year_of_release' | 'genre' | 'rating' | 'publisher'>
    )>, orderedBy: Array<(
      { __typename?: 'OrderByColumn' }
      & Pick<OrderByColumn, 'column' | 'order'>
    )> }
  ) }
);

export type PublisherSalesQueryVariables = Exact<{
  options: PaginatedQueryOptions;
}>;


export type PublisherSalesQuery = (
  { __typename?: 'Query' }
  & { salesByPublisher: (
    { __typename?: 'PaginatedPublisherSales' }
    & Pick<PaginatedPublisherSales, 'groupedBy' | 'hasMore'>
    & { rows: Array<(
      { __typename?: 'PublisherSales' }
      & Pick<PublisherSales, 'global_sales' | 'na_sales' | 'eu_sales' | 'jp_sales' | 'other_sales' | 'console' | 'year_of_release' | 'genre' | 'rating' | 'publisher'>
    )>, orderedBy: Array<(
      { __typename?: 'OrderByColumn' }
      & Pick<OrderByColumn, 'column' | 'order'>
    )> }
  ) }
);

export type RatingSalesQueryVariables = Exact<{
  options: PaginatedQueryOptions;
}>;


export type RatingSalesQuery = (
  { __typename?: 'Query' }
  & { salesByRating: (
    { __typename?: 'PaginatedRatingSales' }
    & Pick<PaginatedRatingSales, 'groupedBy' | 'hasMore'>
    & { rows: Array<(
      { __typename?: 'RatingSales' }
      & Pick<RatingSales, 'global_sales' | 'na_sales' | 'eu_sales' | 'jp_sales' | 'other_sales' | 'console' | 'year_of_release' | 'genre' | 'rating' | 'publisher'>
    )>, orderedBy: Array<(
      { __typename?: 'OrderByColumn' }
      & Pick<OrderByColumn, 'column' | 'order'>
    )> }
  ) }
);

export type UserScoresQueryVariables = Exact<{
  options: PaginatedQueryOptions;
}>;


export type UserScoresQuery = (
  { __typename?: 'Query' }
  & { highestUserScores: (
    { __typename?: 'PaginatedGames' }
    & Pick<PaginatedGames, 'groupedBy' | 'hasMore'>
    & { rows: Array<(
      { __typename?: 'GamesWithGroupBy' }
      & Pick<GamesWithGroupBy, 'global_sales' | 'na_sales' | 'eu_sales' | 'jp_sales' | 'other_sales' | 'console' | 'year_of_release' | 'genre' | 'rating' | 'publisher' | 'id' | 'title' | 'developer' | 'critic_score' | 'critic_count' | 'user_score' | 'user_count'>
    )>, orderedBy: Array<(
      { __typename?: 'OrderByColumn' }
      & Pick<OrderByColumn, 'column' | 'order'>
    )> }
  ) }
);

export type YearSalesQueryVariables = Exact<{
  options: PaginatedQueryOptions;
}>;


export type YearSalesQuery = (
  { __typename?: 'Query' }
  & { salesByYear: (
    { __typename?: 'PaginatedYearSales' }
    & Pick<PaginatedYearSales, 'groupedBy' | 'hasMore'>
    & { rows: Array<(
      { __typename?: 'YearSales' }
      & Pick<YearSales, 'global_sales' | 'na_sales' | 'eu_sales' | 'jp_sales' | 'other_sales' | 'console' | 'year_of_release' | 'genre' | 'rating' | 'publisher'>
    )>, orderedBy: Array<(
      { __typename?: 'OrderByColumn' }
      & Pick<OrderByColumn, 'column' | 'order'>
    )> }
  ) }
);


export const ConsoleSalesDocument = gql`
    query ConsoleSales($options: PaginatedQueryOptions!) {
  salesByConsole(options: $options) {
    rows {
      global_sales
      na_sales
      eu_sales
      jp_sales
      other_sales
      console
      year_of_release
      genre
      rating
      publisher
    }
    groupedBy
    orderedBy {
      column
      order
    }
    hasMore
  }
}
    `;

export function useConsoleSalesQuery(options: Omit<Urql.UseQueryArgs<ConsoleSalesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ConsoleSalesQuery>({ query: ConsoleSalesDocument, ...options });
};
export const CriticScoresDocument = gql`
    query CriticScores($options: PaginatedQueryOptions!) {
  highestCriticScores(options: $options) {
    rows {
      global_sales
      na_sales
      eu_sales
      jp_sales
      other_sales
      console
      year_of_release
      genre
      rating
      publisher
      id
      title
      developer
      critic_score
      critic_count
      user_score
      user_count
    }
    groupedBy
    orderedBy {
      column
      order
    }
    hasMore
  }
}
    `;

export function useCriticScoresQuery(options: Omit<Urql.UseQueryArgs<CriticScoresQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<CriticScoresQuery>({ query: CriticScoresDocument, ...options });
};
export const CrossPlatformSalesDocument = gql`
    query CrossPlatformSales($options: PaginatedQueryOptions!) {
  salesByCrossPlatformTitles(options: $options) {
    rows {
      global_sales
      na_sales
      eu_sales
      jp_sales
      other_sales
      console
      year_of_release
      genre
      rating
      publisher
      title
    }
    groupedBy
    orderedBy {
      column
      order
    }
    hasMore
  }
}
    `;

export function useCrossPlatformSalesQuery(options: Omit<Urql.UseQueryArgs<CrossPlatformSalesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<CrossPlatformSalesQuery>({ query: CrossPlatformSalesDocument, ...options });
};
export const GameSalesDocument = gql`
    query GameSales($options: PaginatedQueryOptions!) {
  salesByTitles(options: $options) {
    rows {
      global_sales
      na_sales
      eu_sales
      jp_sales
      other_sales
      console
      year_of_release
      genre
      rating
      publisher
      id
      title
      developer
      critic_score
      critic_count
      user_score
      user_count
    }
    groupedBy
    orderedBy {
      column
      order
    }
    hasMore
  }
}
    `;

export function useGameSalesQuery(options: Omit<Urql.UseQueryArgs<GameSalesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GameSalesQuery>({ query: GameSalesDocument, ...options });
};
export const GamesListDocument = gql`
    query GamesList($options: PaginatedQueryOptions!) {
  games(options: $options) {
    rows {
      global_sales
      na_sales
      eu_sales
      jp_sales
      other_sales
      console
      year_of_release
      genre
      rating
      publisher
      id
      title
      developer
      critic_score
      critic_count
      user_score
      user_count
    }
    groupedBy
    orderedBy {
      column
      order
    }
    hasMore
  }
}
    `;

export function useGamesListQuery(options: Omit<Urql.UseQueryArgs<GamesListQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GamesListQuery>({ query: GamesListDocument, ...options });
};
export const GenreSalesDocument = gql`
    query GenreSales($options: PaginatedQueryOptions!) {
  salesByGenre(options: $options) {
    rows {
      global_sales
      na_sales
      eu_sales
      jp_sales
      other_sales
      console
      year_of_release
      genre
      rating
      publisher
    }
    groupedBy
    orderedBy {
      column
      order
    }
    hasMore
  }
}
    `;

export function useGenreSalesQuery(options: Omit<Urql.UseQueryArgs<GenreSalesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GenreSalesQuery>({ query: GenreSalesDocument, ...options });
};
export const PublisherSalesDocument = gql`
    query PublisherSales($options: PaginatedQueryOptions!) {
  salesByPublisher(options: $options) {
    rows {
      global_sales
      na_sales
      eu_sales
      jp_sales
      other_sales
      console
      year_of_release
      genre
      rating
      publisher
    }
    groupedBy
    orderedBy {
      column
      order
    }
    hasMore
  }
}
    `;

export function usePublisherSalesQuery(options: Omit<Urql.UseQueryArgs<PublisherSalesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<PublisherSalesQuery>({ query: PublisherSalesDocument, ...options });
};
export const RatingSalesDocument = gql`
    query RatingSales($options: PaginatedQueryOptions!) {
  salesByRating(options: $options) {
    rows {
      global_sales
      na_sales
      eu_sales
      jp_sales
      other_sales
      console
      year_of_release
      genre
      rating
      publisher
    }
    groupedBy
    orderedBy {
      column
      order
    }
    hasMore
  }
}
    `;

export function useRatingSalesQuery(options: Omit<Urql.UseQueryArgs<RatingSalesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<RatingSalesQuery>({ query: RatingSalesDocument, ...options });
};
export const UserScoresDocument = gql`
    query UserScores($options: PaginatedQueryOptions!) {
  highestUserScores(options: $options) {
    rows {
      global_sales
      na_sales
      eu_sales
      jp_sales
      other_sales
      console
      year_of_release
      genre
      rating
      publisher
      id
      title
      developer
      critic_score
      critic_count
      user_score
      user_count
    }
    groupedBy
    orderedBy {
      column
      order
    }
    hasMore
  }
}
    `;

export function useUserScoresQuery(options: Omit<Urql.UseQueryArgs<UserScoresQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<UserScoresQuery>({ query: UserScoresDocument, ...options });
};
export const YearSalesDocument = gql`
    query YearSales($options: PaginatedQueryOptions!) {
  salesByYear(options: $options) {
    rows {
      global_sales
      na_sales
      eu_sales
      jp_sales
      other_sales
      console
      year_of_release
      genre
      rating
      publisher
    }
    groupedBy
    orderedBy {
      column
      order
    }
    hasMore
  }
}
    `;

export function useYearSalesQuery(options: Omit<Urql.UseQueryArgs<YearSalesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<YearSalesQuery>({ query: YearSalesDocument, ...options });
};