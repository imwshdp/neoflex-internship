import BasketPage from 'pages/BasketPage';
import ShopPage from 'pages/ShopPage';

export interface Route {
	path?: string;
	index?: boolean;
	element: React.ComponentType;
}

export const RouteNames = {
	SHOP_ROUTE: '/',
	BASKET_ROUTE: '/basket',
};

export const appRoutes: Route[] = [
	{
		index: true,
		element: ShopPage,
	},
	{
		path: RouteNames.BASKET_ROUTE,
		element: BasketPage,
	},
];
