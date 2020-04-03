import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { renderRegisterModal } from '../../../store';

const RegisterPrompt = props => {
  const { session } = props;
  const dispatch = useDispatch();
  const { gameOver, numGameOver } = useSelector(state => state.game);
  const [promptedToReg, setPromptedToReg] = useState(false);

  const displayRegisterForm = () => {
    dispatch(renderRegisterModal(true));
    setPromptedToReg(true);
  };

  const closeModal = () => {
    setPromptedToReg(true);
  };

  console.log('numGameOver', numGameOver);

  if (session || !gameOver || numGameOver < 2 || promptedToReg) return null;

  return (
    <ModalContainer>
      <Modal>
        <p>Register now to keep track of your progress!</p>
        <p>Or keep playing! We won't keep bothering you... :)</p>
        <ButtonContainer>
          <Button onClick={displayRegisterForm}>Register!</Button>
          <Button onClick={closeModal}>Leave me alone. I'm bizzy...</Button>
        </ButtonContainer>
      </Modal>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  left: calc(100% / 3);
  max-width: calc(100% / 3);

  height: 100%;

  background: #212121;
  text-align: center;
  p {
    font-size: 3.0vh;
    color: #fafafa;
    margin-bottom: .5vh;
  }

  p:last-of-type {
    font-size: 1.8vh;
    color: #fafafa;
    margin-bottom: .5vh;
  }
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 45vh;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40vh;

  margin-top: 5vh;
`;

const Button = styled.button`
  background: transparent;
  border: none;
  border: 1px solid #fafafa;

  padding: 1vh;

  color: #fafafa;
  font-size: 2.0vh;

  cursor: pointer;

  &:hover {
    color: #cccccc;
    border: 1px solid #cccccc;
  }
`;

export default RegisterPrompt;
