import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { restartGame, resumeGame, startGame } from '../../../store';

const ButtonDialog = props => {
  const dispatch = useDispatch();
  const { gameStarted, gameOver, gamePaused } = useSelector(
    state => state.game
  );
  const [open, setOpen] = useState(true);
  const [text, setText] = useState('');

  const handleClick = () => {
    if (gameStarted === false && gameOver === false) {
      dispatch(startGame());
      setOpen(false);
    } else if (gameOver) {
      dispatch(restartGame());
      setOpen(false);
    } else if (gamePaused) {
      dispatch(resumeGame());
      setOpen(false);
    }
  };

  useEffect(
    () => {
      if (gameStarted === false && gameOver === false) {
        setText("Let's Play");
        setOpen(true);
      } else if (!gamePaused && gameStarted) {
        setOpen(false);
      } else if (gameOver) {
        setText('Play Again');
        setOpen(true);
      } else if (gamePaused) {
        setText('Resume');
        setOpen(true);
      }
    },
    [gameStarted, gameOver, gamePaused]
  );

  return (
    <Container isOpen={open}>
      <Button onClick={handleClick} isOpen={open}>
        {text}
      </Button>
    </Container>
  );
};

const Button = styled.button`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  margin-left: -21.5%;
  margin-top: -30px;
  left: 50%;
  top: 50%;

  width: 43%;
  height: 60px;
  background: transparent;
  border: 1px solid #fafafa;

  color: #fafafa;
  font-size: 38px;

  cursor: pointer;
  outline: none;

  &:hover {
    color: #cccccc;
    border-color: #cccccc;
  }
`;

const Container = styled.div`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  width: 100%;
  left: calc(100% / 3);
  max-width: calc(100% / 3);

  height: 100%;

  background: rgb(21, 21, 21, .80);
`;

export default ButtonDialog;
