import React from 'react';
import { useSelector } from 'react-redux';
import Timer from './Timer';
import { ScoreBoardContainer } from './styles/ScoreBoardContainer';

const ScoreBoard = () => {
  const { score, topScore, level, rowsCleared, aps, tps } = useSelector(
    state => state.game
  );
  return (
    <ScoreBoardContainer>
      <Timer />
      <section>
        <div>
          <span>Top Score</span>
          <span>
            {topScore}
          </span>
        </div>
        <hr />
        <div>
          <span>Score</span>
          <span>
            {score}
          </span>
        </div>
      </section>

      <section>
        <div>
          <span>Lines</span>
          <span>
            {rowsCleared}
          </span>
        </div>
        <div>
          <span>Level</span>
          <span>
            {level}
          </span>
        </div>
        <hr />
        <div>
          <span>Tetris #</span>
          <span>16</span>
        </div>
        <div>
          <span>Tetris %</span>
          <span>.05</span>
        </div>
        <hr />
      </section>

      <section>
        <div>
          <span>APS - (Attack / sec)</span>
          <span>
            {aps}
          </span>
        </div>
        <div>
          <span>TPS - (Tetrads Processed / sec)</span>
          <span>
            {tps}
          </span>
        </div>
      </section>
    </ScoreBoardContainer>
  );
};

export default ScoreBoard;
