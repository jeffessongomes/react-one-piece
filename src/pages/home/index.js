import React, { useState, useEffect, useCallback } from 'react';

import { Container } from './styles';
import Card from '../../components/CardContainer';
import { api } from '../../services/api';

const Home = () => {
  const [Chapters, setChapters] = useState([]);

  useEffect(() => {
    getChapters();
  }, []);

  const getChapters = useCallback(async () => {
    const data = await api.get('');

    console.log(data);
  }, []);

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
