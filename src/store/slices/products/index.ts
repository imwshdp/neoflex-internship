import { createSlice } from '@reduxjs/toolkit';
import { IProductsState } from './types';

import mockProducts from 'resources/mock/productsData';

const initialState: IProductsState = {
	productsList: mockProducts,
};

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
});

export default productsSlice.reducer;
