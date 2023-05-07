import { IProduct } from 'store/slices/products/types';
import mockCategories from './categoriesData';

const mockProducts: IProduct[] = [
	{
		id: 1,
		categoryId: mockCategories[0].id,
		name: 'Apple BYZ S852I',
		img: '/assets/Apple-BYZ-S852I.png',
		price: 3527,
		discount: 0.2,
		rate: 4.7,
	},
	{
		id: 2,
		categoryId: mockCategories[0].id,
		name: 'Apple EarPods',
		img: '/assets/Apple-EarPods.png',
		price: 2327,
		rate: 4.5,
	},
	{
		id: 3,
		categoryId: mockCategories[0].id,
		name: 'Apple EarPods',
		img: '/assets/Apple-EarPods-2.png',
		price: 2327,
		rate: 4.5,
	},
	{
		id: 4,
		categoryId: mockCategories[0].id,
		name: 'Apple BYZ S852I',
		img: '/assets/Apple-BYZ-S852I.png',
		price: 3527,
		rate: 4.7,
	},
	{
		id: 5,
		categoryId: mockCategories[0].id,
		name: 'Apple EarPods',
		img: '/assets/Apple-EarPods.png',
		price: 2327,
		rate: 4.5,
	},
	{
		id: 6,
		categoryId: mockCategories[0].id,
		name: 'Apple EarPods',
		img: '/assets/Apple-EarPods-2.png',
		price: 2327,
		rate: 4.5,
	},

	// wireless headphones
	{
		id: 7,
		categoryId: mockCategories[1].id,
		name: 'Apple EarPods',
		img: '/assets/Apple-AirPods-3.png',
		price: 3527,
		rate: 4.7,
	},
	{
		id: 8,
		categoryId: mockCategories[1].id,
		name: 'GERLAX GH-04',
		img: '/assets/GERLAX-GH-04.png',
		price: 2327,
		rate: 4.5,
	},
	{
		id: 9,
		categoryId: mockCategories[1].id,
		name: 'BOROFONE BO4',
		img: '/assets/BOROFONE-BO4.png',
		price: 2327,
		rate: 4.5,
	},
];

export default mockProducts;
