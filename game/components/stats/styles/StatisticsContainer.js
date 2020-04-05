import styled from "styled-components";
import { Column } from "../../../styles";

export const StatisticsContainer = styled(Column)`
  padding: 8vh 4vh;
  font-size: 3vh;
  color: #fafafa;
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;

    div {
      height: 7vh;
    }

    span {
      margin-bottom: -0.5vh;
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
      width: 127%;
      height: 14.5vh;
      min-height: 14.5vh;
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
        margin-bottom: 1.2vh;
        height: 7vh;
      }

      hr {
        width: 100%;
        margin-bottom: 3vh;
      }
    }
  }
`;
