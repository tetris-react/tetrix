import { Navigation } from './components';
import Playfield from './components/playfield/Playfield';
import ScoreBoard from './components/score/ScoreBoard';
import Statistics from './components/stats/Statistics';
import { AppContainer, ButtonDialog } from './styles';

const Play = () => {
  return (
    <AppContainer>
      <Navigation />
      <Statistics />
      <Playfield />
      <ScoreBoard />
      <ButtonDialog />
    </AppContainer>
  );
};

export default Play;
