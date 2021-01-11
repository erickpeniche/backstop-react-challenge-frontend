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
import RandomDigimon from './features/digimons/RandomDigimon';

const App = () => {
  const initialDigimons = useSelector(selectInitialDigimons);
  const isLoadingInitialDigimons = useSelector(selectIsLoadingInitial);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestInitialDigimons());
  }, []);

  const renderInitialLoadingIndicator = () => (
    <progress className="progress is-info" max="100" />
  );

  return (
    <div className="app">
      <Header />
      <main className="app__content">
        {isLoadingInitialDigimons && renderInitialLoadingIndicator()}
        {!isLoadingInitialDigimons && <InitialDigimons digimons={initialDigimons} />}
        <RandomDigimon />
      </main>
    </div>
  );
};

export default App;
