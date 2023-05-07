import { createSlice } from '@reduxjs/toolkit';
import { IBasketState } from './types';
import {
	addAction,
	decreaseAction,
	deleteAction,
	fetchAction,
	increaseAction,
} from 'store/slices/basket/actions';

const initialState: IBasketState = {
	basketProductsList: [],
	totalSum: 0,
};

const basketSlice = createSlice({
	name: 'basket',
	initialState,
	reducers: {
		fetchBasketData(state) {
			fetchAction(state);
		},

		addToBasket(state, action) {
			addAction(state, action);
		},

		decreaseProductQuantity(state, action) {
			decreaseAction(state, action);
		},

		increaseProductQuantity(state, action) {
			increaseAction(state, action);
		},

		deleteFromBasket(state, action) {
			deleteAction(state, action);
		},
	},
});

export const {
	fetchBasketData,
	addToBasket,
	decreaseProductQuantity,
	increaseProductQuantity,
	deleteFromBasket,
} = basketSlice.actions;

export default basketSlice.reducer;
