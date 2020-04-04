import React from 'react';
import { useSelector } from 'react-redux';
import { I, J, L, O, S, T, Z } from '../../assets';
import { StatisticsContainer } from './styles/StatisticsContainer';
const Statistics = () => {
  const { tetradCount } = useSelector(state => state.game);
  const { nextTetrad } = useSelector(state => state.playfield);
  return (
    <StatisticsContainer>
      <section>
        <div>Next Tetrad</div>
        <hr />
        <div>
          {nextTetrad?.type === 'T' && <T />}
          {nextTetrad?.type === 'Z' && <Z />}
          {nextTetrad?.type === 'S' && <S />}
          {nextTetrad?.type === 'I' && <I />}
          {nextTetrad?.type === 'J' && <J />}
          {nextTetrad?.type === 'O' && <O />}
          {nextTetrad?.type === 'L' && <L />}
        </div>
      </section>
      <section>
        <div>Statistics</div>
        <hr />
      </section>
      <div>
        <span>T</span>
        <span>
          {tetradCount['T']}
        </span>
      </div>
      <div>
        <span>Z</span>
        <span>
          {tetradCount['Z']}
        </span>
      </div>
      <div>
        <span>S</span>
        <span>
          {tetradCount['S']}
        </span>
      </div>
      <div>
        <span>I</span>
        <span>
          {tetradCount['I']}
        </span>
      </div>
      <div>
        <span>J</span>
        <span>
          {tetradCount['J']}
        </span>
      </div>
      <div>
        <span>O</span>
        <span>
          {tetradCount['O']}
        </span>
      </div>
      <div>
        <span>L</span>
        <span>
          {tetradCount['L']}
        </span>
      </div>
    </StatisticsContainer>
  );
};

export default Statistics;
