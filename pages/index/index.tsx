import { Navigation } from '../../game/components';
import { Banner, Button, Content, LandingContainer } from '../../game/styles';

const Index = () => {
  return (
    <LandingContainer>
      <Navigation />
      <Banner>
        <h1>Tetrix</h1>
      </Banner>
      <Content>
        <Button>Play Now</Button>
      </Content>
    </LandingContainer>
  );
};

export default Index;
