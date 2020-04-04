/********************************************************
*                        REDUCERS                      *
********************************************************/
import { combineReducers } from 'redux';
import gameReducer from './reducers/gameReducer';
import playfieldReducer from './reducers/playfieldReducer';

export default combineReducers({
  playfield: playfieldReducer,
  game: gameReducer
});

/********************************************************
*                     ACTION CREATORS                   *
********************************************************/
export {
  renderLoginModal,
  renderRegisterModal,
  startGame,
  pauseGame,
  resumeGame,
  calculateScore,
  restartGame,
  incrementTime,
  incrementAttack,
  incrementTetrads,
  incrementTetris
} from './actions/gameActions';

export {
  spawnTetrad,
  moveTetrad,
  hardDropTetrad,
  deleteFilledRow,
  checkIfBlocked,
  collapseEmptyRows,
  checkSpawnCollision
} from './actions/playfieldActions';

/********************************************************
*                       ACTION TYPES                    *
********************************************************/
export {
  LOGGING_IN,
  REGISTERING,
  START_GAME,
  PAUSE_GAME,
  RESUME_GAME,
  GAME_OVER,
  CALCULATE_SCORE,
  RESTART_GAME,
  INCREMENT_TIME,
  INCREMENT_TETRIS,
  INCREMENT_ATTACK,
  INCREMENT_TETRADS_PROCESSED
} from './actions/gameActions';

export {
  SPAWN_TETRAD,
  MOVE_TETRAD,
  HARD_DROP_TETRAD,
  TETRAD_LOCKED,
  DELETE_ROW,
  COLLAPSE_ROWS,
  SPAWN_COLISSION_DETECTED
} from './actions/playfieldActions';
