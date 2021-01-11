import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectInitialDigimons,
  selectIsLoadingInitial,
  requestInitialDigimons,
  // selectError,
} from './features/digimons/digimonsSlice';

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
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Hello, World!
            </h1>
            <h2 className="subtitle">
              Subtitle
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
