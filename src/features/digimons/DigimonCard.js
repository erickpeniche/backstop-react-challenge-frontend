import React from 'react';
import { number, string } from 'prop-types';

const DigimonCard = (props) => {
  const { name, img, level } = props;

  return (
    <div className="digimonCard box">
      <div className="digimonCard__imgContainer">
        <img src={img} alt="Digimon Picture" className="digimonCard__img" />
        <div className="digimonCard__levelContainer">
          <span className="digimonCard__level">{level}</span>
        </div>
        <span className="digimonCard__name">{name}</span>
      </div>
      <div className="digimonCard__info" />
    </div>
  );
};

DigimonCard.propTypes = {
  name: string.isRequired,
  id: number,
  img: string.isRequired,
  level: string.isRequired,
};

export default DigimonCard;
