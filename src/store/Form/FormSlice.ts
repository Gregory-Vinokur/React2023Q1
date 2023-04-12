import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICardFormPage } from './../../interfaces/ICardFormPage';

interface IFormState {
  cards: ICardFormPage[];
  showPopup: boolean;
}

const FormSlice = createSlice({
  name: 'form',
  initialState: {
    cards: [] as ICardFormPage[],
    showPopup: false,
  } as IFormState,
  reducers: {
    setCards(state, action: PayloadAction<ICardFormPage[]>) {
      state.cards = action.payload;
    },
    setShowPopup(state, action: PayloadAction<boolean>) {
      state.showPopup = action.payload;
    },
  },
});

export const { setCards, setShowPopup } = FormSlice.actions;

export default FormSlice.reducer;
