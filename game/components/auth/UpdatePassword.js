import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PropagateLoader } from 'react-spinners';
import styled from 'styled-components';
import { useMutation } from '@apollo/react-hooks';
import { REGISTER } from '../../../queries';
import { renderRegisterModal } from '../../../store';
import { Button, ButtonContainer, Form, Input } from './styles';

const UpdatePassword = (props) => {
  const { refetch } = props;
  const dispatch = useDispatch();
  const { registering } = useSelector(state => state.game);
  const [errors, setErrors] = useState({});
  const [register, { data, loading, error }] = useMutation(REGISTER);

  const [user, setUser] = useState({
    password: '',
    confirm: '',
    email: ''
  });

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleGoBack = e => {
    dispatch(renderRegisterModal(false));
  };

  const handleRegister = async e => {
    e.preventDefault();
    let newErrors = { ...errors };
    try {
      await register({
        variables: {
          data: {
            username: user.username,
            password: user.password,
            email: user.email,
            tzName: tzName,
            tzAbv: tzAbbr
          }
        }
      });
    } catch (err) {
      err.graphQLErrors[0].extensions.exception.validationErrors.forEach(
        validationError => {
          Object.values(validationError.constraints).forEach(message => {
            newErrors[validationError.property] = message;
          });
        }
      );
      console.log(err?.graphQLErrors);
    }

    setErrors(newErrors);



  };

  useEffect(
    () => {
      if (data) refetch();
    },
    [data]
  );

  useEffect(() => {
    if (!error)
      dispatch(renderRegisterModal(false));
  }, [error])

  if (!registering) return null;

  return (
    <ModalContainer>
      <Form>
        <h1>Register</h1>
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
        <Input
          type="email"
          name="email"
          value={user.email}
          placeholder="email (optional)"
          onChange={handleChange}
          disabled={loading}
        />
        {!loading &&
          <>
            <span>
              Only used for password reset, and can be updated in user settings.
            </span>
            <ButtonContainer>
              <Button type="button" onClick={handleGoBack}>
                Go Back
              </Button>
              <Button type="submit" onClick={handleRegister}>
                Register
              </Button>
            </ButtonContainer>
          </>
        }
        <PropagateLoader className="spinner"
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
  display:flex;
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

    div {
      font-size: 1.8vh;
      text-align: center;
      color: #fafafa;

      p:last-of-type {
        font-size:1.2vh;
      }
    }
  }
`;

export default UpdatePassword;