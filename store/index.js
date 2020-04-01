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
  startGame,
  pauseGame,
  resumeGame,
  calculateScore,
  restartGame,
  incrementTime,
  incrementAttack,
  incrementTetrads
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
  START_GAME,
  PAUSE_GAME,
  RESUME_GAME,
  GAME_OVER,
  CALCULATE_SCORE,
  RESTART_GAME,
  INCREMENT_TIME,
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
