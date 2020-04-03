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
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 50vh;

  /* border: 1px solid #fafafa; */
`;

export const Link = styled.a`
  padding-top: 1vh;
  width: 25vh;
  height: 6.5vh;
  background: transparent;
  border: 1px solid #fafafa;
  text-align: center;

  color: #fafafa;
  font-size: 3.8vh;

  cursor: pointer;
  outline: none;

  &:hover {
    color: #cccccc;
    border-color: #cccccc;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20vh;
  height: 6vh;
`;

export const Button = styled.button`
  background: transparent;
  border: none;
  outline: none;

  color: #fafafa;
  font-size: 2vh;

  cursor: pointer;

  &:hover {
    color: #cccccc;
  }
`;
