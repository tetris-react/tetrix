import styled from 'styled-components';
import { Column } from '../../../styles';

export const StatisticsContainer = styled(Column)`
  align-items: flex-start;
  padding: 40px;
  font-size: 3.0rem;
  color: #FAFAFA;

  section {
    width: 100%;

    div {
      display:flex;
      justify-content: flex-end;
    }

    hr {
      width: 100%;
    }
  }

  section:last-of-type {
    width: 50%;

    div {
      display:flex;
      justify-content: flex-start;
    }
  }

  > div {
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin-bottom: 10px;
  }
`;
