import styled from "styled-components";
import { Column } from "../../../styles";

export const LeaderboardContainer = styled(Column)`
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
      margin-right: 5.5vh;
      // width: 50%;
      // height: 14.5vh;
      // min-height: 14.5vh;
      svg {
        width: 13vw;
        height: auto;
      }
    }

    // span {
    //   margin-bottom: 3vh;
    // }

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
`;

export const Table = styled.table`
  border-collapse: collapse;
  text-align: left;
  font-size: 1.8vh;

  thead {
    tr {
      border-bottom: 1px solid #fafafa;
    }
  }

  tbody {
    tr:nth-child(even) {
      background-color: #212121;
    }

    tr > td {
      padding: 0.5vh 0;
    }
  }
`;
