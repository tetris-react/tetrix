import React from 'react';
import { useSelector } from 'react-redux';
import Avatar from './Avatar';
import Timer from './Timer';
import { ScoreBoardContainer } from './styles/ScoreBoardContainer';

const ScoreBoard = () => {
  const {
    score,
    topScore,
    level,
    rowsCleared,
    aps,
    tps,
    tetrisNum,
    tetrisRate,
    burn
  } = useSelector(state => state.game);
  return (
    <ScoreBoardContainer>
      <div>
        <Timer />
        <Avatar />
      </div>
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
        <div>
          <span>Level</span>
          <span>
            {level}
          </span>
        </div>
      </section>

      <section>
        <div>
          <span>Lines Cleared</span>
          <span>
            {rowsCleared}
          </span>
        </div>
        <div>
          <span>Tetris Count</span>
          <span>
            {tetrisNum}
          </span>
        </div>
        <div>
          <span>Tetris Rate</span>
          <span>
            {tetrisRate * 100}%
          </span>
        </div>
        <div>
          <span>Burn Rate</span>
          <span>
            {burn}
          </span>
        </div>
      </section>

      {/* <section>
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
      </section> */}
    </ScoreBoardContainer>
  );
};

export default ScoreBoard;
