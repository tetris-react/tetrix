import { NUM_COLS, NUM_ROWS } from '../../game/constants';
import { Tetrad } from '../../game/datatypes';
import { Matrix } from '../../game/datatypes';
import { RESTART_GAME } from '../actions/gameActions';
import {
  COLLAPSE_ROWS,
  DELETE_ROW,
  HARD_DROP_TETRAD,
  MOVE_TETRAD,
  SPAWN_COLISSION_DETECTED,
  SPAWN_TETRAD,
  TETRAD_LOCKED
} from '../index';

const initialState = {
  matrix: new Matrix(NUM_ROWS, NUM_COLS),
  tetrad: new Tetrad(),
  tetradLocked: false,
  spawnCollisions: 0,
  deletedRows: [],
  rowsSkipped: 0
};

const playfieldReducer = (state = initialState, action) => {
  switch (action.type) {
    case SPAWN_TETRAD: {
      return {
        ...state,
        matrix: action.payload.matrix,
        tetrad: action.payload.tetrad,
        deletedRows: [],
        rowsSkipped: 0,
        tetradLocked: false
      };
    }
    case MOVE_TETRAD: {
      return {
        ...state,
        matrix: action.payload.matrix,
        tetrad: action.payload.tetrad
      };
    }
    case HARD_DROP_TETRAD: {
      return {
        ...state,
        matrix: action.payload.matrix,
        tetrad: action.payload.tetrad,
        rowsSkipped: action.payload.rowsSkipped
      };
    }
    case TETRAD_LOCKED:
      return {
        ...state,
        matrix: action.payload.matrix,
        tetradLocked: true
      };
    case SPAWN_COLISSION_DETECTED:
      return {
        ...state,
        spawnCollisions: action.payload.spawnCollisions
      };
    case RESTART_GAME: {
      return {
        ...initialState,
        matrix: new Matrix(NUM_ROWS, NUM_COLS),
        tetrad: new Tetrad()
      };
    }
    case DELETE_ROW:
      return {
        ...state,
        matrix: action.payload.matrix,
        deletedRows: [...state.deletedRows, action.payload.deletedRow]
      };
    case COLLAPSE_ROWS:
      return {
        ...state,
        matrix: action.payload.matrix
      };
    default:
      return state;
  }
};

export default playfieldReducer;
