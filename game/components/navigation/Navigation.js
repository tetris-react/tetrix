import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { ACTIVE_SESSION } from '../../../queries';
import { renderLoginModal, renderRegisterModal } from '../../../store';
import { NavContainer, ProfileContainer } from '../../styles';
import ProfileMenu from './ProfileMenu';
import Timer from './Timer';
import ViewSelector from './ViewSelector';

const Navigation = props => {
  const { refetch, session, setToggleView } = props;
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(renderLoginModal(true));
  };

  const handleRegister = () => {
    dispatch(renderRegisterModal(true));
  };

  return (
    <NavContainer>
      <ViewSelector session={session} setToggleView={setToggleView} />
      <ProfileContainer>
        <Timer />
        {session
          ? <ProfileMenu session={session} refetch={refetch} />
          : <ButtonContainer>
              <Button onClick={handleLogin}>Login</Button>
              <Button onClick={handleRegister}>Register</Button>
            </ButtonContainer>}
      </ProfileContainer>
    </NavContainer>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20vh;
`;

const Button = styled.button`
  background: transparent;
  border: none;
  outline: none;

  padding: none;
  margin: none;

  color: #fafafa;
  font-size: 2vh;

  cursor: pointer;

  &:hover {
    color: #cccccc;
    border-bottom: 1px solid #cccccc;
  }
`;

export default Navigation;
