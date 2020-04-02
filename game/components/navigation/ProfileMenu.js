import React from 'react';
import styled from 'styled-components';

const ProfileMenu = () => {
  return (
    <AvatarContainer>
      <AvatarImg>
        <img src="" alt="" />
      </AvatarImg>
      <Username>angry_typer</Username>
    </AvatarContainer>
  );
};

const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
`;

const AvatarImg = styled.div`
  width: 3vh;
  height: 3vh;

  margin-right: 2vh;
  border-radius: 50%;

  background-color: #000000;
`;

const Username = styled.div`
  width: fit-content;
  color: #fafafa;
  font-size: 2vh;
`;

export default ProfileMenu;
