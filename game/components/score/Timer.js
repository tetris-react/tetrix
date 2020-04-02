import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { incrementTime } from '../../../store/actions/gameActions';
import { FPS_60 } from '../../constants';
import { useFormatSeconds, useInterval } from '../../hooks';

const Timer = () => {
  const dispatch = useDispatch();
  const { totalSeconds, gameStarted } = useSelector(state => state.game);
  const [minutes, seconds] = useFormatSeconds(totalSeconds);

  useInterval(() => {
    if (gameStarted) dispatch(incrementTime());
  }, FPS_60);

  return (
    <TimerContainer>
      <span>{`${minutes}:${seconds}`}</span>
    </TimerContainer>
  );
};

const TimerContainer = styled.div`width: 60%;`;

export default Timer;
