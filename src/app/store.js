import { configureStore } from '@reduxjs/toolkit';
import { chaptersSlice } from '../ducks/chaptersSlice';

export default configureStore({
  reducer: {
    chapters: chaptersSlice.reducer,
  },
});
