import { useSelector } from 'react-redux';
import StartGameModal from '../../game/components/modals/StartGameModal';
import Playfield from '../../game/components/playfield/Playfield';
import ScoreBoard from '../../game/components/score/ScoreBoard';
import Statistics from '../../game/components/stats/Statistics';
import { AppContainer } from '../../game/styles';

function Index() {
  const { gameStarted } = useSelector((state: any) => state.game);
  // const gameStarted = true;

  return (
    <AppContainer>
      {!gameStarted && <StartGameModal />}
      <Statistics />
      <Playfield />
      <ScoreBoard />
    </AppContainer>
  );
}

export default Index;
