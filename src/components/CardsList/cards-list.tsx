import * as React from 'react';

import Card from '../Card/card';

import {CardType} from '../../types';


interface Props {
  catalogMoviesList: CardType[],
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
    // console.log('film: ', film);
    this.setState({hoverFilm: film});
  }

  render() {
    const {catalogMoviesList} = this.props;

    return (
      <div className="catalog__movies-list">
        {catalogMoviesList.map((card, i) => (
          <Card
            key={`${card.name}${i}`}
            card={card}
            onHoverFilm={this._handleHoverFilm}
          />
        ))}

      </div>
    )
  };
};

export default CardsList;
