import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { RouteNames } from 'router';
import useAppSelector from 'hooks/useAppSelector';

import BasketIcon from 'resources/icons/BasketIcon';
import FavouritesIcon from 'resources/icons/FavouritesIcon';
import css from './index.module.css';

const Header: React.FC = () => {
  const basketProductsList = useAppSelector(state => state.basket.basketProductsList);
  const quantity = basketProductsList.length;

  return (
    <header id='#header' className={css.header}>
      <Link to={RouteNames.SHOP_ROUTE}>
        <span className={css.logo}>
          QPICK
        </span>
      </Link>
      
      <div className={css.links}>
        <NavLink to={RouteNames.SHOP_ROUTE}>
          <div>
            <FavouritesIcon />
          </div>
        </NavLink>

        <NavLink to={RouteNames.BASKET_ROUTE}>
          <div>
            {quantity > 0 && <div className={css.iconCounter}>{quantity}</div>}
            <BasketIcon />
          </div>
        </NavLink>
      </div>
    </header>
  );
}

export default Header;