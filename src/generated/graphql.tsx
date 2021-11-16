import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Consoles = {
  __typename?: "CONSOLES";
  console: Scalars["String"];
  full_name: Scalars["String"];
  year_released: Scalars["Int"];
  global_sales?: Maybe<Scalars["Float"]>;
  maker: Scalars["String"];
  console_type: Scalars["String"];
};

export type Console_Makers = {
  __typename?: "CONSOLE_MAKERS";
  maker: Scalars["String"];
};

/** The columns that can be used to group the search by */
export enum Column {
  Genre = "GENRE",
  Rating = "RATING",
  Console = "CONSOLE",
  Title = "TITLE",
  Publisher = "PUBLISHER",
  YearOfRelease = "YEAR_OF_RELEASE",
}

export type ConsoleGameSales = {
  __typename?: "ConsoleGameSales";
  global_sales: Scalars["Float"];
  na_sales: Scalars["Float"];
  eu_sales: Scalars["Float"];
  jp_sales: Scalars["Float"];
  other_sales: Scalars["Float"];
  grouping: Array<Scalars["String"]>;
  console: Scalars["String"];
  year_of_release?: Maybe<Scalars["Int"]>;
  genre?: Maybe<Scalars["String"]>;
  rating?: Maybe<Scalars["String"]>;
  publisher?: Maybe<Scalars["String"]>;
};

export type CrossPlatformSales = {
  __typename?: "CrossPlatformSales";
  global_sales: Scalars["Float"];
  na_sales: Scalars["Float"];
  eu_sales: Scalars["Float"];
  jp_sales: Scalars["Float"];
  other_sales: Scalars["Float"];
  grouping: Array<Scalars["String"]>;
  console?: Maybe<Scalars["String"]>;
  year_of_release?: Maybe<Scalars["Int"]>;
  genre?: Maybe<Scalars["String"]>;
  rating?: Maybe<Scalars["String"]>;
  publisher?: Maybe<Scalars["String"]>;
  title: Scalars["String"];
};

export type GamesWithGroupBy = {
  __typename?: "GamesWithGroupBy";
  id: Scalars["Int"];
  title: Scalars["String"];
  console: Console;
  year_of_release: Scalars["Int"];
  genre: Genre;
  publisher: Scalars["String"];
  na_sales: Scalars["Float"];
  eu_sales: Scalars["Float"];
  jp_sales: Scalars["Float"];
  other_sales: Scalars["Float"];
  global_sales: Scalars["Float"];
  critic_score?: Maybe<Scalars["Int"]>;
  critic_count?: Maybe<Scalars["Int"]>;
  user_score?: Maybe<Scalars["Int"]>;
  user_count?: Maybe<Scalars["Int"]>;
  developer?: Maybe<Scalars["String"]>;
  rating?: Maybe<Rating>;
  grouping: Array<Scalars["String"]>;
};

export type GenreSales = {
  __typename?: "GenreSales";
  global_sales: Scalars["Float"];
  na_sales: Scalars["Float"];
  eu_sales: Scalars["Float"];
  jp_sales: Scalars["Float"];
  other_sales: Scalars["Float"];
  grouping: Array<Scalars["String"]>;
  console?: Maybe<Scalars["String"]>;
  year_of_release?: Maybe<Scalars["Int"]>;
  genre: Scalars["String"];
  rating?: Maybe<Scalars["String"]>;
  publisher?: Maybe<Scalars["String"]>;
};

export type OrderByColumn = {
  __typename?: "OrderByColumn";
  column: OrderByColumns;
  order: SortOrder;
};

export type OrderByColumnInput = {
  column: OrderByColumns;
  order: SortOrder;
};

/** select columns to order results by */
export enum OrderByColumns {
  Title = "TITLE",
  Console = "CONSOLE",
  YearOfRelease = "YEAR_OF_RELEASE",
  Publisher = "PUBLISHER",
  Genre = "GENRE",
  Rating = "RATING",
  CriticScore = "CRITIC_SCORE",
  UserScore = "USER_SCORE",
  Developer = "DEVELOPER",
  GlobalSales = "GLOBAL_SALES",
  NaSales = "NA_SALES",
  EuSales = "EU_SALES",
  JpSales = "JP_SALES",
  OtherSales = "OTHER_SALES",
}

export type PaginatedConsoleGameSales = {
  __typename?: "PaginatedConsoleGameSales";
  rows: Array<ConsoleGameSales>;
  groupedBy: Array<Column>;
  orderedBy: Array<OrderByColumn>;
  hasMore: Scalars["Boolean"];
};

export type PaginatedCrossPlatformSales = {
  __typename?: "PaginatedCrossPlatformSales";
  rows: Array<CrossPlatformSales>;
  groupedBy: Array<Column>;
  orderedBy: Array<OrderByColumn>;
  hasMore: Scalars["Boolean"];
};

export type PaginatedGames = {
  __typename?: "PaginatedGames";
  rows: Array<GamesWithGroupBy>;
  groupedBy: Array<Column>;
  orderedBy: Array<OrderByColumn>;
  hasMore: Scalars["Boolean"];
};

export type PaginatedGenreSales = {
  __typename?: "PaginatedGenreSales";
  rows: Array<GenreSales>;
  groupedBy: Array<Column>;
  orderedBy: Array<OrderByColumn>;
  hasMore: Scalars["Boolean"];
};

export type PaginatedPublisherSales = {
  __typename?: "PaginatedPublisherSales";
  rows: Array<PublisherSales>;
  groupedBy: Array<Column>;
  orderedBy: Array<OrderByColumn>;
  hasMore: Scalars["Boolean"];
};

export type PaginatedQueryOptions = {
  where: WhereOptions;
  groupBy?: Maybe<Array<Column>>;
  /**
   * if query uses group by columns,
   *       then order by columns must be present
   *       amongst group by options
   */
  orderBy?: Maybe<Array<OrderByColumnInput>>;
  limit: Scalars["Int"];
  offset: Scalars["Int"];
};

export type PaginatedRatingSales = {
  __typename?: "PaginatedRatingSales";
  rows: Array<RatingSales>;
  groupedBy: Array<Column>;
  orderedBy: Array<OrderByColumn>;
  hasMore: Scalars["Boolean"];
};

export type PaginatedYearSales = {
  __typename?: "PaginatedYearSales";
  rows: Array<YearSales>;
  groupedBy: Array<Column>;
  orderedBy: Array<OrderByColumn>;
  hasMore: Scalars["Boolean"];
};

export type PublisherSales = {
  __typename?: "PublisherSales";
  global_sales: Scalars["Float"];
  na_sales: Scalars["Float"];
  eu_sales: Scalars["Float"];
  jp_sales: Scalars["Float"];
  other_sales: Scalars["Float"];
  grouping: Array<Scalars["String"]>;
  console?: Maybe<Scalars["String"]>;
  year_of_release?: Maybe<Scalars["Int"]>;
  genre?: Maybe<Scalars["String"]>;
  rating?: Maybe<Scalars["String"]>;
  publisher: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
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

export type RatingSales = {
  __typename?: "RatingSales";
  global_sales: Scalars["Float"];
  na_sales: Scalars["Float"];
  eu_sales: Scalars["Float"];
  jp_sales: Scalars["Float"];
  other_sales: Scalars["Float"];
  grouping: Array<Scalars["String"]>;
  console?: Maybe<Scalars["String"]>;
  year_of_release?: Maybe<Scalars["Int"]>;
  genre?: Maybe<Scalars["String"]>;
  rating?: Maybe<Scalars["String"]>;
  publisher?: Maybe<Scalars["String"]>;
};

/** select whether column should be sorted as ascending or descending */
export enum SortOrder {
  Asc = "ASC",
  Desc = "DESC",
}

export type TextSearch = {
  searchText: Array<Scalars["String"]>;
  searchType: TextSearchType;
};

export type WhereOptions = {
  title?: Maybe<TextSearch>;
  console?: Maybe<Array<Console>>;
  year_of_release?: Maybe<Array<Scalars["Int"]>>;
  publisher?: Maybe<Array<Scalars["String"]>>;
  genre?: Maybe<Array<Genre>>;
  rating?: Maybe<Array<Rating>>;
  critic_score?: Maybe<Array<Scalars["Int"]>>;
  user_score?: Maybe<Array<Scalars["Int"]>>;
  developer?: Maybe<Array<Scalars["String"]>>;
  global_sales?: Maybe<Array<Scalars["Float"]>>;
  na_sales?: Maybe<Array<Scalars["Float"]>>;
  eu_sales?: Maybe<Array<Scalars["Float"]>>;
  jp_sales?: Maybe<Array<Scalars["Float"]>>;
  other_sales?: Maybe<Array<Scalars["Float"]>>;
};

export type YearSales = {
  __typename?: "YearSales";
  global_sales: Scalars["Float"];
  na_sales: Scalars["Float"];
  eu_sales: Scalars["Float"];
  jp_sales: Scalars["Float"];
  other_sales: Scalars["Float"];
  grouping: Array<Scalars["String"]>;
  console?: Maybe<Scalars["String"]>;
  year_of_release: Scalars["Int"];
  genre?: Maybe<Scalars["String"]>;
  rating?: Maybe<Scalars["String"]>;
  publisher?: Maybe<Scalars["String"]>;
};

/** select games by different consoles */
export enum Console {
  _2600 = "_2600",
  _3Do = "_3DO",
  _3Ds = "_3DS",
  Dc = "DC",
  Ds = "DS",
  Gb = "GB",
  Gba = "GBA",
  Gc = "GC",
  Gen = "GEN",
  Gg = "GG",
  N64 = "N64",
  Nes = "NES",
  Ng = "NG",
  Pc = "PC",
  Pcfx = "PCFX",
  Ps = "PS",
  Ps2 = "PS2",
  Ps3 = "PS3",
  Ps4 = "PS4",
  Psp = "PSP",
  Psv = "PSV",
  Sat = "SAT",
  Scd = "SCD",
  Snes = "SNES",
  Tg16 = "TG16",
  Wii = "WII",
  Wiiu = "WIIU",
  Ws = "WS",
  X360 = "X360",
  Xb = "XB",
  Xone = "XONE",
}

/** select games by different genres */
export enum Genre {
  Action = "ACTION",
  Adventure = "ADVENTURE",
  Fighting = "FIGHTING",
  Misc = "MISC",
  Platform = "PLATFORM",
  Puzzle = "PUZZLE",
  Racing = "RACING",
  Roleplaying = "ROLEPLAYING",
  Shooter = "SHOOTER",
  Simulation = "SIMULATION",
  Sports = "SPORTS",
  Strategy = "STRATEGY",
}

/** select games by different ratings */
export enum Rating {
  Ao = "AO",
  E = "E",
  E10Plus = "E10PLUS",
  Ec = "EC",
  KA = "K_A",
  M = "M",
  Rp = "RP",
  T = "T",
}

/** distinguish between searching for exact text, text appearing at start, at end, or included anywhere */
export enum TextSearchType {
  Equals = "EQUALS",
  Contains = "CONTAINS",
  Startswith = "STARTSWITH",
  Endswith = "ENDSWITH",
}

export type ConsoleSalesQueryVariables = Exact<{
  options: PaginatedQueryOptions;
}>;

export type ConsoleSalesQuery = { __typename?: "Query" } & {
  salesByConsole: { __typename?: "PaginatedConsoleGameSales" } & Pick<
    PaginatedConsoleGameSales,
    "groupedBy" | "hasMore"
  > & {
      rows: Array<
        { __typename?: "ConsoleGameSales" } & Pick<
          ConsoleGameSales,
          | "global_sales"
          | "na_sales"
          | "eu_sales"
          | "jp_sales"
          | "other_sales"
          | "console"
          | "year_of_release"
          | "genre"
          | "rating"
          | "publisher"
        >
      >;
      orderedBy: Array<
        { __typename?: "OrderByColumn" } & Pick<
          OrderByColumn,
          "column" | "order"
        >
      >;
    };
};

export type CriticScoresQueryVariables = Exact<{
  options: PaginatedQueryOptions;
}>;

export type CriticScoresQuery = { __typename?: "Query" } & {
  highestCriticScores: { __typename?: "PaginatedGames" } & Pick<
    PaginatedGames,
    "groupedBy" | "hasMore"
  > & {
      rows: Array<
        { __typename?: "GamesWithGroupBy" } & Pick<
          GamesWithGroupBy,
          | "global_sales"
          | "na_sales"
          | "eu_sales"
          | "jp_sales"
          | "other_sales"
          | "console"
          | "year_of_release"
          | "genre"
          | "rating"
          | "publisher"
          | "id"
          | "title"
          | "developer"
          | "critic_score"
          | "critic_count"
          | "user_score"
          | "user_count"
        >
      >;
      orderedBy: Array<
        { __typename?: "OrderByColumn" } & Pick<
          OrderByColumn,
          "column" | "order"
        >
      >;
    };
};

export type CrossPlatformSalesQueryVariables = Exact<{
  options: PaginatedQueryOptions;
}>;

export type CrossPlatformSalesQuery = { __typename?: "Query" } & {
  salesByCrossPlatformTitles: {
    __typename?: "PaginatedCrossPlatformSales";
  } & Pick<PaginatedCrossPlatformSales, "groupedBy" | "hasMore"> & {
      rows: Array<
        { __typename?: "CrossPlatformSales" } & Pick<
          CrossPlatformSales,
          | "global_sales"
          | "na_sales"
          | "eu_sales"
          | "jp_sales"
          | "other_sales"
          | "console"
          | "year_of_release"
          | "genre"
          | "rating"
          | "publisher"
          | "title"
        >
      >;
      orderedBy: Array<
        { __typename?: "OrderByColumn" } & Pick<
          OrderByColumn,
          "column" | "order"
        >
      >;
    };
};

export type GameSalesQueryVariables = Exact<{
  options: PaginatedQueryOptions;
}>;

export type GameSalesQuery = { __typename?: "Query" } & {
  salesByTitles: { __typename?: "PaginatedGames" } & Pick<
    PaginatedGames,
    "groupedBy" | "hasMore"
  > & {
      rows: Array<
        { __typename?: "GamesWithGroupBy" } & Pick<
          GamesWithGroupBy,
          | "global_sales"
          | "na_sales"
          | "eu_sales"
          | "jp_sales"
          | "other_sales"
          | "console"
          | "year_of_release"
          | "genre"
          | "rating"
          | "publisher"
          | "id"
          | "title"
          | "developer"
          | "critic_score"
          | "critic_count"
          | "user_score"
          | "user_count"
        >
      >;
      orderedBy: Array<
        { __typename?: "OrderByColumn" } & Pick<
          OrderByColumn,
          "column" | "order"
        >
      >;
    };
};

export type GamesListQueryVariables = Exact<{
  options: PaginatedQueryOptions;
}>;

export type GamesListQuery = { __typename?: "Query" } & {
  games: { __typename?: "PaginatedGames" } & Pick<
    PaginatedGames,
    "groupedBy" | "hasMore"
  > & {
      rows: Array<
        { __typename?: "GamesWithGroupBy" } & Pick<
          GamesWithGroupBy,
          | "global_sales"
          | "na_sales"
          | "eu_sales"
          | "jp_sales"
          | "other_sales"
          | "console"
          | "year_of_release"
          | "genre"
          | "rating"
          | "publisher"
          | "id"
          | "title"
          | "developer"
          | "critic_score"
          | "critic_count"
          | "user_score"
          | "user_count"
        >
      >;
      orderedBy: Array<
        { __typename?: "OrderByColumn" } & Pick<
          OrderByColumn,
          "column" | "order"
        >
      >;
    };
};

export type GenreSalesQueryVariables = Exact<{
  options: PaginatedQueryOptions;
}>;

export type GenreSalesQuery = { __typename?: "Query" } & {
  salesByGenre: { __typename?: "PaginatedGenreSales" } & Pick<
    PaginatedGenreSales,
    "groupedBy" | "hasMore"
  > & {
      rows: Array<
        { __typename?: "GenreSales" } & Pick<
          GenreSales,
          | "global_sales"
          | "na_sales"
          | "eu_sales"
          | "jp_sales"
          | "other_sales"
          | "console"
          | "year_of_release"
          | "genre"
          | "rating"
          | "publisher"
        >
      >;
      orderedBy: Array<
        { __typename?: "OrderByColumn" } & Pick<
          OrderByColumn,
          "column" | "order"
        >
      >;
    };
};

export type PublisherSalesQueryVariables = Exact<{
  options: PaginatedQueryOptions;
}>;

export type PublisherSalesQuery = { __typename?: "Query" } & {
  salesByPublisher: { __typename?: "PaginatedPublisherSales" } & Pick<
    PaginatedPublisherSales,
    "groupedBy" | "hasMore"
  > & {
      rows: Array<
        { __typename?: "PublisherSales" } & Pick<
          PublisherSales,
          | "global_sales"
          | "na_sales"
          | "eu_sales"
          | "jp_sales"
          | "other_sales"
          | "console"
          | "year_of_release"
          | "genre"
          | "rating"
          | "publisher"
        >
      >;
      orderedBy: Array<
        { __typename?: "OrderByColumn" } & Pick<
          OrderByColumn,
          "column" | "order"
        >
      >;
    };
};

export type RatingSalesQueryVariables = Exact<{
  options: PaginatedQueryOptions;
}>;

export type RatingSalesQuery = { __typename?: "Query" } & {
  salesByRating: { __typename?: "PaginatedRatingSales" } & Pick<
    PaginatedRatingSales,
    "groupedBy" | "hasMore"
  > & {
      rows: Array<
        { __typename?: "RatingSales" } & Pick<
          RatingSales,
          | "global_sales"
          | "na_sales"
          | "eu_sales"
          | "jp_sales"
          | "other_sales"
          | "console"
          | "year_of_release"
          | "genre"
          | "rating"
          | "publisher"
        >
      >;
      orderedBy: Array<
        { __typename?: "OrderByColumn" } & Pick<
          OrderByColumn,
          "column" | "order"
        >
      >;
    };
};

export type UserScoresQueryVariables = Exact<{
  options: PaginatedQueryOptions;
}>;

export type UserScoresQuery = { __typename?: "Query" } & {
  highestUserScores: { __typename?: "PaginatedGames" } & Pick<
    PaginatedGames,
    "groupedBy" | "hasMore"
  > & {
      rows: Array<
        { __typename?: "GamesWithGroupBy" } & Pick<
          GamesWithGroupBy,
          | "global_sales"
          | "na_sales"
          | "eu_sales"
          | "jp_sales"
          | "other_sales"
          | "console"
          | "year_of_release"
          | "genre"
          | "rating"
          | "publisher"
          | "id"
          | "title"
          | "developer"
          | "critic_score"
          | "critic_count"
          | "user_score"
          | "user_count"
        >
      >;
      orderedBy: Array<
        { __typename?: "OrderByColumn" } & Pick<
          OrderByColumn,
          "column" | "order"
        >
      >;
    };
};

export type YearSalesQueryVariables = Exact<{
  options: PaginatedQueryOptions;
}>;

export type YearSalesQuery = { __typename?: "Query" } & {
  salesByYear: { __typename?: "PaginatedYearSales" } & Pick<
    PaginatedYearSales,
    "groupedBy" | "hasMore"
  > & {
      rows: Array<
        { __typename?: "YearSales" } & Pick<
          YearSales,
          | "global_sales"
          | "na_sales"
          | "eu_sales"
          | "jp_sales"
          | "other_sales"
          | "console"
          | "year_of_release"
          | "genre"
          | "rating"
          | "publisher"
        >
      >;
      orderedBy: Array<
        { __typename?: "OrderByColumn" } & Pick<
          OrderByColumn,
          "column" | "order"
        >
      >;
    };
};

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

/**
 * __useConsoleSalesQuery__
 *
 * To run a query within a React component, call `useConsoleSalesQuery` and pass it any options that fit your needs.
 * When your component renders, `useConsoleSalesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConsoleSalesQuery({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useConsoleSalesQuery(
  baseOptions: Apollo.QueryHookOptions<
    ConsoleSalesQuery,
    ConsoleSalesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ConsoleSalesQuery, ConsoleSalesQueryVariables>(
    ConsoleSalesDocument,
    options
  );
}
export function useConsoleSalesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ConsoleSalesQuery,
    ConsoleSalesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ConsoleSalesQuery, ConsoleSalesQueryVariables>(
    ConsoleSalesDocument,
    options
  );
}
export type ConsoleSalesQueryHookResult = ReturnType<
  typeof useConsoleSalesQuery
>;
export type ConsoleSalesLazyQueryHookResult = ReturnType<
  typeof useConsoleSalesLazyQuery
>;
export type ConsoleSalesQueryResult = Apollo.QueryResult<
  ConsoleSalesQuery,
  ConsoleSalesQueryVariables
>;
export function refetchConsoleSalesQuery(
  variables: ConsoleSalesQueryVariables
) {
  return { query: ConsoleSalesDocument, variables: variables };
}
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

/**
 * __useCriticScoresQuery__
 *
 * To run a query within a React component, call `useCriticScoresQuery` and pass it any options that fit your needs.
 * When your component renders, `useCriticScoresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCriticScoresQuery({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useCriticScoresQuery(
  baseOptions: Apollo.QueryHookOptions<
    CriticScoresQuery,
    CriticScoresQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CriticScoresQuery, CriticScoresQueryVariables>(
    CriticScoresDocument,
    options
  );
}
export function useCriticScoresLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CriticScoresQuery,
    CriticScoresQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CriticScoresQuery, CriticScoresQueryVariables>(
    CriticScoresDocument,
    options
  );
}
export type CriticScoresQueryHookResult = ReturnType<
  typeof useCriticScoresQuery
>;
export type CriticScoresLazyQueryHookResult = ReturnType<
  typeof useCriticScoresLazyQuery
>;
export type CriticScoresQueryResult = Apollo.QueryResult<
  CriticScoresQuery,
  CriticScoresQueryVariables
>;
export function refetchCriticScoresQuery(
  variables: CriticScoresQueryVariables
) {
  return { query: CriticScoresDocument, variables: variables };
}
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

/**
 * __useCrossPlatformSalesQuery__
 *
 * To run a query within a React component, call `useCrossPlatformSalesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCrossPlatformSalesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCrossPlatformSalesQuery({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useCrossPlatformSalesQuery(
  baseOptions: Apollo.QueryHookOptions<
    CrossPlatformSalesQuery,
    CrossPlatformSalesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    CrossPlatformSalesQuery,
    CrossPlatformSalesQueryVariables
  >(CrossPlatformSalesDocument, options);
}
export function useCrossPlatformSalesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CrossPlatformSalesQuery,
    CrossPlatformSalesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    CrossPlatformSalesQuery,
    CrossPlatformSalesQueryVariables
  >(CrossPlatformSalesDocument, options);
}
export type CrossPlatformSalesQueryHookResult = ReturnType<
  typeof useCrossPlatformSalesQuery
>;
export type CrossPlatformSalesLazyQueryHookResult = ReturnType<
  typeof useCrossPlatformSalesLazyQuery
>;
export type CrossPlatformSalesQueryResult = Apollo.QueryResult<
  CrossPlatformSalesQuery,
  CrossPlatformSalesQueryVariables
>;
export function refetchCrossPlatformSalesQuery(
  variables: CrossPlatformSalesQueryVariables
) {
  return { query: CrossPlatformSalesDocument, variables: variables };
}
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

/**
 * __useGameSalesQuery__
 *
 * To run a query within a React component, call `useGameSalesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGameSalesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGameSalesQuery({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useGameSalesQuery(
  baseOptions: Apollo.QueryHookOptions<GameSalesQuery, GameSalesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GameSalesQuery, GameSalesQueryVariables>(
    GameSalesDocument,
    options
  );
}
export function useGameSalesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GameSalesQuery,
    GameSalesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GameSalesQuery, GameSalesQueryVariables>(
    GameSalesDocument,
    options
  );
}
export type GameSalesQueryHookResult = ReturnType<typeof useGameSalesQuery>;
export type GameSalesLazyQueryHookResult = ReturnType<
  typeof useGameSalesLazyQuery
>;
export type GameSalesQueryResult = Apollo.QueryResult<
  GameSalesQuery,
  GameSalesQueryVariables
>;
export function refetchGameSalesQuery(variables: GameSalesQueryVariables) {
  return { query: GameSalesDocument, variables: variables };
}
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

/**
 * __useGamesListQuery__
 *
 * To run a query within a React component, call `useGamesListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGamesListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGamesListQuery({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useGamesListQuery(
  baseOptions: Apollo.QueryHookOptions<GamesListQuery, GamesListQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GamesListQuery, GamesListQueryVariables>(
    GamesListDocument,
    options
  );
}
export function useGamesListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GamesListQuery,
    GamesListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GamesListQuery, GamesListQueryVariables>(
    GamesListDocument,
    options
  );
}
export type GamesListQueryHookResult = ReturnType<typeof useGamesListQuery>;
export type GamesListLazyQueryHookResult = ReturnType<
  typeof useGamesListLazyQuery
>;
export type GamesListQueryResult = Apollo.QueryResult<
  GamesListQuery,
  GamesListQueryVariables
>;
export function refetchGamesListQuery(variables: GamesListQueryVariables) {
  return { query: GamesListDocument, variables: variables };
}
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

/**
 * __useGenreSalesQuery__
 *
 * To run a query within a React component, call `useGenreSalesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGenreSalesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGenreSalesQuery({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useGenreSalesQuery(
  baseOptions: Apollo.QueryHookOptions<
    GenreSalesQuery,
    GenreSalesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GenreSalesQuery, GenreSalesQueryVariables>(
    GenreSalesDocument,
    options
  );
}
export function useGenreSalesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GenreSalesQuery,
    GenreSalesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GenreSalesQuery, GenreSalesQueryVariables>(
    GenreSalesDocument,
    options
  );
}
export type GenreSalesQueryHookResult = ReturnType<typeof useGenreSalesQuery>;
export type GenreSalesLazyQueryHookResult = ReturnType<
  typeof useGenreSalesLazyQuery
>;
export type GenreSalesQueryResult = Apollo.QueryResult<
  GenreSalesQuery,
  GenreSalesQueryVariables
>;
export function refetchGenreSalesQuery(variables: GenreSalesQueryVariables) {
  return { query: GenreSalesDocument, variables: variables };
}
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

/**
 * __usePublisherSalesQuery__
 *
 * To run a query within a React component, call `usePublisherSalesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePublisherSalesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePublisherSalesQuery({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function usePublisherSalesQuery(
  baseOptions: Apollo.QueryHookOptions<
    PublisherSalesQuery,
    PublisherSalesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PublisherSalesQuery, PublisherSalesQueryVariables>(
    PublisherSalesDocument,
    options
  );
}
export function usePublisherSalesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PublisherSalesQuery,
    PublisherSalesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PublisherSalesQuery, PublisherSalesQueryVariables>(
    PublisherSalesDocument,
    options
  );
}
export type PublisherSalesQueryHookResult = ReturnType<
  typeof usePublisherSalesQuery
>;
export type PublisherSalesLazyQueryHookResult = ReturnType<
  typeof usePublisherSalesLazyQuery
>;
export type PublisherSalesQueryResult = Apollo.QueryResult<
  PublisherSalesQuery,
  PublisherSalesQueryVariables
>;
export function refetchPublisherSalesQuery(
  variables: PublisherSalesQueryVariables
) {
  return { query: PublisherSalesDocument, variables: variables };
}
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

/**
 * __useRatingSalesQuery__
 *
 * To run a query within a React component, call `useRatingSalesQuery` and pass it any options that fit your needs.
 * When your component renders, `useRatingSalesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRatingSalesQuery({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useRatingSalesQuery(
  baseOptions: Apollo.QueryHookOptions<
    RatingSalesQuery,
    RatingSalesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<RatingSalesQuery, RatingSalesQueryVariables>(
    RatingSalesDocument,
    options
  );
}
export function useRatingSalesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    RatingSalesQuery,
    RatingSalesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<RatingSalesQuery, RatingSalesQueryVariables>(
    RatingSalesDocument,
    options
  );
}
export type RatingSalesQueryHookResult = ReturnType<typeof useRatingSalesQuery>;
export type RatingSalesLazyQueryHookResult = ReturnType<
  typeof useRatingSalesLazyQuery
>;
export type RatingSalesQueryResult = Apollo.QueryResult<
  RatingSalesQuery,
  RatingSalesQueryVariables
>;
export function refetchRatingSalesQuery(variables: RatingSalesQueryVariables) {
  return { query: RatingSalesDocument, variables: variables };
}
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

/**
 * __useUserScoresQuery__
 *
 * To run a query within a React component, call `useUserScoresQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserScoresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserScoresQuery({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useUserScoresQuery(
  baseOptions: Apollo.QueryHookOptions<
    UserScoresQuery,
    UserScoresQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UserScoresQuery, UserScoresQueryVariables>(
    UserScoresDocument,
    options
  );
}
export function useUserScoresLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    UserScoresQuery,
    UserScoresQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UserScoresQuery, UserScoresQueryVariables>(
    UserScoresDocument,
    options
  );
}
export type UserScoresQueryHookResult = ReturnType<typeof useUserScoresQuery>;
export type UserScoresLazyQueryHookResult = ReturnType<
  typeof useUserScoresLazyQuery
>;
export type UserScoresQueryResult = Apollo.QueryResult<
  UserScoresQuery,
  UserScoresQueryVariables
>;
export function refetchUserScoresQuery(variables: UserScoresQueryVariables) {
  return { query: UserScoresDocument, variables: variables };
}
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

/**
 * __useYearSalesQuery__
 *
 * To run a query within a React component, call `useYearSalesQuery` and pass it any options that fit your needs.
 * When your component renders, `useYearSalesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useYearSalesQuery({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useYearSalesQuery(
  baseOptions: Apollo.QueryHookOptions<YearSalesQuery, YearSalesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<YearSalesQuery, YearSalesQueryVariables>(
    YearSalesDocument,
    options
  );
}
export function useYearSalesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    YearSalesQuery,
    YearSalesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<YearSalesQuery, YearSalesQueryVariables>(
    YearSalesDocument,
    options
  );
}
export type YearSalesQueryHookResult = ReturnType<typeof useYearSalesQuery>;
export type YearSalesLazyQueryHookResult = ReturnType<
  typeof useYearSalesLazyQuery
>;
export type YearSalesQueryResult = Apollo.QueryResult<
  YearSalesQuery,
  YearSalesQueryVariables
>;
export function refetchYearSalesQuery(variables: YearSalesQueryVariables) {
  return { query: YearSalesDocument, variables: variables };
}
