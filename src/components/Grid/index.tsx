import * as React from 'react';
import { IProduct } from 'store/slices/products/types';
import useAppSelector from 'hooks/useAppSelector';
import useFilterByCategoryId from 'hooks/useFilterByCategoryId';

import GridItem from 'components/GridItem';
import css from './index.module.css';

interface TProps {
	categoryId: number;
}

const Grid: React.FC<TProps> = ({ categoryId }) => {
	const productsList = useAppSelector(state => state.products.productsList);
	const filteredList: IProduct[] = useFilterByCategoryId({
		array: productsList,
		id: categoryId,
	});

	return (
		<div className={css.grid}>
			{filteredList.map(product => (
				<GridItem key={product.id} item={product} />
			))}
		</div>
	);
};

export default Grid;
