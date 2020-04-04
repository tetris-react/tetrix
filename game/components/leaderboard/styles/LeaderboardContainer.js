import styled from 'styled-components';
import { Column } from '../../../styles';

export const LeaderboardContainer = styled(Column)`

  padding: 8vh 4vh;
  font-size: 3.0vh;
  color: #FAFAFA;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    
    div {
      height: 7vh;
    }

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

    div.next-tetrad {
      margin-left: -5.5vh;
      width: 50%;
      height: 14.5vh;
      min-height: 14.5vh;
    }

    span {
      margin-bottom: 3vh;
    }
    
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-end;
      width: 50%;
      height: 16vh;

      hr {
        width: 100%;
        margin-bottom: 3vh;
      }
    }
  }

  table {
    border-collapse: collapse;
    text-align: center;
    font-size: 1.5vh;

    tr:first-of-type {
      border-bottom: 1px solid #fafafa;
    }

    tr:nth-child(even) {
      background-color: #212121;

    }

    td {
      padding-top: 1vh;
    }


  }

`;
