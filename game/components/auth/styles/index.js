import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40vh;
  height: fit-content;

  margin-bottom: 1vh;

  span {
    text-align: center;
    color: crimson;
    font-size: 1.3vh;
  }

  span:last-of-type {
    color: #fafafa;
    margin-bottom: 1vh;
  }

  /* border: 1px solid #fafafa; */
`;

export const Input = styled.input`
  color: #fafafa;
  font-size: 2vh;
  border: none;
  outline: none;
  border-bottom: 1px solid #fafafa;
  width: 100%;
  margin: 1vh 0;

  background: transparent;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin-top: 2vh;
`;

export const Button = styled.button`
  background: transparent;
  border: 1px solid #fafafa;
  outline: none;
  color: #fafafa;
  font-size: 2vh;
  cursor: pointer;
  &:hover {
    color: #cccccc;
    border: 1px solid #cccccc;
  }
`;
