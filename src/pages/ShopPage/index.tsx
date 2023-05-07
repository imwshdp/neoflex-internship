import * as React from 'react';
import useAppSelector from 'hooks/useAppSelector';

import Grid from 'components/Grid';
import css from './index.module.css';

const ShopPage: React.FC = () => {
	const categoriesList = useAppSelector(
		state => state.categories.categoriesList
	);

	return (
		<main className={css.shopWrapper}>
			{categoriesList &&
				categoriesList.map(category => (
					<React.Fragment key={category.id}>
						<h1>{category.name}</h1>
						<Grid categoryId={category.id} />
					</React.Fragment>
				))}
		</main>
	);
};

export default ShopPage;
