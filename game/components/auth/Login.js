import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN } from '../../../queries';
import { Button, ButtonContainer, Form, Input } from './styles';

const Login = props => {
  const { refetch } = props;
  const [errors, setErrors] = useState({});
  const [login, { data, loading, error }] = useMutation(LOGIN);

  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    let newErrors = { ...errors };

    login({
      variables: {
        data: {
          username: user.username,
          password: user.password
        }
      }
    });

    setErrors(newErrors);
  };

  useEffect(
    () => {
      if (data) refetch();
    },
    [data]
  );

  return (
    <Form>
      <Input
        type="text"
        name="username"
        value={user.username}
        placeholder="user_name"
        onChange={handleChange}
      />
      <span>
        {errors.username}
      </span>
      <Input
        type="password"
        name="password"
        value={user.password}
        placeholder="password"
        onChange={handleChange}
      />
      <span>
        {errors.password}
      </span>
      <ButtonContainer>
        <Button type="button" onClick={() => props.setViewForm(false)}>
          Go Back
        </Button>
        <Button type="submit" onClick={handleSubmit}>
          Login
        </Button>
      </ButtonContainer>
    </Form>
  );
};

export default Login;
