import React from 'react';
import { NavContainer, ProfileContainer } from '../../styles';
import ProfileMenu from './ProfileMenu';
import Timer from './Timer';
import ViewSelector from './ViewSelector';

const Navigation = () => {
  return (
    <NavContainer>
      <ViewSelector />
      <ProfileContainer>
        <Timer />
        <ProfileMenu />
      </ProfileContainer>
    </NavContainer>
  );
};

export default Navigation;
