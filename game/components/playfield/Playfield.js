import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  calculateScore,
  checkIfBlocked,
  checkSpawnCollision,
  collapseEmptyRows,
  hardDropTetrad,
  moveTetrad,
  spawnTetrad
} from '../../../store';
import { DOWN, HARD_DROP, NUM_ROWS } from '../../constants';
import { useInterval, useListenKeyPress } from '../../hooks';
import Row from './Row';
import PlayFieldContainer from './styles/PlayFieldContainer';

const Playfield = () => {
  const dispatch = useDispatch();
  const { gameOver } = useSelector(state => state.game);
  const { matrix, tetrad, tetradLocked } = useSelector(
    state => state.playfield
  );
  const { frameRate } = useSelector(state => state.game);

  useEffect(
    () => {
      if (tetradLocked && !gameOver) {
        dispatch(calculateScore());
        dispatch(collapseEmptyRows());
        dispatch(spawnTetrad(tetrad.type));
      }
    },
    [tetradLocked, gameOver, tetrad, dispatch]
  );

  useInterval(() => {
    dispatch(checkSpawnCollision());
    dispatch(checkIfBlocked());
    dispatch(moveTetrad(DOWN));
  }, frameRate);

  useListenKeyPress(direction => {
    if (direction === HARD_DROP) {
      dispatch(hardDropTetrad());
      dispatch(checkIfBlocked());
    } else {
      dispatch(moveTetrad(direction));
    }
  });

  return (
    <PlayFieldContainer>
      {matrix.matrix
        .slice(2, NUM_ROWS)
        .map((row, y) => <Row key={y} row={row} yCoord={y + 2} />)}
    </PlayFieldContainer>
  );
};

export default Playfield;
