import * as React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import Main from '../Main/main';
import InfoFilm from '../InfoFilm/info-film';

import {getGenresList, getFilmCards} from '../../redusers/watch/selectors';

import {CardType, TitleFilm} from '../../types';
import {appRoute} from '../../consts';


interface Props {
  titleFilm: TitleFilm,
  catalogMoviesList: CardType[],
  genreList: string[],
  filmsCards: CardType[],
};

interface State {
  activeFilm: CardType,
};


class App extends React.PureComponent<Props, State> {

  state: State;
  props: Props;

  constructor(props) {
    super(props);
    this._renderMainPage = this._renderMainPage.bind(this);
    this._handleCardTitleClick = this._handleCardTitleClick.bind(this);
    
    this.state = {
      activeFilm: null
    };
  }

  _handleCardTitleClick = (film) => {
    this.setState({activeFilm: film});
  };

  _renderMainPage() {
    const {activeFilm} = this.state;
    const {titleFilm, catalogMoviesList, genreList, filmsCards} = this.props;
    console.log('filmsCards: ', filmsCards);
    console.log('genreList: ', genreList);

    if (activeFilm) {
      return <InfoFilm card={activeFilm} onCardTitleClick={this._handleCardTitleClick}/>
    } else {
      return (
        <Main
        titleFilm={titleFilm}
        catalogMoviesList={catalogMoviesList}
        onCardTitleClick={this._handleCardTitleClick}
      />
      )
    }
  }

  render() {
    const {catalogMoviesList} = this.props;
    
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path={appRoute.ROOT}>
              {this._renderMainPage()}
            </Route>

            {/* <Route exact path={appRoute.FILM}>
              <InfoFilm card={activeFilm}/>
            </Route> */}

            <Route exact path="/dev-info">
              <InfoFilm card={catalogMoviesList[0]} onCardTitleClick={this._handleCardTitleClick}/>
            </Route>
          </Switch>
        </BrowserRouter>
        
      </>
    );
  };
};

const mapStateToProps = (state) => ({
  genreList: getGenresList(state),
  filmsCards: getFilmCards(state),
});

// const mapDispatchToProps = (dispatch) => ({
// });

export {App};
export default connect(mapStateToProps)(App);

