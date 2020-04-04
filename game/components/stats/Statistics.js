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
            <T
              id="Ts"
              width="9vh"
              height="7vh"
              viewBox="0 0 175 50"
              shadowBlur="0"
            />
            {tetradCount.T}
          </div>
          <div>
            <Z width="9vh" height="7vh" viewBox="0 0 175 100" shadowBlur="0" />
            {tetradCount.Z}
          </div>
          <div>
            <S width="9vh" height="7vh" viewBox="0 0 175 100" shadowBlur="0" />
            {tetradCount.S}
          </div>
          <div>
            <I
              width="11vh"
              height="14vh"
              viewBox="0 -110 225 100"
              shadowBlur="0"
            />
            {tetradCount.I}
          </div>
        </div>
        <div>
          <div className="next-tetrad">
            {nextTetrad?.type === 'T' && <T />}
            {nextTetrad?.type === 'Z' && <Z />}
            {nextTetrad?.type === 'S' && <S />}
            {nextTetrad?.type === 'I' && <I />}
            {nextTetrad?.type === 'J' && <J />}
            {nextTetrad?.type === 'O' && <O />}
            {nextTetrad?.type === 'L' && <L />}
          </div>
          <div>
            <J
              id="Ts"
              width="9vh"
              height="7vh"
              viewBox="0 0 175 100"
              shadowBlur="0"
            />
            {tetradCount.J}
          </div>
          <div>
            <O width="9vh" height="7vh" viewBox="0 0 175 100" shadowBlur="0" />
            {tetradCount.O}
          </div>
          <div>
            <L width="9vh" height="7vh" viewBox="0 0 175 100" shadowBlur="0" />
            {tetradCount.L}
          </div>
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
