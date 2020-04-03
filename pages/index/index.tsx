import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import Play from '../../game';
import { Navigation } from '../../game/components';
import Login from '../../game/components/auth/Login';
import Register from '../../game/components/auth/Register';
import {
  Banner,
  Button,
  ButtonContainer,
  Content,
  LandingContainer,
  Link
} from '../../game/styles';
import { ACTIVE_SESSION } from '../../queries';

const Index = () => {
  const {data: session, refetch} = useQuery(ACTIVE_SESSION);
  const router = useRouter();

  const [viewForm, setViewForm] = useState(false);
  const [formType, setFormType] = useState('register');

  const startGame = (e: any) => {
    e.preventDefault();
    router.push('/play');
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    setFormType(e.target.value);
    setViewForm(viewForm => !viewForm);
  };

  if(session?.currentUser)
    return <Play />

  return (
    <LandingContainer>
      <Navigation />
      <Banner>
        <h1>Tetrix</h1>
      </Banner>
      <Content>
        {viewForm ?
          formType === "register"
            ? <Register setViewForm={setViewForm} refetch={refetch}/>
            : <Login setViewForm={setViewForm} refetch={refetch}/>
          : null}
        {!viewForm &&
          <>
            <Link onClick={startGame}>Play Now</Link>
            <ButtonContainer>
              <Button value="login" onClick={handleClick}>
                Login
              </Button>
              <Button value="register" onClick={handleClick}>
                Register
              </Button>
            </ButtonContainer>
          </>
        }
      </Content>
    </LandingContainer>
  );
};

export default Index;
