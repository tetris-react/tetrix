import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { restartGame, resumeGame, startGame } from "../../../store";

const ButtonDialog = (props) => {
  const { session } = props;
  const dispatch = useDispatch();
  const { gameStarted, gameOver, gamePaused } = useSelector((state) => state.game);
  const [open, setOpen] = useState(true);
  const [text, setText] = useState("");

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

  useEffect(() => {
    if (gameStarted === false && gameOver === false) {
      setText("Begin");
      setOpen(true);
    } else if (!gamePaused && gameStarted) {
      setOpen(false);
    } else if (gameOver) {
      setText("Play Again");
      setOpen(true);
    } else if (gamePaused) {
      setText("Resume");
      setOpen(true);
    }
  }, [gameStarted, gameOver, gamePaused]);

  return (
    <Container isOpen={open}>
      <Button onClick={handleClick} isOpen={open}>
        {text}
      </Button>
    </Container>
  );
};

// Styles did some weird things in tablet mode, so I made some changes

const Button = styled.button`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  // I commented these out because it's inheriting is position from it's absolutely positioned parent
  // position: absolute;
  // margin-left: -21.5%;
  // margin-top: -30px;
  // left: 50%;
  // top: 50%;

  width: 25vh;
  height: 6.5vh;
  background: transparent;
  border: 1px solid #fafafa;

  color: #fafafa;
  font-size: 3.8vh;

  cursor: pointer;
  outline: none;

  &:hover {
    color: #cccccc;
    border-color: #cccccc;
  }
`;

const Container = styled.div`
  // changed "box" to "flex" to align button in center
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  left: calc(100% / 3);
  max-width: calc(100% / 3);

  height: 100%;

  background: rgb(21, 21, 21, 0.8);
`;

export default ButtonDialog;
