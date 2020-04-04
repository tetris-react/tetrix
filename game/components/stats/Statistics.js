import React from 'react';
import { useSelector } from 'react-redux';
import { I, J, L, O, S, T, Z } from '../../assets';
import { StatisticsContainer } from './styles/StatisticsContainer';
const Statistics = () => {
  const { tetradCount } = useSelector(state => state.game);
  const { nextTetrad } = useSelector(state => state.playfield);
  return (
    <StatisticsContainer>
      <div>
        <span>Next Tetrad </span>
        <hr />
      </div>
      <div>
        <div>
          <span>Statistics</span>
          <hr />
          <div>
            {/* <T width="150" height="50" viewBox="0 0 400 125" /> */}
            {tetradCount.T}
          </div>
          <div>
            {/* <Z width="150" height="50" viewBox="0 0 400 125" /> */}
            {tetradCount.Z}
          </div>
          <div>
            {/* <S width="150" height="50" viewBox="0 0 400 125" /> */}
            {tetradCount.S}
          </div>
          <div>
            {/* <I width="200" height="50" viewBox="0 0 600 25" /> */}
            {tetradCount.I}
          </div>
        </div>
        <div>
          {nextTetrad?.type === 'T' && <T />}
          {nextTetrad?.type === 'Z' && <Z />}
          {nextTetrad?.type === 'S' && <S />}
          {nextTetrad?.type === 'I' && <I />}
          {nextTetrad?.type === 'J' && <J />}
          {nextTetrad?.type === 'O' && <O />}
          {nextTetrad?.type === 'L' && <L />}
        </div>
      </div>
    </StatisticsContainer>
  );
};

export default Statistics;

/*
<div>
          {nextTetrad?.type === 'T' && <T />}
          {nextTetrad?.type === 'Z' && <Z />}
          {nextTetrad?.type === 'S' && <S />}
          {nextTetrad?.type === 'I' && <I />}
          {nextTetrad?.type === 'J' && <J />}
          {nextTetrad?.type === 'O' && <O />}
          {nextTetrad?.type === 'L' && <L />}
        </div>

*/
