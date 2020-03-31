import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { hardDropTetrad, incrementAttack } from '../../store';
import { DOWN, HARD_DROP, LEFT, PAUSE, RIGHT, ROTATE } from '../constants';

const useListenKeyPress = callback => {
  const dispatch = useDispatch();

  const keyDownHandler = e => {
    console.log(e.keyCode);
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
        if (!e.repeat) callback(HARD_DROP);
        break;
      case 80:
        if (!e.repeat) callback(PAUSE);
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
