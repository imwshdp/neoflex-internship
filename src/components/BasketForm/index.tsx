import * as React from 'react';
import { useTranslation } from 'react-i18next';
import css from './index.module.css';

interface TProps {
	sum: number;
}

const BasketForm: React.FC<TProps> = ({ sum }) => {
	const { t, i18n } = useTranslation();

	return (
		<form className={css.orderForm}>
			<div className={css.totalPanel}>
				<span>{t('Total').toUpperCase()}</span>
				<span>₽ {sum}</span>
			</div>

			<button
				className={css.confirmOrderButton}
				onClick={e => e.preventDefault()}>
				{t('MakeAnOrder')}
			</button>
		</form>
	);
};

export default BasketForm;
