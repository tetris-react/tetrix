import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import Play from "../../game";
import Login from "../../game/components/auth/Login";
import Register from "../../game/components/auth/Register";
import {
  Banner,
  Button,
  ButtonContainer,
  Content,
  LandingContainer,
  Link,
} from "../../game/styles";
import { ACTIVE_SESSION } from "../../queries";

const Index = () => {
  const { data: session, refetch } = useQuery(ACTIVE_SESSION);

  const [viewForm, setViewForm] = useState(false);
  const [formType, setFormType] = useState("register");
  const [guestPlay, setGuestPlay] = useState(false);
  //
  const startGuestPlay = (e: any) => {
    e.preventDefault();
    setGuestPlay(true);
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    setFormType(e.target.value);
    setViewForm((viewForm) => !viewForm);
  };

  if (session?.currentUser || guestPlay) return <Play session={session} refetch={refetch} />;

  return (
    <LandingContainer>
      <Banner>
        <h1>Tetrix</h1>
      </Banner>
      <Content>
        {viewForm ? (
          formType === "register" ? (
            <Register setViewForm={setViewForm} refetch={refetch} />
          ) : (
            <Login setViewForm={setViewForm} refetch={refetch} />
          )
        ) : null}
        {!viewForm && (
          <>
            <Link onClick={startGuestPlay}>Play Now</Link>
            <ButtonContainer>
              <Button value="login" onClick={handleClick}>
                Login
              </Button>
              <Button value="register" onClick={handleClick}>
                Register
              </Button>
            </ButtonContainer>
          </>
        )}
      </Content>
    </LandingContainer>
  );
};

export default Index;
