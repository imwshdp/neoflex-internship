import * as React from 'react';
import css from './index.module.css';

const AsidesRow: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className={css.asidesRow}>
      {children}
    </div>
  );
}

export default AsidesRow;