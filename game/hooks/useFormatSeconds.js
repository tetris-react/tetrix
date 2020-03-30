import { useEffect, useState } from 'react';

const useFormatSeconds = totalSeconds => {
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');

  const pad = num => {
    return ('0' + num).slice(-2);
  };

  useEffect(
    () => {
      let totalMinutes = Math.floor(totalSeconds / 60);

      totalSeconds %= 60;
      totalMinutes %= 60;

      totalSeconds = `${pad(totalSeconds)}`;
      totalMinutes = `${pad(totalMinutes)}`;

      setSeconds(totalSeconds);
      setMinutes(totalMinutes);
    },
    [totalSeconds]
  );

  return [minutes, seconds];
};

export default useFormatSeconds;
