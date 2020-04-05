import moment from 'moment-timezone';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PropagateLoader } from 'react-spinners';
import styled from 'styled-components';
import { useMutation } from '@apollo/react-hooks';
import { indigo } from '@material-ui/core/colors';
import { REGISTER } from '../../../queries';
import { renderRegisterModal } from '../../../store';
import Register from '../auth/Register';
import { Button, ButtonContainer, Form, Input } from './styles';

const tzName = moment.tz.guess();
const tzAbbr = moment.tz(tzName).format('Z');

const initialFormState = {
  username: '',
  password: '',
  email: ''
}

const RegisterModal = (props) => {
  const { refetch } = props;
  const dispatch = useDispatch();
  const { registering } = useSelector(state => state.game);
  const [errors, setErrors] = useState({});
  const [register, { data, loading, error }] = useMutation(REGISTER);

  const [user, setUser] = useState(initialFormState);

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleGoBack = e => {
    dispatch(renderRegisterModal(false));
    setUser(initialFormState)
  };

  const handleRegister = async e => {
    e.preventDefault();
    // console.log('user', user);
    // console.log('email', user.email === '' ? undefined : user.email);
    let newErrors = {};
    try {
      await register({
        variables: {
          data: {
            username: user.username,
            password: user.password,
            email: user.email === '' ? undefined : user.email,
            tzName: tzName,
            tzAbv: tzAbbr
          }
        }
      });
    } catch (err) {
      // console.log("err", err);
      // console.log("err?.graphQLErrors", err?.graphQLErrors);
      err.graphQLErrors[0].extensions.exception.validationErrors.forEach(
        validationError => {
          Object.values(validationError.constraints).forEach(message => {
            newErrors[validationError.property] = message;
          });
        }
      );
      // console.log(err?.graphQLErrors);
    } finally {
      setErrors(newErrors);
    }

  };

  useEffect(
    () => {
      if (data) refetch();
    },
    [data]
  );

  useEffect(() => {
    if (!Object.keys(errors).length) {
      dispatch(renderRegisterModal(false));
      setUser(initialFormState)
    }

  }, [errors, dispatch])

  // console.log("errors", errors);

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
          {errors?.username}
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
          {errors?.password}
        </span>
        <Input
          type="email"
          name="email"
          value={user.email}
          placeholder="email (optional)"
          onChange={handleChange}
          disabled={loading}
        />
        <span>
          {errors?.email}
        </span>
        {!loading &&
          <>
            <span>
              Only used for password recovery, and can be updated in user settings.
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

    span:last-of-type {
      color: #fafafa;
      margin-bottom: 1vh;
    }
  }
`;

export default RegisterModal;
