import { PayloadAction } from '@reduxjs/toolkit';
import { IBasketState, ICounterAction } from './types';
import { IProduct } from '../products/types';
import getDiscountedPrice from 'helpers/getDiscountedPrice';
import {
	getDataFromSessionStorage,
	saveBasketToSessionStorage,
} from 'helpers/sessionStorage';

export const fetchAction = (state: IBasketState) => {
	const data: IBasketState | null = getDataFromSessionStorage();
	if (data) {
		state.basketProductsList = data.basketProductsList;
		state.totalSum = data.totalSum;
	}
};

export const addAction = (
	state: IBasketState,
	action: PayloadAction<IProduct>
) => {
	const candidate = state.basketProductsList.find(
		basketProduct => basketProduct.id === action.payload.id
	);
	let currentPrice = 0;

	if (candidate) {
		currentPrice = getDiscountedPrice(
			candidate.product.price,
			candidate.product.discount
		);

		candidate.quantity++; // increase quantity
		candidate.sum += currentPrice; // update sum
		state.totalSum += currentPrice; // update total sum
	} else {
		currentPrice = getDiscountedPrice(
			action.payload.price,
			action.payload.discount
		);

		state.basketProductsList.push({
			id: action.payload.id,
			product: action.payload,
			quantity: 1,
			sum: currentPrice,
		}); // push new product to state
		state.totalSum += currentPrice; // update total sum
	}

	saveBasketToSessionStorage(state); // save basket to session storage
};

export const decreaseAction = (
	state: IBasketState,
	action: PayloadAction<ICounterAction>
) => {
	const basketProduct = state.basketProductsList.find(
		basketProduct => basketProduct.id === action.payload.id
	);
	let currentPrice = 0;

	if (basketProduct) {
		// delete from basket if quantity is 1
		if (basketProduct.quantity === 1) {
			state.basketProductsList = state.basketProductsList.filter(
				basketProduct => basketProduct.id !== action.payload.id
			);
		} else {
			currentPrice = getDiscountedPrice(
				basketProduct.product.price,
				basketProduct.product.discount
			);
			basketProduct.quantity--; // decrease quantity
			basketProduct.sum -= currentPrice; // update sum
		}

		state.totalSum -= currentPrice; // update total sum
		saveBasketToSessionStorage(state); // save basket to session storage
	}
};

export const increaseAction = (
	state: IBasketState,
	action: PayloadAction<ICounterAction>
) => {
	const basketProduct = state.basketProductsList.find(
		basketProduct => basketProduct.id === action.payload.id
	);
	let currentPrice = 0;

	if (basketProduct) {
		currentPrice = getDiscountedPrice(
			basketProduct.product.price,
			basketProduct.product.discount
		);
		basketProduct.quantity++; // increase quantity
		basketProduct.sum += currentPrice; // update sum
		state.totalSum += currentPrice; // update total sum
	}

	saveBasketToSessionStorage(state); // save basket to session storage
};

export const deleteAction = (
	state: IBasketState,
	action: PayloadAction<ICounterAction>
) => {
	const basketProduct = state.basketProductsList.find(
		basketProduct => basketProduct.id === action.payload.id
	);
	let currentPrice = 0;

	if (basketProduct) {
		currentPrice = getDiscountedPrice(
			basketProduct.product.price,
			basketProduct.product.discount
		);
		state.totalSum -= currentPrice * basketProduct.quantity; // update total sum
	}

	state.basketProductsList = state.basketProductsList.filter(
		basketProduct => basketProduct.id !== action.payload.id
	); // filter basket list by id

	saveBasketToSessionStorage(state); // save basket to session storage
};
