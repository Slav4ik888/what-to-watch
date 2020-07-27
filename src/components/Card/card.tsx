import * as React from 'react';

import VideoPlayer from '../VideoPlayer/video-player';

import {CardType} from '../../types';


interface Props {
  card: CardType;
  onHoverFilm: (card: CardType) => void;
  onCardTitleClick: (card: CardType) => void;
};

interface State {
  isPlaying: boolean;
}

class Card extends React.PureComponent<Props, State> {
  constructor(props) {
    super(props);
    this.handlePointerEnter = this.handlePointerEnter.bind(this);
    this.handlePointerLeave = this.handlePointerLeave.bind(this);
    this.handleCardTitleClick = this.handleCardTitleClick.bind(this);

    this.state = {
      isPlaying: false,
    };
  }

  handlePointerEnter = () => {
    this.props.onHoverFilm(this.props.card)
    this.setState({isPlaying: true})
  }
  handlePointerLeave = () => {
    this.setState({isPlaying: false})
  }

  handleCardTitleClick = () => {
    this.props.onCardTitleClick(this.props.card);
  }

  render() {
    return (
      <article 
        className="small-movie-card catalog__movies-card"
        onPointerEnter={this.handlePointerEnter}
        onPointerLeave={this.handlePointerLeave}
        onClick={this.handleCardTitleClick}
      >
        <div className="small-movie-card__image">
          <VideoPlayer
            card={this.props.card}
            isPlaying={this.state.isPlaying}
          />
          {/* <img src={card.previewImage} alt={card.name} width="280" height="175" /> */}
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href={this.props.card.previewVideoLink}>
            {this.props.card.name}
          </a>
        </h3>
      </article>
    )
  }
};

export default Card;
