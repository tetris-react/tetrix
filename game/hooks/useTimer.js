import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

const useTimer = (callback, delay) => {
  const { gameStarted, gameOver } = useSelector(state => state.game);
  const requestAFrameRef = useRef();
  const callbackRef = useRef();
  let start = new Date().getTime();

  const loop = () => {
    let current = new Date().getTime();
    let delta = current - start;

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
      if (gameStarted) requestAFrameRef.current = requestAnimationFrame(loop);
      if (gameOver) cancelAnimationFrame(requestAFrameRef.current);

      return () => cancelAnimationFrame(requestAFrameRef.current);
    },
    [gameStarted, gameOver]
  );
};

export default useTimer;
