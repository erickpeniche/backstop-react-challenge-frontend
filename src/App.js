import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectInitialDigimons,
  selectIsLoadingInitial,
  requestInitialDigimons,
  // selectError,
} from './features/digimons/digimonsSlice';
import Header from './features/header/Header';
import InitialDigimons from './features/digimons/InitialDigimons';

const App = () => {
  const initialDigimons = useSelector(selectInitialDigimons);
  const isLoadingInitialDigimons = useSelector(selectIsLoadingInitial);
  const dispatch = useDispatch();

  console.log('Rendering <APP>...');

  useEffect(() => {
    dispatch(requestInitialDigimons());
  }, []);

  console.log({ initialDigimons, isLoadingInitialDigimons });

  const renderInitialLoadingIndicator = () => (
    <progress className="progress is-danger" max="100" />
  );

  return (
    <div className="app">
      <Header />
      <main className="app__content">
        {isLoadingInitialDigimons && renderInitialLoadingIndicator()}
        {!isLoadingInitialDigimons && <InitialDigimons digimons={initialDigimons} />}
      </main>
    </div>
  );
};

export default App;
