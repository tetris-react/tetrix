import styled from 'styled-components';
import AppContainer from './AppContainer';

export const LandingContainer = styled(AppContainer)`
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  color: #FAFAFA;
`;

export const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  width: 100%;
  height: 50vh;

  /* border: 1px solid white; */

  h1 {
    font-size: 14vh;
    margin-bottom: 10px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  width: 100%;
  height: 50vh;

  /* border: 1px solid white; */
`;

export const Link = styled.a`
  padding: 1vh 2vh 0 2vh;
  width: fit-content;
  height: 6.5vh;
  background: transparent;
  border: 1px solid #fafafa;

  color: #fafafa;
  font-size: 3.8vh;

  cursor: pointer;
  outline: none;

  &:hover {
    color: #cccccc;
    border-color: #cccccc;
  }
`;
