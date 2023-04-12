import { ICardHomePage } from 'interfaces/ICardHomePage';

export interface IState {
  search: {
    searchTerm: string;
    searchBarValue: string;
    searchResults: ICardHomePage[];
    isLoading?: boolean;
  };
}
