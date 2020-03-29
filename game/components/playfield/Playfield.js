import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  calculateScore,
  checkIfBlocked,
  collapseEmptyRows,
  moveTetrad,
  spawnTetrad
} from '../../../store';
import { DOWN } from '../../constants';
import { useInterval, useListenKeyPress } from '../../hooks';
import Row from './Row';
import PlayFieldContainer from './styles/PlayFieldContainer';

const Playfield = () => {
  const dispatch = useDispatch();
  const { matrix, tetrad, tetradLocked } = useSelector(
    state => state.playfield
  );
  const { frameRate } = useSelector(state => state.game);

  useEffect(
    () => {
      if (tetradLocked) {
        dispatch(calculateScore());
        dispatch(collapseEmptyRows());
        dispatch(spawnTetrad(tetrad.type));
      }
    },
    [tetradLocked, tetrad, dispatch]
  );

  useInterval(() => {
    dispatch(checkIfBlocked());
    dispatch(moveTetrad(DOWN));
  }, frameRate);

  useListenKeyPress(direction => {
    dispatch(moveTetrad(direction));
  });

  return (
    <PlayFieldContainer>
      {matrix.matrix.map((row, y) => <Row key={y} row={row} yCoord={y} />)}
    </PlayFieldContainer>
  );
};

export default Playfield;
