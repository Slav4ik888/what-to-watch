import * as React from 'react';

import {CardType} from '../../types';


type Props = {
  card: CardType;
  onHoverFilm: (card: CardType) => void;
};


const Card: React.FC<Props> = ({card, onHoverFilm}) => {
  const handlePointerEnter = () => {
    onHoverFilm(card);
  }

  return (
    <article 
      className="small-movie-card catalog__movies-card"
      onPointerEnter={handlePointerEnter}
    >
      <div className="small-movie-card__image">
        <img src={card.previewImage} alt={card.name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href={card.previewVideoLink}>{card.name}</a>
      </h3>
    </article>
  )
};

export default Card;
