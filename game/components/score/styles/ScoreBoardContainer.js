import styled from 'styled-components';
import { Column } from '../../../styles';

export const ScoreBoardContainer = styled(Column)`
  align-items: flex-start;
  padding: 6.3vh 4vh 2vh 4vh;
  font-size: 3.0vh;
  color: #CCCCCC;

  section {
    display:flex;
    flex-direction: column;

    width: 95%;

    div {
      display:flex;
      justify-content: space-between;
      margin: 1vh 0px;
    }

    hr {
      width: 105%;
      margin-left: -2.8vh;
    }
  }

  section:first-of-type {
    width: 100%;
    padding-top: 10px;

    color: #FAFAFA;
    
    div {
      margin: 1vh 0;
    }

    hr {
      width: 100%;
      margin: 0px;
    }
  }

  section:last-of-type {
    font-size: 2.0vh;
    width: 95%;
    margin-left: 5%;
  }
`;
