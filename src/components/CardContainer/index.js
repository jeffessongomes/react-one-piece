import React from 'react';

import { Container } from './styles';

const CardContainer = (props) => {
  return (
    <Container>
      <img src={props.cover} alt={props.title} />
      <div>
        <h2>{props.numberCap}</h2>
        <p>{props.title}</p>
      </div>
    </Container>
  );
};

export default CardContainer;
