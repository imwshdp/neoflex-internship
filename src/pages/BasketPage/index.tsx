import * as React from 'react';
import { useTranslation } from 'react-i18next';
import useAppSelector from 'hooks/useAppSelector';

import BasketItem from 'components/BasketItem';
import BasketForm from 'components/BasketForm';
import css from './index.module.css';

const BasketPage: React.FC = () => {
	const basketData = useAppSelector(state => state.basket);
	const { t, i18n } = useTranslation();

	return (
		<main className={css.basketWrapper}>
			<h1>{t('Basket')}</h1>

			<section className={css.basketProductsList}>
				{basketData.basketProductsList.map(basketProduct => (
					<BasketItem
						key={basketProduct.id + Date.now()}
						item={basketProduct}
					/>
				))}
			</section>

			<BasketForm sum={basketData.totalSum} />
		</main>
	);
};

export default BasketPage;
