import * as React from 'react';

import {CardType} from '../../../types';
import {getFilmScoreDescription} from '../../../utils/get-film-score-description';


type Props = {
  card: CardType;
};


const Overview: React.FC<Props> = ({card}) => {
  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{card.rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{getFilmScoreDescription(card.rating)}</span>
          <span className="movie-rating__count">{card.scoresCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.</p>

        <p>Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>

        <p className="movie-card__director"><strong>Director: {card.director}</strong></p>

        <p className="movie-card__starring">
          <strong>Starring: 
            {card.starring.map((actor, i) => (
              card.starring.length === i+1 ? ` ${actor}`  : ` ${actor},`
            ))}
          </strong>
        </p>
      </div>
    </>
  )
};

export default Overview;
