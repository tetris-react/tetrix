import Playfield from '../../game/components/playfield/Playfield';
import ScoreBoard from '../../game/components/score/ScoreBoard';
import Statistics from '../../game/components/stats/Statistics';
import { AppContainer, ButtonDialog } from '../../game/styles';
import { withApollo } from '../../lib/apollo';

function Index() {

  return (
    <AppContainer>
      <Statistics />
      <Playfield />
      <ScoreBoard />
      <ButtonDialog />
    </AppContainer>
  );
}

export default withApollo({ ssr: true })(Index);
