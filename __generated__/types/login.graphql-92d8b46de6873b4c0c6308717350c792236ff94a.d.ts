declare module '*/login.graphql' {
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
  export type LoginMutationVariables = {
      data: AuthInput;
  };
  export type LoginMutation = ({
      __typename?: 'Mutation';
  } & {
      login?: Maybe<({
          __typename?: 'User';
      } & Pick<User, 'id' | 'username' | 'password'>)>;
  });
  export const LoginDocument: import("graphql").DocumentNode;
  export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;
  export type LoginComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<LoginMutation, LoginMutationVariables>, 'mutation'>;
  export const LoginComponent: (props: Pick<ApolloReactComponents.MutationComponentOptions<LoginMutation, LoginMutationVariables>, "client" | "update" | "children" | "context" | "variables" | "optimisticResponse" | "refetchQueries" | "awaitRefetchQueries" | "errorPolicy" | "fetchPolicy" | "onCompleted" | "onError" | "notifyOnNetworkStatusChange" | "ignoreResults">) => JSX.Element;
  /**
   * __useLoginMutation__
   *
   * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
   * When your component renders, `useLoginMutation` returns a tuple that includes:
   * - A mutate function that you can call at any time to execute the mutation
   * - An object with fields that represent the current status of the mutation's execution
   *
   * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
   *
   * @example
   * const [loginMutation, { data, loading, error }] = useLoginMutation({
   *   variables: {
   *      data: // value for 'data'
   *   },
   * });
   */
  export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>): ApolloReactHooks.MutationTuple<LoginMutation, LoginMutationVariables>;
  export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
  export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
  export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
}