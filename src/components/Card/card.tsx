import * as React from 'react';

import VideoPlayer from '../VideoPlayer/video-player';

import {CardType} from '../../types';


interface Props {
  card: CardType,
  isHover: boolean,
  onCardMouseEnter: (card: CardType) => void | null,
  onCardMouseLeave: () => void | null,
  onCardTitleClick: (card: CardType) => void,
};


const Card: React.FC<Props> = ({card, isHover, onCardMouseEnter, onCardMouseLeave, onCardTitleClick}) => {
  
  const handleCardTitleClick = () => {
    onCardTitleClick(card);
  }

  const handlePointerEnter = () => {
    onCardMouseEnter(card)
  }
  
  const handlePointerLeave = () => {
    onCardMouseLeave();
  }

  return (
    <article 
      className="small-movie-card catalog__movies-card"
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onClick={handleCardTitleClick}
    >
      <div className="small-movie-card__image">
        <VideoPlayer
          card={card}
          isHover={isHover}
        />
        {/* <img src={card.previewImage} alt={card.name} width="280" height="175" /> */}
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href={card.previewVideoLink}>
          {card.name}
        </a>
      </h3>
    </article>
  )
};

export default Card;
