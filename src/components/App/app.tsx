import * as React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import Main from '../Main/main';
import InfoFilm from '../InfoFilm/info-film';

import {ActionCreator} from '../../reducers/watch/watch';
import {getActiveFilm} from '../../reducers/watch/selectors';

import {CardType, TitleFilm} from '../../types';
import {AppRoute} from '../../consts';


interface Props {
  titleFilm: TitleFilm,
  activeFilm: CardType | null,
  setActiveFilm: (film: CardType) => void;
};


class App extends React.PureComponent<Props, {}> {

  props: Props;

  constructor(props) {
    super(props);
    this._renderMainPage = this._renderMainPage.bind(this);
    this._handleCardTitleClick = this._handleCardTitleClick.bind(this);
    
  }

  _handleCardTitleClick = (film) => {
    this.props.setActiveFilm(film);
  };

  _renderMainPage() {
    const {activeFilm, titleFilm} = this.props;

    if (activeFilm) {
      return (
        <InfoFilm
          card={activeFilm}
          onCardTitleClick={this._handleCardTitleClick}
        />
      )
    } else {
      return (
        <Main
        titleFilm={titleFilm}
        onCardTitleClick={this._handleCardTitleClick}
      />
      )
    }
  }

  render() {
    
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path={AppRoute.ROOT}>
              {this._renderMainPage()}
            </Route>

            {/* <Route exact path={appRoute.FILM}>
              <InfoFilm card={activeFilm}/>
            </Route> */}

            {/* <Route exact path="/dev-info">
              <InfoFilm card={catalogMoviesList[0]} onCardTitleClick={this._handleCardTitleClick}/>
            </Route> */}
          </Switch>
        </BrowserRouter>
        
      </>
    );
  };
};

const mapStateToProps = (state) => ({
  activeFilm: getActiveFilm(state),
});

const mapDispatchToProps = (dispatch) => ({
  setActiveFilm(film) {
    dispatch(ActionCreator.setActiveFilm(film));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
