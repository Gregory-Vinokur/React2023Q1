import { ICardHomePage } from 'interfaces/ICardHomePage';
import { ICardFormPage } from './ICardFormPage';

export interface IState {
  search: {
    searchTerm: string;
    searchBarValue: string;
    searchResults: ICardHomePage[];
    isLoading?: boolean;
  };
  form: {
    cards: ICardFormPage[];
    showPopup: boolean;
  };
}
