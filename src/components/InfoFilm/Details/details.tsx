import * as React from 'react';

import {CardType} from '../../../types';
import {getFilmTime} from '../../../utils/utils';


type Props = {
  card: CardType;
};


const Details: React.FC<Props> = ({card}) => {
  return (
    <>
      <div className="movie-card__text movie-card__row">
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Director</strong>
            <span className="movie-card__details-value">{card.director}</span>
          </p>
          <div className="movie-card__details-item">
            <strong className="movie-card__details-name">Starring</strong>
            <span className="movie-card__details-value">
              {card.starring.map((star) => (
                  <div key={star}>{star} <br /></div>
              )) 
              }
            </span>
          </div>
        </div>

        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Run Time</strong>
            <span className="movie-card__details-value">{getFilmTime(card.runTime)}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Genre</strong>
            <span className="movie-card__details-value">{card.genre}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Released</strong>
            <span className="movie-card__details-value">{card.released}</span>
          </p>
        </div>
      </div>
    </>
  )
};

export default Details;
