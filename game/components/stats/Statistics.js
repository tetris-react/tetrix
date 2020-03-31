import React from 'react';
import { useSelector } from 'react-redux';
import { StatisticsContainer } from './styles/StatisticsContainer';

const Statistics = () => {
  const { tetradCount } = useSelector(state => state.game);
  return (
    <StatisticsContainer>
      <section>
        <div>Next Tetrad</div>
        <hr />
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
