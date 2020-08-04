import * as React from 'react';

import Card from '../Card/card';

import withHoverItem from '../../hocs/with-hover-item/with-hover-item';

import {CardType} from '../../types';


const CardWrap = withHoverItem(Card);

interface Props {
  filmsCards: CardType[],
  onCardTitleClick: (card: CardType) => void,
  filmsCountView: number,
};


const CardsList:React.FC<Props> = ({filmsCards, onCardTitleClick, filmsCountView}) => {

  return (
    <div className="catalog__movies-list">
      {filmsCards
      .slice(0, filmsCountView)
      .map((card, i) => (
        <CardWrap
          key={`${card.name}${i}`}
          card={card}
          onCardTitleClick={onCardTitleClick}
        />
      ))}

    </div>
  )
};

export default CardsList;
