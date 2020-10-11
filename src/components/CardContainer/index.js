import React from 'react';

import { Container } from './styles';

const CardContainer = () => {
  return (
    <Container>
      <img
        src="https://res.cloudinary.com/daluwid/image/upload/v1540988490/one-piece-cover-920.png"
        alt="One Piece Chapter 920"
      />
      <div>
        <h2>920</h2>
        <p>I love Oden</p>
      </div>
    </Container>
  );
};

export default CardContainer;
