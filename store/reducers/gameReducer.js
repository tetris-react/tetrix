import { G } from '../../game/constants';
import {
  CALCULATE_SCORE,
  GAME_OVER,
  INCREMENT_ATTACK,
  INCREMENT_TETRADS_PROCESSED,
  INCREMENT_TIME,
  RESTART_GAME,
  START_GAME
} from '../index';
const initialState = {
  gameStarted: false,
  gameOver: false,
  frameRate: G[0],
  rowsCleared: 0,
  level: 0,
  score: 0,
  topScore: 0,
  tetrisNum: 0,
  tetrisRate: 0,
  attacks: 0,
  aps: 0, // attacks per second
  tetradsProcessed: -1,
  tps: 0, // tetrads processed per second
  totalSeconds: 0,
  tetradCount: {
    T: 0,
    Z: 0,
    S: 0,
    I: 0,
    J: 0,
    O: 0,
    L: 0
  }
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        gameStarted: true
      };
    case INCREMENT_TIME:
      return {
        ...state,
        totalSeconds: action.payload.totalSeconds,
        aps: action.payload.aps,
        tps: action.payload.tps
      };

    case INCREMENT_ATTACK:
      return {
        ...state,
        attacks: ++state.attacks
      };
    case INCREMENT_TETRADS_PROCESSED:
      return {
        ...state,
        tetradsProcessed: ++state.tetradsProcessed,
        tetradCount: action.payload.tetradCount
      };
    case GAME_OVER: {
      return {
        ...state,
        gameStarted: false,
        gameOver: true
      };
    }
    case RESTART_GAME:
      return {
        ...initialState,
        gameStarted: true,
        topScore: action.payload.topScore
      };
    case CALCULATE_SCORE:
      return {
        ...state,
        rowsCleared: action.payload.rowsCleared,
        level: action.payload.level,
        score: action.payload.score,
        frameRate: G[action.payload.level]
      };
    default:
      return state;
  }
};

export default gameReducer;
