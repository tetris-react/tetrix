import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 320px;
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

export const ForgetfulButton = styled.button`
  color: white;
  background: none;
  border: none;
  margin-top: 1rem;
  cursor: pointer;
  &:hover {
    color: #cccccc;
    border-color: #cccccc;
  }
`;

export const ForgetButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 0.8rem;
`;
