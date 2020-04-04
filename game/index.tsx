import { useState } from 'react';
import { Navigation } from './components';
import LoginModal from './components/auth/LoginModal';
import RegisterModal from './components/auth/RegisterModal';
import RegisterPrompt from './components/auth/RegisterPrompt';
import Playfield from './components/playfield/Playfield';
import Progress from './components/progress/Progress';
import ScoreBoard from './components/score/ScoreBoard';
import Statistics from './components/stats/Statistics';
import { AppContainer, ButtonDialog } from './styles';

interface PlayProps {
  refetch: () => void;
  session: object;
}

const Play = (props: PlayProps) => {
  const [toggleView, setToggleView] = useState('Statistics');

  const { refetch, session } = props;
  return (
    <AppContainer>
      <Navigation
        refetch={refetch}
        session={session}
        setToggleView={setToggleView}
      />
      {toggleView === 'Statistics' ? <Statistics /> : <Progress />}
      <Playfield />
      <ScoreBoard />
      <ButtonDialog session={session} />
      <RegisterModal refetch={refetch} session={session} />
      <RegisterPrompt session={session} />
      <LoginModal refetch={refetch} />
    </AppContainer>
  );
};

export default Play;
