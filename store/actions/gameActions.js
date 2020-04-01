import { spawnTetrad } from '../index';
export const START_GAME = 'START_GAME';
export const PAUSE_GAME = 'PAUSE_GAME';
export const RESUME_GAME = 'RESUME_GAME';
export const GAME_OVER = 'GAME_OVER';
export const RESTART_GAME = 'RESTART_GAME';
export const CALCULATE_SCORE = 'CALCULATE_SCORE';
export const INCREMENT_TIME = 'INCREMENT_TIME';
export const INCREMENT_ATTACK = 'INCREMENT_ATTACK';
export const INCREMENT_TETRADS_PROCESSED = 'INCREMENT_TETRADS_PROCESSED';

export const startGame = () => dispatch => {
  dispatch({ type: START_GAME });
  dispatch(spawnTetrad());
};

export const restartGame = () => (dispatch, state) => {
  let { score, topScore } = state().game;

  topScore = score > topScore ? score : topScore;

  dispatch({
    type: RESTART_GAME,
    payload: {
      topScore
    }
  });

  dispatch(spawnTetrad());
};

export const pauseGame = () => (dispatch, state) => {
  let { gameStarted, gameOver, gamePaused } = state().game;

  if (gameStarted) {
    dispatch({
      type: PAUSE_GAME
    });
  }

  if (gamePaused) {
    dispatch(resumeGame());
  }
};

export const resumeGame = () => (dispatch, state) => {
  dispatch({
    type: RESUME_GAME
  });
};

export const incrementTime = () => (dispatch, state) => {
  let { attacks, aps, tetradsProcessed, tps, totalSeconds } = state().game;

  aps = roundTwoDecimals(attacks / totalSeconds);
  tps = roundTwoDecimals(tetradsProcessed / totalSeconds);
  totalSeconds++;

  function roundTwoDecimals(num) {
    return Math.round((num + Number.EPSILON) * 100) / 100;
  }

  dispatch({
    type: INCREMENT_TIME,
    payload: {
      aps,
      tps,
      totalSeconds
    }
  });
};

export const incrementAttack = () => (dispatch, state) => {
  dispatch({ type: INCREMENT_ATTACK });
};

export const incrementTetrads = () => (dispatch, state) => {
  let { tetrad } = state().playfield;
  let { tetradCount } = state().game;

  tetradCount[tetrad.type]++;

  dispatch({
    type: INCREMENT_TETRADS_PROCESSED,
    payload: {
      tetradCount
    }
  });
};

export const calculateScore = () => (dispatch, state) => {
  const numRows = state().playfield.deletedRows.length;
  let { rowsCleared, level, score } = state().game;
  let { rowsSkipped } = state().playfield;

  const points =
    numRows === 0
      ? 0
      : numRows === 1 ? 40 : numRows === 2 ? 100 : numRows === 3 ? 300 : 1200;

  rowsCleared += numRows;
  score += points * (level + 1) + rowsSkipped;
  level += rowsCleared >= level * 10 + 10 ? 1 : 0;

  dispatch({
    type: CALCULATE_SCORE,
    payload: {
      rowsCleared,
      level,
      score
    }
  });
};
