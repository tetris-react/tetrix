declare module '*/user.graphql' {
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
  export type UserQueryVariables = {
      id: Scalars['ID'];
  };
  export type UserQuery = ({
      __typename?: 'Query';
  } & {
      user?: Maybe<({
          __typename?: 'User';
      } & Pick<User, 'id' | 'username' | 'password'>)>;
  });
  export const UserDocument: import("graphql").DocumentNode;
  export type UserComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<UserQuery, UserQueryVariables>, 'query'> & ({
      variables: UserQueryVariables;
      skip?: boolean;
  } | {
      skip: boolean;
  });
  export const UserComponent: (props: UserComponentProps) => JSX.Element;
  /**
   * __useUserQuery__
   *
   * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
   * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
   * you can use to render your UI.
   *
   * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
   *
   * @example
   * const { data, loading, error } = useUserQuery({
   *   variables: {
   *      id: // value for 'id'
   *   },
   * });
   */
  export function useUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UserQuery, UserQueryVariables>): ApolloReactCommon.QueryResult<UserQuery, UserQueryVariables>;
  export function useUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserQuery, UserQueryVariables>): [(options?: ApolloReactHooks.QueryLazyOptions<UserQueryVariables>) => void, ApolloReactCommon.QueryResult<UserQuery, UserQueryVariables>];
  export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
  export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
  export type UserQueryResult = ApolloReactCommon.QueryResult<UserQuery, UserQueryVariables>;
}