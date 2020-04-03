import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 25vh;
  height: fit-content;

  span {
    color: crimson;
  }

  /* border: 1px solid #fafafa; */
`;

export const Input = styled.input`
  color: #fafafa;
  font-size: 2vh;
  border: none;
  outline: none;
  border-bottom: 1px solid #fafafa;

  margin: 1vh 0;

  background: transparent;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
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
