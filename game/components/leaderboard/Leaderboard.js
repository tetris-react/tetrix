import React from 'react';
import { useQuery } from 'react-apollo';
import { useSelector } from 'react-redux';
import { LEADER_BOARD } from '../../../queries';
import { I, J, L, O, S, T, Z } from '../../assets';
import LeaderboardTable from './LeadboardTable';
import { LeaderboardContainer } from './styles/LeaderboardContainer';

const Leaderboard = (props) => {
  const {data} = props;
  const { nextTetrad } = useSelector(state => state.playfield);

  return (
    <LeaderboardContainer>
      <div>
        <span>Next Tetrad </span>
        <hr />
      </div>
      <div>
        <div>
          <span>Leaderboard</span>
        </div>
        <div className="next-tetrad">
          {nextTetrad?.type === 'T' && <T filterID="T_b" />}
          {nextTetrad?.type === 'Z' && <Z filterID="Z_b" />}
          {nextTetrad?.type === 'S' && <S filterID="S_b" />}
          {nextTetrad?.type === 'I' && <I filterID="I_b" />}
          {nextTetrad?.type === 'J' && <J filterID="J_b" />}
          {nextTetrad?.type === 'O' && <O filterID="O_b" />}
          {nextTetrad?.type === 'L' && <L filterID="L_b" />}
        </div>
      </div>
      <LeaderboardTable data={data} />
    </LeaderboardContainer>
  );
};

export default Leaderboard;
