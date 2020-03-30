import { useSelector } from "react-redux";
import StartGameModal from "../../game/components/modals/StartGameModal";
import Playfield from "../../game/components/playfield/Playfield";
import ScoreBoard from "../../game/components/score/ScoreBoard";
import { AppContainer, Column as PlaceHolder } from "../../game/styles";
import withApollo from "../../lib/with-apollo";

function Index() {
  const { gameStarted } = useSelector((state: any) => state.game);
  // const gameStarted = true;

  return (
    <AppContainer>
      {!gameStarted && <StartGameModal />}
      <PlaceHolder />
      <Playfield />
      <ScoreBoard />
    </AppContainer>
  );
}

export default withApollo(Index);
