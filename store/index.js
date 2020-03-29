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
export { startGame, calculateScore, restartGame } from './actions/gameActions';
export {
  spawnTetrad,
  moveTetrad,
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
  GAME_OVER,
  CALCULATE_SCORE,
  RESTART_GAME
} from './actions/gameActions';

export {
  SPAWN_TETRAD,
  MOVE_TETRAD,
  TETRAD_LOCKED,
  DELETE_ROW,
  COLLAPSE_ROWS,
  SPAWN_COLISSION_DETECTED
} from './actions/playfieldActions';
