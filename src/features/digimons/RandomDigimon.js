import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsLoadingRandom,
  selectRandomDigimon,
  requestRandomDigimon,
  // selectError,
} from './digimonsSlice';
import DigimonCard from './DigimonCard';

const RandomDigimon = () => {
  const randomDigimon = useSelector(selectRandomDigimon);
  const isLoadingRandom = useSelector(selectIsLoadingRandom);
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(requestRandomDigimon());
  };

  const renderDigimonPlaceholder = () => (
    <span className="randomDigimon__placeholder">?</span>
  );

  const renderDigimonLoadingIndicator = () => (
    <progress className="progress is-info" max="100" />
  );

  return (
    <div className="randomDigimon__container box">
      {!randomDigimon && !isLoadingRandom && renderDigimonPlaceholder() }
      {isLoadingRandom && renderDigimonLoadingIndicator() }
      {randomDigimon && !isLoadingRandom && (
        <DigimonCard
          name={randomDigimon.name}
          img={randomDigimon.img}
          level={randomDigimon.level}
        />
      )}
      <button
        className={`randomDigimon__btn button is-info is-large is-fullwidth ${isLoadingRandom ? 'is-loading' : ''}`}
        onClick={handleOnClick}
        type="button"
      >
        Get random digimon!
      </button>
    </div>
  );
};

export default RandomDigimon;
