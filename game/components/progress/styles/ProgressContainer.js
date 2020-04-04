import styled from 'styled-components';
import { Column } from '../../../styles';

export const ProgressContainer = styled(Column)`

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

`;
