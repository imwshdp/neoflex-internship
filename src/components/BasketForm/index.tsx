import * as React from 'react';
import css from './index.module.css';

interface TProps {
  sum: number;
}

const BasketForm: React.FC<TProps> = ({ sum }) => {
  return (
    <form className={css.orderForm}>
      <div className={css.totalPanel}>
        <span>ИТОГО</span>
        <span>₽ {sum}</span>
      </div>

      <button
        className={css.confirmOrderButton}
        onClick={(e) => e.preventDefault()}
      >
        Перейти к оформлению
      </button>
    </form>
  );
}

export default BasketForm;