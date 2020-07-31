import * as React from 'react';
import cl from 'classnames';

import Overview from '../Overview/overview';
import Details from '../Details/details';
import Reviews from  '../Reviews/reviews';

import {CardType} from '../../../types';
import {MovieTabNames} from '../../../consts';


interface Props {
  card: CardType;
};

interface State {
  activeTab: number;
}


class MovieTabs extends React.PureComponent<Props, State> {
  state: State;
  props: Props;

  constructor(props) {
    super(props);
    this.handleTabSelect = this.handleTabSelect.bind(this);

    this.state = {
      activeTab: 0,
    };
  }

  handleTabSelect(tab) {
    this.setState({activeTab: tab})
  }

  render() {
    const {activeTab} = this.state;
    const {card} = this.props;

    return (
      <>
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {MovieTabNames.map((tab, i) => (
              <li 
                id={`i${i}`}
                key={tab}
                className={cl(`movie-nav__item`, {[`movie-nav__item--active`]: activeTab === i})}
                onClick={() => this.handleTabSelect(i)}
              >
                <a href={`#i ${i}`} className="movie-nav__link">{tab}</a>
              </li>
            ))}
          </ul>
        </nav>
        {activeTab === 0 ? <Overview card={card} /> :
         activeTab === 1 ? <Details card={card} /> :
         activeTab === 2 ? <Reviews /> : null
        }
      </>
    );
  }
};

export default MovieTabs;
