declare module '*/users.graphql' {
  /// <reference types="react" />
  import * as ApolloReactCommon from '@apollo/react-common';
  import * as ApolloReactComponents from '@apollo/react-components';
  import * as ApolloReactHooks from '@apollo/react-hooks';
  export type Maybe<T> = T | null;
  export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
  /** All built-in and custom scalars, mapped to their actual values */
  export type Scalars = {
      ID: string;
      String: string;
      Boolean: boolean;
      Int: number;
      Float: number;
  };
  export type AuthInput = {
      username: Scalars['String'];
      password: Scalars['String'];
  };
  export type Mutation = {
      __typename?: 'Mutation';
      register?: Maybe<User>;
      login?: Maybe<User>;
  };
  export type MutationRegisterArgs = {
      data: AuthInput;
  };
  export type MutationLoginArgs = {
      data: AuthInput;
  };
  export type Query = {
      __typename?: 'Query';
      users: Array<Maybe<User>>;
      user?: Maybe<User>;
  };
  export type QueryUserArgs = {
      id: Scalars['ID'];
  };
  export type User = {
      __typename?: 'User';
      id: Scalars['ID'];
      username: Scalars['String'];
      password: Scalars['String'];
  };
  export type UsersQueryVariables = {};
  export type UsersQuery = ({
      __typename?: 'Query';
  } & {
      users: Array<Maybe<({
          __typename?: 'User';
      } & Pick<User, 'id' | 'username' | 'password'>)>>;
  });
  export const UsersDocument: import("graphql").DocumentNode;
  export type UsersComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<UsersQuery, UsersQueryVariables>, 'query'>;
  export const UsersComponent: (props: Pick<ApolloReactComponents.QueryComponentOptions<UsersQuery, UsersQueryVariables>, "client" | "children" | "displayName" | "context" | "variables" | "errorPolicy" | "fetchPolicy" | "skip" | "onCompleted" | "onError" | "ssr" | "pollInterval" | "notifyOnNetworkStatusChange" | "partialRefetch" | "returnPartialData">) => JSX.Element;
  /**
   * __useUsersQuery__
   *
   * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
   * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
   * you can use to render your UI.
   *
   * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
   *
   * @example
   * const { data, loading, error } = useUsersQuery({
   *   variables: {
   *   },
   * });
   */
  export function useUsersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UsersQuery, UsersQueryVariables>): ApolloReactCommon.QueryResult<UsersQuery, UsersQueryVariables>;
  export function useUsersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>): [(options?: ApolloReactHooks.QueryLazyOptions<UsersQueryVariables>) => void, ApolloReactCommon.QueryResult<UsersQuery, UsersQueryVariables>];
  export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
  export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
  export type UsersQueryResult = ApolloReactCommon.QueryResult<UsersQuery, UsersQueryVariables>;
}