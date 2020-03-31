import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { hardDropTetrad, incrementAttack } from '../../store';
import { DOWN, HARD_DROP, LEFT, RIGHT, ROTATE } from '../constants';

const useListenKeyPress = callback => {
  const dispatch = useDispatch();

  const keyDownHandler = e => {
    switch (e.keyCode) {
      case 40:
        callback(DOWN);
        break;
      case 37:
        callback(LEFT);
        break;
      case 38:
        callback(ROTATE);
        break;
      case 39:
        callback(RIGHT);
        break;
      case 32:
        callback(HARD_DROP);
        break;
      default:
        break;
    }
    dispatch(incrementAttack());
  };

  useEffect(() => {
    window.addEventListener('keydown', keyDownHandler);

    return () => {
      window.removeEventListener('keydown', keyDownHandler);
    };
  }, []);
};

export default useListenKeyPress;
