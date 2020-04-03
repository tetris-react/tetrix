import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useMutation, useQuery } from '@apollo/react-hooks';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { ACTIVE_SESSION, LOG_OUT } from '../../../queries';

const ProfileMenu = () => {
  const { data: session, refetch } = useQuery(ACTIVE_SESSION);
  const [logout] = useMutation(LOG_OUT);
  const user = session?.currentUser
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const toggleMenu = e => {
    setOpen(open => !open);
  };

  const handleSelection = e => {
    setOpen(false);
  };

  const handleLogout = e => {
    logout()
    setOpen(false);
  };

  console.log('user', user);

  return (
    <MenuContainer>
      <Select onClick={toggleMenu}>
        {/* <AvatarImg /> */}
        <Username>
          <ArrowDropDownIcon />
          <span>
            {user.username}
          </span>
        </Username>
      </Select>
      <Options isOpen={open}>
        <Option onClick={handleSelection}>Settings</Option>
        <Option onClick={handleLogout}>Logout</Option>
      </Options>
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  width: 20vh;
`;

const Select = styled.div`
  display: flex;
  font-size: 2vh;
  padding-bottom: .5vh;

  cursor: pointer;
`;

export const AvatarImg = styled.div`
  width: 3vh;
  height: 3vh;

  margin-right: 1vh;
  border-radius: 50%;

  background-color: #000000;
`;

const Username = styled.div`
  display:flex;
  align-items: center;
  span {
    padding: .2vh;
  }

  svg {
    margin-right: 1vh;
    /* margin-top: -.5vh; */
    width: 3vh;
    height: 3vh;
  }

  &:hover {
    color: #cccccc;
    span {
      margin-bottom: -1px;
      border-bottom: 1px solid #cccccc;
    }
  }
`;

const Options = styled.div`
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  width: 20vh;
  top: 6vh;
  font-size: 2vh;
  list-style-type: none;
`;

export const Option = styled.li`
  color: #cccccc;
  margin-bottom: 1vh;
  text-align: right;
  width: 12.2vh;

  &:hover {
    color: #fafafa;
  }

  cursor: pointer;
`;

export default ProfileMenu;
