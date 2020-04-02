import styled from 'styled-components';

export const NavContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: fit-content;
  min-height: 5vh;

  padding: 2vh 5vh 0 4vh;

  color: #fafafa;

  /* border: 1px solid #cccccc; */
`;

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50vh;
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
`;

export const AvatarImg = styled.div`
  width: 3vh;
  height: 3vh;

  margin-right: 2vh;
  border-radius: 50%;

  background-color: #000000;
`;

export const TimerContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 3vh;

  svg {
    font-size: 3.5vh;
    margin-left: 2.5vh;
  }
`;

export const SelectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 24vh;
`;

export const Select = styled.div`
  display: flex;
  justify-content: space-between;

  svg {
    margin-left: 1vh;
    margin-top: .3vh;
  }

  padding-bottom: .5vh;

  cursor: pointer;

  &:hover {
    color: #cccccc;
  }
`;

export const Selection = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 2vh;
  width: 18vh;
  border-bottom: 1px solid #fafafa;
`;

export const Options = styled.ul`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  width: 18vh;
  top: 2vh;
  font-size: 2vh;
  list-style-type: none;
  padding-top: 2vh;
  padding-left: 0;
  padding-bottom: 0;
`;

export const Option = styled.li`
  color: #cccccc;
  /* border-bottom: 1px solid #cccccc; */
  margin-bottom: 1vh;

  &:hover {
    color: #fafafa;
    border-bottom: 1px solid #fafafa;
  }

  cursor: pointer;
`;
