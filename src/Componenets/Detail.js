import styled from "styled-components";

import React from "react";

const Detail = (props) => {
  return (
    <Container>
      <Background>
        <img
          src="https://cannonball-cdn.bamgrid.com/assets/originals/Hero_Desktop_Luca_EMEA_(4).jpg"
          alt=""
        />
      </Background>
      <ImageTitle>
        <img
          src="https://thelink.harding.edu/the-bison/wp-content/uploads/sites/8/Artboard-1-4.png"
          alt=""
        />
      </ImageTitle>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
  left: 0px;
  opacity: 0.8;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;

  img {
    width: 100vw;
    height: 100vh;

    @media (max-width: 768px) {
      width: initial;
    }
  }
`;

const ImageTitle = styled.div`
  align-items: flex-end;
  display: flex;
  --webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0px auto;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;

  img {
    max-width: 600px;
    min-width: 200px;
    width: 35wh;
  }
`;

export default Detail;
