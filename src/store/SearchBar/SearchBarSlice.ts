import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ISearchBarState {
  searchTerm: string;
  searchBarValue: string;
  isLoading: boolean;
}

const searchBarSlice = createSlice({
  name: 'search',
  initialState: {
    searchTerm: '',
    searchBarValue: '',
  } as ISearchBarState,
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    setSearchBarValue(state, action: PayloadAction<string>) {
      state.searchBarValue = action.payload;
    },
  },
});

export const { setSearchTerm, setSearchBarValue } = searchBarSlice.actions;

export default searchBarSlice.reducer;
