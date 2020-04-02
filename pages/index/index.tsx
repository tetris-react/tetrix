import { useRouter } from 'next/router';
import { Navigation } from '../../game/components';
import { Banner, Content, LandingContainer, Link } from '../../game/styles';

const Index = () => {
  const router = useRouter();

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push('/play');
  };

  return (
    <LandingContainer>
      <Navigation />
      <Banner>
        <h1>Tetrix</h1>
      </Banner>
      <Content>
        <Link onClick={handleClick}>Play Now</Link>
      </Content>
    </LandingContainer>
  );
};

export default Index;
