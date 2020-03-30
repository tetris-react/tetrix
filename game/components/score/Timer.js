import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementTime } from '../../../store/actions/gameActions';
import { ONE_SECOND } from '../../constants';
import { useFormatSeconds, useTimer } from '../../hooks';

const Timer = () => {
  const dispatch = useDispatch();
  const { totalSeconds, gameStarted } = useSelector(state => state.game);
  const [minutes, seconds] = useFormatSeconds(totalSeconds);

  useTimer(() => {
    if (gameStarted) dispatch(incrementTime());
  }, ONE_SECOND);

  return <span>{`${minutes}:${seconds}`}</span>;
};

export default Timer;
