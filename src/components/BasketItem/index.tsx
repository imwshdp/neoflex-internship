import * as React from 'react';
import { deleteFromBasket } from 'store/slices/basket';
import { IBasketProduct } from 'store/slices/basket/types';
import useAppDispatch from 'hooks/useAppDispatch';
import getDiscountedPrice from 'helpers/getDiscountedPrice';

import TrashBinIcon from 'resources/icons/TrashBinIcon';
import Counter from 'components/Counter';
import css from './index.module.css';

interface TProps {
	item: IBasketProduct;
}

const BasketItem: React.FC<TProps> = ({ item }) => {
	const dispatch = useAppDispatch();
	const deleteItem = () => dispatch(deleteFromBasket({ id: item.id }));

	const currentPrice = getDiscountedPrice(
		item.product.price,
		item.product.discount
	);

	return (
		<section className={css.basketItem}>
			<div className={css.grid_1}>
				<div className={css.imageWrapper}>
					<img src={item.product.img} />
				</div>

				<Counter itemId={item.id}>{item.quantity}</Counter>
			</div>

			<div className={css.grid_2}>
				<span>{item.product.name}</span>
				<span>{currentPrice} ₽</span>
			</div>

			<div className={css.grid_3}>
				<div className={css.deleteIcon} onClick={deleteItem}>
					<TrashBinIcon />
				</div>

				<span>{item.sum} ₽</span>
			</div>
		</section>
	);
};

export default BasketItem;
