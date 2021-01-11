import React from 'react';
import { array } from 'prop-types';
import DigimonCard from './DigimonCard';

const InitialDigimons = (props) => {
  const { digimons } = props;

  if (digimons.length === 0) return null;

  return (
    <div className="digimons__container">
      {digimons.map((digimon, idx) => (<DigimonCard key={idx} {...digimon} />))}
    </div>
  );
};

InitialDigimons.propTypes = {
  digimons: array.isRequired,
};

export default InitialDigimons;
