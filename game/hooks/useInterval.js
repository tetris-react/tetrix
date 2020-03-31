import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { FRAME_RATE_MULTIPLIER } from '../constants';

const useInterval = (callback, frameRate) => {
  // state
  const { gameStarted, gameOver } = useSelector(state => state.game);
  // refs
  const requestAFrameRef = useRef();
  const callbackRef = useRef();
  const frameRateRef = useRef();

  let start = new Date().getTime();

  const loop = () => {
    let current = new Date().getTime();
    let delta = current - start;
    let delay = frameRateRef.current * FRAME_RATE_MULTIPLIER;

    if (delta >= delay) {
      callbackRef.current();
      start = new Date().getTime();
    }

    requestAFrameRef.current = requestAnimationFrame(loop);
  };

  useEffect(
    () => {
      callbackRef.current = callback;
    },
    [callback]
  );

  useEffect(
    () => {
      frameRateRef.current = frameRate;
    },
    [frameRate]
  );

  useEffect(
    () => {
      if (gameStarted) requestAFrameRef.current = requestAnimationFrame(loop);
      if (gameOver) cancelAnimationFrame(requestAFrameRef.current);

      return () => cancelAnimationFrame(requestAFrameRef.current);
    },
    [gameStarted, gameOver]
  );
};

export default useInterval;
