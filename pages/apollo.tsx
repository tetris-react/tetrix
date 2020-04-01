import { gql } from 'apollo-boost';
import React from 'react'
import { useMutation } from '@apollo/react-hooks';
import { withApollo } from '../lib/apollo';

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

const Apollo = () => {
  const [register, { data, loading, error }] = useMutation(REGISTER);
  const [login, { data: loginData, loading: loginLoading, error: loginError }] = useMutation(LOGIN);
  // const {register: registerData} = data;

  const handleRegister = (e: any) => {
    e.preventDefault();

    register({
      variables: {
        data: {
          email: "4@t.com",
          username: "dave4",
          password: "password",
          tzAbv: "EST",
          tzName: "America/New_York"
        }
      }
    });
  };

  const handleLogin = (e: any) => {
    e.preventDefault();
    login({
      variables: {
        data: {
          username: "dave3",
          password: "password"
        }
      }
    })
  }

  console.log('error', loginError);
  console.log('loginData?.login', loginData?.login);

  return (
    <div>
      <button onClick={handleRegister}>Register</button>
      {data?.register
        ? <h1 style={{color: 'white'}}>{data?.register?.username}</h1> 
        : loading 
          ? <h1 style={{ color: 'white' }}>...Loading</h1>
        : error
            ? <h1 style={{ color: 'white' }}>{error.message}</h1>
        : null
      }
      <button onClick={handleLogin}>Login</button>
      {loginData?.login
        ? <h1 style={{ color: 'white' }}>{loginData?.login?.username}</h1>
        : loginLoading
          ? <h1 style={{ color: 'white' }}>...Loading</h1>
          : loginError
            ? <h1 style={{ color: 'white' }}>{loginError.message}</h1>
            : null
      }
    </div>
  )
}

export default withApollo({ ssr: true })(Apollo);


/*

  mutation Register {
    register(
      data: {
        email: "FireNinja@gmail.com"
        username: "FireNinja"
        password: "password"
        tzAbv: "CST"
        tzName: "America/Chicago"
      }
    ) {
      id
      username
      email
      country
      tzAbv
      tzName
    }
  }
*/

