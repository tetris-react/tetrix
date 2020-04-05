import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PropagateLoader } from "react-spinners";
import styled from "styled-components";
import { useMutation } from "@apollo/react-hooks";
import { LOGIN } from "../../../queries";
import { renderLoginModal } from "../../../store";
import SendForgotPasswordEmail from "./SendForgotPasswordEmail";
import { useHandleForgotPassword } from "../../hooks";
import {
  Button,
  ButtonContainer,
  Form,
  Input,
  ForgetfulButton,
  ForgetButtonContainer,
} from "./styles";

const initialFormState = {
  username: "",
  password: "",
};

const LoginModal = (props) => {
  const { refetch } = props;
  const dispatch = useDispatch();
  const [login, { data, loading, error }] = useMutation(LOGIN);
  const { loggingIn } = useSelector((state) => state.game);
  const [errors, setErrors] = useState({});
  const [loginMessage, setLoginMessage] = useState("");
  const [loginSuccess, setLoginSuccess] = useState("");

  const [toggle, handleForgotPassword] = useHandleForgotPassword();

  const [user, setUser] = useState(initialFormState);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleGoBack = (e) => {
    dispatch(renderLoginModal(false));
    setUser(initialFormState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = {};

    try {
      const res = await login({
        variables: {
          data: {
            username: user.username,
            password: user.password,
          },
        },
      });
      setLoginSuccess(res?.data?.login?.status);
      return setLoginMessage(res?.data?.login?.message);
    } catch (err) {
      err.graphQLErrors[0].extensions.exception.validationErrors.forEach((validationError) => {
        Object.values(validationError.constraints).forEach((message) => {
          newErrors[validationError.property] = message;
        });
      });
    } finally {
      setErrors(newErrors);
      setUser(initialFormState);
    }
  };

  useEffect(() => {
    if (data) refetch();
  }, [data]);

  useEffect(() => {
    if (loginSuccess) {
      dispatch(renderLoginModal(false));
      setUser(initialFormState);
    }
  }, [loginSuccess]);

  console.log("errors", errors);

  if (!loggingIn) return null;

  return (
    <ModalContainer>
      {toggle ? (
        <SendForgotPasswordEmail handleGoBack={handleGoBack} />
      ) : (
        <Form>
          <h1>Login</h1>
          <span>{!loginSuccess ? loginMessage : ""}</span>
          <Input
            type="text"
            name="username"
            value={user.username}
            placeholder="user_name"
            onChange={handleChange}
            disabled={loading}
          />
          <span>{errors.username}</span>
          <Input
            type="password"
            name="password"
            value={user.password}
            placeholder="password"
            onChange={handleChange}
            disabled={loading}
          />
          <span>{errors.password}</span>
          {!loading && (
            <ButtonContainer>
              <Button type="button" onClick={handleGoBack}>
                Go Back
              </Button>
              <Button type="submit" onClick={handleSubmit}>
                Login
              </Button>
            </ButtonContainer>
          )}
          <PropagateLoader
            className="spinner"
            sizeUnit={"vh"}
            size={10}
            color={"#d2d2d2"}
            loading={loading}
          />
          <ForgetButtonContainer>
            <ForgetfulButton onClick={handleForgotPassword}>Forgot your password?</ForgetfulButton>
          </ForgetButtonContainer>
        </Form>
      )}
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
  color: white;

  height: 100%;

  background: #212121;

  form {
    h1 {
      font-size: 3vh;
      text-align: center;
      color: #fafafa;
    }
  }
`;

export default LoginModal;
