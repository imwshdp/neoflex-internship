import productsReducer from './products';
import categoriesReducer from './categories';
import basketReducer from './basket';
import settingsReducer from './settings';

export default {
	categories: categoriesReducer,
	products: productsReducer,
	basket: basketReducer,
	settings: settingsReducer,
};
