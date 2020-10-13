import React, { useState, useEffect, useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Container } from './styles';
import Card from '../../components/CardContainer';
import { retrieveChapter } from '../../ducks/chaptersSlice';

const Home = () => {
  const dispatch = useDispatch();
  const chapters = useSelector((state) => state.chapters.items);

  useEffect(() => {
    dispatch(retrieveChapter());
  }, [dispatch]);

  return (
    <Container>
      <ul>
        {chapters.map((chapter) => {
          const [cover_image] = chapter.cover_images.split('|');

          return (
            <li key={chapter.id}>
              <Card
                title={chapter.title}
                numberCap={chapter.id}
                cover={cover_image}
              />
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default Home;
