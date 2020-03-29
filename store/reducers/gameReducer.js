import { G } from '../../game/constants';
import { RESTART_GAME } from '../actions/gameActions';
import { CALCULATE_SCORE, GAME_OVER, START_GAME } from '../index';
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
  apm: 0,
  ppm: 0
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        gameStarted: true
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
