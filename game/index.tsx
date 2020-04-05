import moment from 'moment-timezone';
import { useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-apollo';
import { useSelector } from 'react-redux';
import { ADD_GAME_RECORD, LEADER_BOARD } from '../queries';
import { Navigation } from './components';
import LoginModal from './components/auth/LoginModal';
import RegisterModal from './components/auth/RegisterModal';
import RegisterPrompt from './components/auth/RegisterPrompt';
import Leaderboard from './components/leaderboard/Leaderboard';
import PersonalBest from './components/personal-best/PersonalBest';
import Playfield from './components/playfield/Playfield';
import ScoreBoard from './components/score/ScoreBoard';
import Statistics from './components/stats/Statistics';
import { AppContainer, ButtonDialog } from './styles';

interface PlayProps {
  refetch: () => void;
  session: object;
}

const Play = (props: PlayProps) => {
  const { refetch, session } = props;
  const [addGameRecord] = useMutation(ADD_GAME_RECORD);
  const { data, refetch: refetchLeaderBoard } = useQuery(LEADER_BOARD);
  const {
    gameOver,
    score,
    level,
    rowsCleared,
    tetrisNum,
    tetrisRate
  } = useSelector((state: any) => state.game);
  const [toggleView, setToggleView] = useState('Leaderboard');

  useEffect(
    () => {
      if (gameOver) {
        addGameRecord({
          variables: {
            data: {
              score: score,
              level: level,
              lines: rowsCleared,
              numTetris: tetrisNum,
              tetrisRate: tetrisRate,
              date: moment().utc().format()
            }
          }
        })
          .then(res => {
            console.log('res', res);
            refetchLeaderBoard();
            refetch();
          })
          .catch((err: any) => {
            console.log(err);
          });
      }
    },
    [gameOver]
  );

  return (
    <AppContainer>
      <Navigation
        refetch={refetch}
        session={session}
        setToggleView={setToggleView}
      />
      {toggleView === 'Statistics' && <Statistics />}
      {toggleView === 'Leaderboard' && <Leaderboard data={data} />}
      {toggleView === 'Personal Best' && <PersonalBest session={session} />}
      <Playfield />
      <ScoreBoard />
      <ButtonDialog session={session} />
      <RegisterModal
        refetch={refetch}
        session={session}
        refetchLeaderBoard={refetchLeaderBoard}
      />
      <RegisterPrompt session={session} />
      <LoginModal refetch={refetch} refetchLeaderBoard={refetchLeaderBoard} />
    </AppContainer>
  );
};

export default Play;
