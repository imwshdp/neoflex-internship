import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IBasketState, ICounterAction } from "./types";
import { IProduct } from "../products/types";

import getDiscountedPrice from "helpers/getDiscountedPrice";
import { getDataFromSessionStorage, updateSessionStorage } from "helpers/sessionStorage";

const initialState: IBasketState = {
  basketProductsList: [],
  totalSum: 0,
}

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    fetchBasketData(state) {
      const data: IBasketState | null = getDataFromSessionStorage();
      if (data) {
        state.basketProductsList = data.basketProductsList;
        state.totalSum = data.totalSum;
      }
    },

    addToBasket(state, action: PayloadAction<IProduct>) {
      const candidate = state.basketProductsList.find(basketProduct => basketProduct.id === action.payload.id);
      let currentPrice = 0;

      if (candidate) { // increase quantity
        currentPrice = getDiscountedPrice(candidate.product.price, candidate.product.discount);

        candidate.quantity++;
        candidate.sum += currentPrice;
        state.totalSum += currentPrice; // update total sum

      } else { // push new product to state
        currentPrice = getDiscountedPrice(action.payload.price, action.payload.discount);

        state.basketProductsList.push({
          id: action.payload.id,
          product: action.payload,
          quantity: 1,
          sum: currentPrice,
        })
        state.totalSum += currentPrice; // update total sum
      }

      updateSessionStorage(state);
    },

    decreaseProductQuantity(state, action: PayloadAction<ICounterAction>) {
      const basketProduct = state.basketProductsList.find(basketProduct => basketProduct.id === action.payload.id);
      let currentPrice = 0;

      if (basketProduct?.quantity) {
        if (basketProduct.quantity === 1) { // delete from basket
          state.basketProductsList = state.basketProductsList.filter(basketProduct => basketProduct.id !== action.payload.id);
        } else { // decrease
          currentPrice = getDiscountedPrice(basketProduct.product.price, basketProduct.product.discount);
          basketProduct.quantity--;
          basketProduct.sum -= currentPrice;
        }

        state.totalSum -= currentPrice;
        updateSessionStorage(state);
      }
    },

    increaseProductQuantity(state, action: PayloadAction<ICounterAction>) {
      const basketProduct = state.basketProductsList.find(basketProduct => basketProduct.id === action.payload.id);
      let currentPrice = 0;

      if (basketProduct?.quantity) {
        currentPrice = getDiscountedPrice(basketProduct.product.price, basketProduct.product.discount);
        basketProduct.quantity++;
        basketProduct.sum += currentPrice;
        state.totalSum += currentPrice;
      }

      updateSessionStorage(state);
    },

    deleteFromBasket(state, action: PayloadAction<ICounterAction>) {
      const basketProduct = state.basketProductsList.find(basketProduct => basketProduct.id === action.payload.id);
      let currentPrice = 0;

      if (basketProduct) {
        currentPrice = getDiscountedPrice(basketProduct.product.price, basketProduct.product.discount);
        state.totalSum -= currentPrice * basketProduct?.quantity;
      }

      state.basketProductsList = state.basketProductsList.filter(basketProduct => basketProduct.id !== action.payload.id);
      updateSessionStorage(state);
    }
  }
})

export const {
  addToBasket,
  fetchBasketData,
  decreaseProductQuantity,
  increaseProductQuantity,
  deleteFromBasket
} = basketSlice.actions;

export default basketSlice.reducer;