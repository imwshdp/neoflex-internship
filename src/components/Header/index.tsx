import * as React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { RouteNames } from 'router';
import useAppSelector from 'hooks/useAppSelector';

import BasketIcon from 'resources/icons/BasketIcon';
import FavoritesIcon from 'resources/icons/FavoritesIcon';
import css from './index.module.css';

const Header: React.FC = () => {
	const basketProductsList = useAppSelector(
		state => state.basket.basketProductsList
	);
	const navigate = useNavigate();

	const quantity = basketProductsList.length;

	return (
		<header className={css.header}>
			<span
				className={css.logo}
				onClick={() => navigate(RouteNames.SHOP_ROUTE, { replace: true })}>
				QPICK
			</span>

			<div className={css.links}>
				<NavLink to={RouteNames.SHOP_ROUTE}>
					<div>
						<FavoritesIcon />
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
};

export default Header;
