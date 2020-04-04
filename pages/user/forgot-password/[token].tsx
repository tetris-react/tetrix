import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

const FORGOT_PASSWORD = gql`
  mutation ChangeForgottenPassword($data: ChangePasswordInput!) {
    changeForgottenPassword(data: $data) {
      message
      status
    }
  }
`;

interface ChangePasswordInput {
  password: string;
  confirmPassword: string;
}

export default () => {
  const router = useRouter();
  const [token, setToken] = useState<string | string[]>("");
  const [passwordValidation, setPasswordValidation] = useState<boolean>(true);
  const [passwordLength, setPasswordLength] = useState<boolean>(true);
  const [success, setSuccess] = useState<boolean | null>(null);
  // @ts-ignore
  const [message, setMessage] = useState<string>("");

  const { register, handleSubmit, errors } = useForm();

  const [changeForgottenPassword, { error: changeForgottenPasswordError }] = useMutation(
    FORGOT_PASSWORD
  );

  useEffect(() => {
    const { token } = router.query;
    setToken(token);
  }, []);

  console.log("STATE MESSAGE", message);

  const onSubmit = async (data: any) => {
    const { password, confirmPassword }: ChangePasswordInput = data;
    if (password === confirmPassword && password.length >= 6) {
      console.log("YES!!! 🤓");
      const res = await changeForgottenPassword({
        variables: {
          data: {
            token,
            password,
          },
        },
      });
      console.log("RES", res);
      setMessage(res.data.changeForgottenPassword.message);

      return setSuccess(res.data.changeForgottenPassword.status);
    } else if (password.length < 6) {
      console.log("6 or more characters please! 🛑");
      return setPasswordLength(false);
    } else {
      console.log("Thou shall not pass! 🛑");
      return setPasswordValidation(false);
    }
  };

  if (success)
    return (
      <ForgotPasswordWrapper>
        <div className="card">
          <h1>Congrats!</h1>
          <p>{message}</p>
          <Link href="/">
            <a>Go home</a>
          </Link>
        </div>
      </ForgotPasswordWrapper>
    );

  if (success === false)
    return (
      <ForgotPasswordWrapper>
        <div className="card">
          <h1>Something went wrong!</h1>
          <p>{message}</p>
          <Link href="/">
            <a>Go home</a>
          </Link>
        </div>
      </ForgotPasswordWrapper>
    );

  return (
    <ForgotPasswordWrapper>
      <div className="card">
        <h1>Forgot Password</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="password"
            name="password"
            placeholder="Password"
            ref={register({ required: true })}
          />
          {errors.password
            ? "Please enter a new password."
            : !passwordLength
            ? "Password must be 6 or more characters"
            : null}
          <div className="spacer" />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            ref={register({ required: true })}
          />
          {!passwordValidation
            ? "Passwords don't match"
            : errors.confirmPassword
            ? "You must confirm your password."
            : null}
          {changeForgottenPasswordError ? changeForgottenPasswordError : null}
          <div className="spacer" />
          <button type="submit">Submit New Password</button>
        </form>
      </div>
    </ForgotPasswordWrapper>
  );
};

const ForgotPasswordWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  form {
    display: flex;
    flex-direction: column;
  }
  .card {
    background: white;
    padding: 2rem 4rem;
    border-radius: 0.3rem;
  }
  .spacer {
    height: 1rem;
  }
`;
