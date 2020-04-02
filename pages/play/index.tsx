import Playfield from '../../game/components/playfield/Playfield';
import ScoreBoard from '../../game/components/score/ScoreBoard';
import Statistics from '../../game/components/stats/Statistics';
import { AppContainer, ButtonDialog } from '../../game/styles';

const Play = () => {
  return (
    <AppContainer>
      <Statistics />
      <Playfield />
      <ScoreBoard />
      <ButtonDialog />
    </AppContainer>
  );
};

export default Play;
