import React from 'react';
import styled from 'styled-components';

const Avatar = () => {
  return (
    <AvatarContainer>
      <AvatarImg>
        <img src="" alt="" />
      </AvatarImg>
      <Username>user_name</Username>
    </AvatarContainer>
  );
};

const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40%;
`;

const AvatarImg = styled.div`
  width: 50px;
  height: 50px;

  border-radius: 50px;

  background-color: #000000;
`;

const Username = styled.div`
  width: fit-content;
  color: #fafafa;
  font-size: 2.0rem;
`;

export default Avatar;
