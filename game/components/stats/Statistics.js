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
              viewBox="0 0 175 100"
              shadowBlur="0"
              filterID="T_s"
            />
            {tetradCount.T}
          </div>
          <div>
            <Z
              width="9vh"
              height="7vh"
              viewBox="0 0 175 100"
              shadowBlur="0"
              filterID="Z_s"
            />
            {tetradCount.Z}
          </div>
          <div>
            <S
              width="9vh"
              height="7vh"
              viewBox="0 0 175 100"
              shadowBlur="0"
              filterID="S_s"
            />
            {tetradCount.S}
          </div>
          <div>
            <I
              width="11vh"
              height="14vh"
              viewBox="0 -110 225 100"
              shadowBlur="0"
              filterID="I_s"
            />
            {tetradCount.I}
          </div>
        </div>
        <div>
          <div className="next-tetrad">
            {nextTetrad?.type === 'T' && <T filterID="T_b"/>}
            {nextTetrad?.type === 'Z' && <Z filterID="Z_b"/>}
            {nextTetrad?.type === 'S' && <S filterID="S_b"/>}
            {nextTetrad?.type === 'I' && <I filterID="I_b"/>}
            {nextTetrad?.type === 'J' && <J filterID="J_b"/>}
            {nextTetrad?.type === 'O' && <O filterID="O_b"/>}
            {nextTetrad?.type === 'L' && <L filterID="L_b"/>}
          </div>
          <div>
            <J
              filterID="Ts"
              width="9vh"
              height="7vh"
              viewBox="0 0 175 100"
              shadowBlur="0"
              filterID="J_s"
            />
            {tetradCount.J}
          </div>
          <div>
            <O
              width="9vh"
              height="7vh"
              viewBox="0 0 175 100"
              shadowBlur="0"
              filterID="O_s"
            />
            {tetradCount.O}
          </div>
          <div>
            <L
              width="9vh"
              height="7vh"
              viewBox="0 0 175 100"
              shadowBlur="0"
              filterID="L_s"
            />
            {tetradCount.L}
          </div>
        </div>
      </div>
    </StatisticsContainer>
  );
};

export default Statistics;
