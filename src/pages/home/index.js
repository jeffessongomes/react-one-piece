import React, { useState, useEffect, useCallback } from 'react';

import { Container } from './styles';
import Card from '../../components/CardContainer';
import { api } from '../../services/api';

const Home = () => {
  const [chapters, setChapters] = useState([]);

  const getChapters = useCallback(async () => {
    try {
      const { data } = await api.get('');
      const retrievedChapters = Object.values(data);
      setChapters(...chapters, ...retrievedChapters);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    getChapters();
  }, [getChapters]);

  return (
    <Container>
      <ul>
        {chapters.map((chapter) => (
          <li>
            <Card />
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Home;
