import React, { useState } from "react";
import { Input, Button, Form } from "../../auth/styles";
import styled from "styled-components";
import { useMutation } from "@apollo/react-hooks";
import { FORGOT_PASSWORD_EMAIL } from "./query";
import { useForm } from "react-hook-form";
import { PropagateLoader } from "react-spinners";

export default function SendForgotPassword({ handleGoBack }) {
  const [message, setMessage] = useState(null);
  const { handleSubmit, register, setValue } = useForm();
  const [forgotPassword, { loading }] = useMutation(FORGOT_PASSWORD_EMAIL);
  const onSubmit = async (data) => {
    const res = await forgotPassword({
      variables: {
        email: data.email,
      },
    });
    console.log(res);
    setMessage(res?.data?.forgotPassword);
    return setValue("email", "");
  };
  return (
    <SendForgotPasswordWrapper>
      <h2>What's your email?</h2>
      {console.log(message)}
      <p>{message ? message : null}</p>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          name="email"
          placeholder="Please enter your accounts email"
          ref={register}
        />
        <div className="flex">
          <Button onClick={handleGoBack}>Go Back</Button>
          <Button type="submit">Send Email</Button>
        </div>
        {loading ? (
          <PropagateLoader
            className="spinner"
            sizeUnit={"vh"}
            size={10}
            color={"#d2d2d2"}
            loading={loading}
          />
        ) : null}
      </Form>
    </SendForgotPasswordWrapper>
  );
}

const SendForgotPasswordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  h2 {
    font-size: 2.2vh;
  }
  p {
    font-size: 1.8vh;
    text-align: center;
  }
  .flex {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
`;
