import moment from 'moment-timezone';
import React, { useEffect, useState } from 'react';
import {PropagateLoader} from 'react-spinners';
import { useMutation } from '@apollo/react-hooks';
import { REGISTER } from '../../../queries';
import { Button, ButtonContainer, Form, Input } from './styles';

const tzName = moment.tz.guess();
const tzAbbr = moment.tz(tzName).format('Z');

const Register = props => {
  const { refetch } = props;
  const [errors, setErrors] = useState({});
  const [register, {data, loading, error}] = useMutation(REGISTER);

  const [user, setUser] = useState({
    username: '',
    password: '',
    email: ''
  });

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
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

  useEffect(() => {
    if (data)
      refetch();
  }, [data])

  return (
    <Form>
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
            <Button type="button" onClick={() => props.setViewForm(false)}>
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
  );
};

export default Register;
