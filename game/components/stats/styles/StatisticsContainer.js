import styled from 'styled-components';
import { Column } from '../../../styles';

export const StatisticsContainer = styled(Column)`

  padding: 8vh 4vh;
  font-size: 3.0vh;
  color: #FAFAFA;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;

    span {
      margin-bottom: -.5vh;
    }

    hr {
      width: 100%;
    }
  }
  

  div:last-of-type {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;

    div:last-of-type{
      align-items: flex-end;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 40%;

      div {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-bottom: -.5vh;
      }

      hr {
        width: 100%;
      }
  }
  }

`;
