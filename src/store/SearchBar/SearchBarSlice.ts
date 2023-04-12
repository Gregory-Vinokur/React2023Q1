import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICardHomePage } from 'interfaces/ICardHomePage';

interface ISearchBarState {
  searchTerm: string;
  searchBarValue: string;
  searchResults: ICardHomePage[];
  isLoading: boolean;
}

const searchBarSlice = createSlice({
  name: 'search',
  initialState: {
    searchTerm: '',
    searchBarValue: '',
    searchResults: [] as ICardHomePage[],
    isLoading: false,
  } as ISearchBarState,
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    setSearchBarValue(state, action: PayloadAction<string>) {
      state.searchBarValue = action.payload;
    },
    setSearchResults(state, action: PayloadAction<ICardHomePage[]>) {
      state.searchResults = action.payload;
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export const { setSearchTerm, setSearchBarValue, setSearchResults, setIsLoading } =
  searchBarSlice.actions;

export default searchBarSlice.reducer;
