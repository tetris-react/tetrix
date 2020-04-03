import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { ACTIVE_SESSION } from '../../../queries';
import { NavContainer, ProfileContainer } from '../../styles';
import ProfileMenu from './ProfileMenu';
import Timer from './Timer';
import ViewSelector from './ViewSelector';

const Navigation = () => {
  const { data: session } = useQuery(ACTIVE_SESSION);

  if (!session) return <div />;

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
