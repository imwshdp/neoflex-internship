
import { useEffect } from 'react';
import { fetchBasketData } from 'store/slices/basket';
import useAppDispatch from 'hooks/useAppDispatch';

import 'resources/styles/index.css';
import AppRouter from './components/AppRouter';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(fetchBasketData());
  }, []);

  return (
    <AppRouter />
  );
}

export default App;