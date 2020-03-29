import React from 'react';
import { StatisticsContainer } from './styles/StatisticsContainer';

const Statistics = () => {
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
        <span>0</span>
      </div>
      <div>
        <span>Z</span>
        <span>0</span>
      </div>
      <div>
        <span>S</span>
        <span>0</span>
      </div>
      <div>
        <span>I</span>
        <span>0</span>
      </div>
      <div>
        <span>J</span>
        <span>0</span>
      </div>
      <div>
        <span>O</span>
        <span>0</span>
      </div>
      <div>
        <span>L</span>
        <span>0</span>
      </div>
    </StatisticsContainer>
  );
};

export default Statistics;
