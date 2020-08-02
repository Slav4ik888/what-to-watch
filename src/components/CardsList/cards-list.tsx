import * as React from 'react';

import Card from '../Card/card';

import {CardType} from '../../types';


interface Props {
  filmsCards: CardType[],
  onCardTitleClick: (card: CardType) => void,
  filmsCountView: number,
};


interface State {
  hoverFilm: CardType | null,
};


class CardsList extends React.PureComponent<Props, State> {
  state: State;
  props: Props;

  constructor(props) {
    super(props);
    this._handleHoverFilm = this._handleHoverFilm.bind(this);
    this.state = {
      hoverFilm: null,
    };
  }

  _handleHoverFilm(film: CardType) {
    this.setState({hoverFilm: film});
  }

  render() {
    const {filmsCards, onCardTitleClick, filmsCountView} = this.props;

    return (
      <div className="catalog__movies-list">
        {filmsCards
        .slice(0, filmsCountView)
        .map((card, i) => (
          <Card
            key={`${card.name}${i}`}
            card={card}
            onHoverFilm={this._handleHoverFilm}
            onCardTitleClick={onCardTitleClick}
          />
        ))}

      </div>
    )
  };
};

export default CardsList;
