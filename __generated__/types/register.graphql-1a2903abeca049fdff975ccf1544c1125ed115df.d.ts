declare module '*/register.graphql' {
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
  export type RegisterMutationVariables = {
      data: AuthInput;
  };
  export type RegisterMutation = ({
      __typename?: 'Mutation';
  } & {
      register?: Maybe<({
          __typename?: 'User';
      } & Pick<User, 'id' | 'username' | 'password'>)>;
  });
  export const RegisterDocument: import("graphql").DocumentNode;
  export type RegisterMutationFn = ApolloReactCommon.MutationFunction<RegisterMutation, RegisterMutationVariables>;
  export type RegisterComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RegisterMutation, RegisterMutationVariables>, 'mutation'>;
  export const RegisterComponent: (props: Pick<ApolloReactComponents.MutationComponentOptions<RegisterMutation, RegisterMutationVariables>, "client" | "update" | "children" | "context" | "variables" | "optimisticResponse" | "refetchQueries" | "awaitRefetchQueries" | "errorPolicy" | "fetchPolicy" | "onCompleted" | "onError" | "notifyOnNetworkStatusChange" | "ignoreResults">) => JSX.Element;
  /**
   * __useRegisterMutation__
   *
   * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
   * When your component renders, `useRegisterMutation` returns a tuple that includes:
   * - A mutate function that you can call at any time to execute the mutation
   * - An object with fields that represent the current status of the mutation's execution
   *
   * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
   *
   * @example
   * const [registerMutation, { data, loading, error }] = useRegisterMutation({
   *   variables: {
   *      data: // value for 'data'
   *   },
   * });
   */
  export function useRegisterMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RegisterMutation, RegisterMutationVariables>): ApolloReactHooks.MutationTuple<RegisterMutation, RegisterMutationVariables>;
  export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
  export type RegisterMutationResult = ApolloReactCommon.MutationResult<RegisterMutation>;
  export type RegisterMutationOptions = ApolloReactCommon.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
}