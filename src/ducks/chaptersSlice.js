import { createSlice } from '@reduxjs/toolkit';
import { api } from '../services/api';

export const chaptersSlice = createSlice({
  name: 'chapters',
  initialState: {
    items: [],
  },
  reducers: {
    setChaptersSuccess: (state, action) => {
      const action_ob = action.payload[0];
      state.items = action_ob;
    },
  },
});

export const { setChaptersSuccess } = chaptersSlice.actions;

export const retrieveChapter = () => async (dispatch) => {
  try {
    const { data } = await api.get('');
    const retrievedChapters = Object.values(data);

    dispatch(setChaptersSuccess(retrievedChapters));
  } catch (err) {}
};

export default chaptersSlice.reducer;
