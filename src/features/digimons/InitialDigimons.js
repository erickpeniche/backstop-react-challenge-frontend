import React from 'react';
import { array } from 'prop-types';
import DigimonCard from './DigimonCard';

const InitialDigimons = (props) => {
  const { digimons } = props;

  if (digimons.length === 0) return null;

  return (
    <div className="digimons__container">
      {digimons.map(({
        id, name, level, img,
      }) => (
        <DigimonCard
          key={id}
          name={name}
          level={level}
          img={img}
        />
      ))}
    </div>
  );
};

InitialDigimons.propTypes = {
  digimons: array.isRequired,
};

export default InitialDigimons;
