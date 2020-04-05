import styled from "styled-components";

const PlayFieldContainer = styled.div`
  width: 100%;
  height: 56.25vw;
  max-width: calc(100% / 3);
  max-height: 100vh;
  margin: auto;
  border-left: 0.5px solid #444444;
  border-right: 0.5px solid #444444;
  background-color: rgba(0, 0, 0, 0.25);
  // stops tetrad glow outside of border
  overflow: hidden;
`;

export default PlayFieldContainer;
