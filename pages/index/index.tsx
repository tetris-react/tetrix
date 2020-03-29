import { useSelector } from 'react-redux';
import RestartGameModal from '../../game/components/modals/RestartGameModal';
import StartGameModal from '../../game/components/modals/StartGameModal';
import Playfield from '../../game/components/playfield/Playfield';
import ScoreBoard from '../../game/components/score/ScoreBoard';
import Statistics from '../../game/components/stats/Statistics';
import { AppContainer } from '../../game/styles';

function Index() {
  const { gameStarted, gameOver } = useSelector((state: any) => state.game);
  // const gameStarted = true;

  return (
    <AppContainer>
      {!gameStarted && <StartGameModal />}
      {gameOver && <RestartGameModal />}
      <Statistics />
      <Playfield />
      <ScoreBoard />
    </AppContainer>
  );
}

export default Index;
