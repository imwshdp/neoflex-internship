import * as React from 'react';
import {
	decreaseProductQuantity,
	increaseProductQuantity,
} from 'store/slices/basket';
import useAppDispatch from 'hooks/useAppDispatch';

import Plus from 'resources/icons/CounterIcons/Plus';
import Minus from 'resources/icons/CounterIcons/Minus';
import css from './index.module.css';

interface TProps {
	itemId: number;
}

const Counter: React.FC<TProps & React.PropsWithChildren> = ({
	itemId,
	children,
}) => {
	const dispatch = useAppDispatch();

	const increase = () => dispatch(increaseProductQuantity({ id: itemId }));
	const decrease = () => dispatch(decreaseProductQuantity({ id: itemId }));

	return (
		<div className={css.counter}>
			<button className={css.counterButton} onClick={decrease}>
				<Minus />
			</button>

			<span>{children}</span>

			<button className={css.counterButton} onClick={increase}>
				<Plus />
			</button>
		</div>
	);
};

export default Counter;
