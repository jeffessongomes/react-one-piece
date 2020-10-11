import React from 'react';

import { Container } from './styles';
import Card from '../../components/CardContainer';

const Home = () => {
  return (
    <Container>
      <ul>
        <li>
          <Card />
        </li>
      </ul>
    </Container>
  );
};

export default Home;
