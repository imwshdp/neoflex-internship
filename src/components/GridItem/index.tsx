import * as React from 'react';
import { IProduct } from 'store/slices/products/types';
import { addToBasket } from 'store/slices/basket';
import useAppDispatch from 'hooks/useAppDispatch';

import RateIcon from 'resources/icons/RateIcon';
import AsidesRow from 'components/AsidesRow';
import css from './index.module.css';

interface TProps {
  item: IProduct;
}

const GridItem: React.FC<TProps> = ({ item }) => {
  const dispatch = useAppDispatch();
  const addProductToBasket = () => dispatch(addToBasket(item));

  const currentPrice = item.discount
    ? Math.round(item.price * (1 - item.discount))
    : item.price;

  const discounted = item.discount ? true : false;

  return (
    <section className={css.gridItem}>
      <div className={css.imageWrapper}>
        <img src={`${process.env.PUBLIC_URL}` + item.img} />
      </div>

      <AsidesRow>
        <span>{item.name}</span>
        <span className='activeColor'>{currentPrice} ₽</span>
        {discounted && <del className={css.oldPrice}>{item.price} ₽</del>}
      </AsidesRow>

      <AsidesRow>
        <div className={css.price}>
          <RateIcon />
          <span>{item.rate}</span>
        </div>
        <button
          className={css.buyButton}
          onClick={addProductToBasket}
        >
          Купить
        </button>
      </AsidesRow>
    </section>
  );
}

export default GridItem;