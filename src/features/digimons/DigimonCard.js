import React from 'react';
import { string } from 'prop-types';

const DigimonCard = (props) => {
  const { name, img, level } = props;

  return (
    <div className="digimonCard box">
      <div className="digimonCard__imgContainer">
        <img src={img} alt="Digimon" className="digimonCard__img" />
        <div className="digimonCard__levelContainer">
          <span className="digimonCard__level">
            {level}
            {' '}
            Level
          </span>
        </div>
        <span className="digimonCard__name">{name}</span>
      </div>
    </div>
  );
};

DigimonCard.propTypes = {
  name: string.isRequired,
  img: string.isRequired,
  level: string.isRequired,
};

export default DigimonCard;
