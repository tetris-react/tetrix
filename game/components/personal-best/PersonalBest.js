import React from 'react';
import { useQuery } from 'react-apollo';
import { useSelector } from 'react-redux';
import { LEADER_BOARD } from '../../../queries';
import { I, J, L, O, S, T, Z } from '../../assets';
import PersonalBestTable from './PersonalBestTable'
import { PersonalBestContainer } from './styles/PersonalBestContainer';

const PersonalBest = (props) => {
  const { session } = props;
  const { nextTetrad } = useSelector(state => state.playfield);

  return (
    <PersonalBestContainer>
      <div>
        <span>Next Tetrad </span>
        <hr />
      </div>
      <div>
        <div>
          <span>Personal Best</span>
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
      <PersonalBestTable session={session}/>
    </PersonalBestContainer>
  );
};

export default PersonalBest;