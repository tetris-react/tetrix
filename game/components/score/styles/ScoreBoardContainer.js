import styled from 'styled-components';
import { Column } from '../../../styles';

export const ScoreBoardContainer = styled(Column)`
  align-items: flex-end;
  padding: 20px 40px;
  
  font-size: 3.0vh;
  color: #CCCCCC;

  > div {
    margin-top: 10px;
    display: flex;
    align-items: center;
    width: 100%;
  }

  section {
    display:flex;
    flex-direction: column;

    width: 95%;

    div {
      display:flex;
      justify-content: space-between;
      margin: 10px 0px;
    }

    hr {
      width: 105%;
      margin-left: -28px;
    }
  }

  section:first-of-type {
    width: 100%;
    padding-top: 10px;

    color: #FAFAFA;
    
    div {
      margin: 10px 0;
    }

    hr {
      width: 100%;
      margin: 0px;
    }
  }

  section:last-of-type {
    font-size: 2.0vh;
    width: 95%;
  }
`;
