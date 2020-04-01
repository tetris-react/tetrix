import { gql } from "apollo-boost";
import { useEffect } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";

const REGISTER = gql`
  mutation Register($data: RegisterInput!) {
    register(data: $data) {
      id
      username
      email
      country
      tzAbv
      tzName
    }
  }
`;

const LOGIN = gql`
  mutation Login($data: LoginInput!) {
    login(data: $data) {
      username
    }
  }
`;

const LOGOUT = gql`
  mutation Logout {
    logout
  }
`;

const ME = gql`
  query CurrentUser {
    currentUser {
      id
      username
      email
      country
      tzAbv
      tzName
      records {
        id
        score
        level
        lines
        isPrivate
      }
    }
  }
`;

const Apollo = () => {
  const [register, { data, loading, error }] = useMutation(REGISTER);
  const [
    login,
    { data: loginData, loading: loginLoading, error: loginError },
  ] = useMutation(LOGIN);
  const [
    logout,
    { data: logoutData, loading: logoutLoading, error: logoutError },
  ] = useMutation(LOGOUT);
  const {
    data: meData,
    loading: meLoading,
    error: meError,
    refetch,
  } = useQuery(ME);

  useEffect(() => {
    refetch();
  }, [loginData?.login?.username]);

  const handleRegister = (e: any) => {
    e.preventDefault();

    register({
      variables: {
        data: {
          email: "billy@thekid.com",
          username: "billyTheKid",
          password: "password",
          tzAbv: "EST",
          tzName: "America/New_York",
        },
      },
    });
  };

  const handleLogin = (e: any) => {
    e.preventDefault();
    login({
      variables: {
        data: {
          username: "FireNinja",
          password: "password",
        },
      },
    });
  };

  const handleLogout = (e: any) => {
    e.preventDefault();
    logout();
  };

  return (
    <div>
      <button onClick={handleRegister}>Register</button>
      {data?.register ? (
        <h1 style={{ color: "white" }}>{data?.register?.username}</h1>
      ) : loading ? (
        <h1 style={{ color: "white" }}>...Loading</h1>
      ) : error ? (
        <h1 style={{ color: "white" }}>{error.message}</h1>
      ) : null}
      <button onClick={handleLogin}>Login</button>
      {loginData?.login ? (
        <h1 style={{ color: "white" }}>{loginData?.login?.username}</h1>
      ) : loginLoading ? (
        <h1 style={{ color: "white" }}>...Loading</h1>
      ) : loginError ? (
        <h1 style={{ color: "white" }}>{loginError.message}</h1>
      ) : null}
      <button onClick={handleLogout}>Logout</button>
      {logoutData?.logout ? (
        <h1 style={{ color: "white" }}>{logoutData?.logout?.username}</h1>
      ) : logoutLoading ? (
        <h1 style={{ color: "white" }}>...Loading</h1>
      ) : logoutError ? (
        <h1 style={{ color: "white" }}>{logoutError.message}</h1>
      ) : null}
      <h1 style={{ color: "white" }}>Who am I?</h1>
      {meData?.currentUser ? (
        <h1 style={{ color: "white" }}>{meData?.currentUser?.username}</h1>
      ) : meLoading ? (
        <h1 style={{ color: "white" }}>...Loading</h1>
      ) : meError ? (
        <h1 style={{ color: "white" }}>{meError.message}</h1>
      ) : null}
    </div>
  );
};

export default Apollo;
