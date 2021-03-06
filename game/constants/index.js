export const FPS_60 = 60;
export const FRAME_RATE_MULTIPLIER = 16.6666666667;
// Matrix Dimensions
export const NUM_ROWS = 22; // two extra rows for rotational buffer at spawn
export const NUM_COLS = 10;

// Tetrad Directions
export const ROTATE = 'ROTATE';
export const DOWN = 'DOWN';
export const LEFT = 'LEFT';
export const RIGHT = 'RIGHT';
export const SOFT_DROP = 'SOFT_DROP';
export const HARD_DROP = 'HARD_DROP';
export const PAUSE = 'PAUSE';

// Gravity - Or Frames/Gridcell/Level
export const GRAVITY_00 = 48;
export const GRAVITY_01 = 43;
export const GRAVITY_02 = 38;
export const GRAVITY_03 = 33;
export const GRAVITY_04 = 28;
export const GRAVITY_05 = 23;
export const GRAVITY_06 = 18;
export const GRAVITY_07 = 13;
export const GRAVITY_08 = 8;
export const GRAVITY_09 = 6;
export const GRAVITY_10_12 = 5;
export const GRAVITY_13_15 = 4;
export const GRAVITY_16_18 = 3;
export const GRAVITY_19_28 = 2;
export const GRAVITY_29_PLUS = 1;

export const SOFT_DROP_RATE = 6;

export const G = [
  GRAVITY_00,
  GRAVITY_01,
  GRAVITY_02,
  GRAVITY_03,
  GRAVITY_04,
  GRAVITY_05,
  GRAVITY_06,
  GRAVITY_07,
  GRAVITY_08,
  GRAVITY_09,
  GRAVITY_10_12,
  GRAVITY_10_12,
  GRAVITY_10_12,
  GRAVITY_13_15,
  GRAVITY_13_15,
  GRAVITY_13_15,
  GRAVITY_16_18,
  GRAVITY_16_18,
  GRAVITY_16_18,
  GRAVITY_19_28,
  GRAVITY_19_28,
  GRAVITY_19_28,
  GRAVITY_19_28,
  GRAVITY_19_28,
  GRAVITY_19_28,
  GRAVITY_19_28,
  GRAVITY_19_28,
  GRAVITY_19_28,
  GRAVITY_19_28,
  GRAVITY_29_PLUS
];
