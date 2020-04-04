import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PropagateLoader } from 'react-spinners';
import styled from 'styled-components';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN } from '../../../queries';
import { renderLoginModal } from '../../../store';
import { Button, ButtonContainer, Form, Input } from './styles';

const LoginModal = props => {
  const { refetch } = props;
  const dispatch = useDispatch();
  const [login, { data, loading, error }] = useMutation(LOGIN);
  const { loggingIn } = useSelector(state => state.game);
  const [errors, setErrors] = useState({});

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

  const handleGoBack = e => {
    dispatch(renderLoginModal(false));
  };

  const handleSubmit = e => {
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

    if (!error) dispatch(renderLoginModal(false));
  };

  useEffect(
    () => {
      if (data) refetch();
    },
    [data]
  );

  if (!loggingIn) return null;

  return (
    <ModalContainer>
      <Form>
        <h1>Login</h1>
        <Input
          type="text"
          name="username"
          value={user.username}
          placeholder="user_name"
          onChange={handleChange}
          disabled={loading}
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
          disabled={loading}
        />
        <span>
          {errors.password}
        </span>
        {!loading &&
          <ButtonContainer>
            <Button type="button" onClick={handleGoBack}>
              Go Back
            </Button>
            <Button type="submit" onClick={handleSubmit}>
              Login
            </Button>
          </ButtonContainer>}
        <PropagateLoader
          className="spinner"
          sizeUnit={'vh'}
          size={10}
          color={'#d2d2d2'}
          loading={loading}
        />
      </Form>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  left: calc(100% / 3);
  max-width: calc(100% / 3);

  height: 100%;

  background: #212121;

  form {
    h1 {
      font-size: 3.0vh;
      text-align: center;
      color: #fafafa;
    }
  }
`;

export default LoginModal;
