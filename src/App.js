import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectInitialDigimons,
  selectIsLoadingInitial,
  requestInitialDigimons,
  // selectError,
} from './features/digimons/digimonsSlice';
import Header from './features/header/Header';

const App = () => {
  const initialDigimons = useSelector(selectInitialDigimons);
  const isLoadingInitialDigimons = useSelector(selectIsLoadingInitial);
  const dispatch = useDispatch();

  console.log('Rendering <APP>...');

  useEffect(() => {
    dispatch(requestInitialDigimons());
  }, []);

  console.log({ initialDigimons, isLoadingInitialDigimons });

  return (
    <div className="app">
      <Header />
      <main className="app__content" />
    </div>
  );
};

export default App;
