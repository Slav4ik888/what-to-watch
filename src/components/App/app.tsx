import * as React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Main from '../Main/main';
import InfoFilm from '../InfoFilm/info-film';

import {CardType} from '../../types';


type Props = {
  name: string,
  genre: string,
  released: number,
  catalogMoviesList: CardType[],
};

const _handleCardTitleClick = () => {
  // console.log(`handleCardTitleClick`);
};

const App: React.FC<Props> = ({name, genre, released, catalogMoviesList}) => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main
              name={name}
              genre={genre}
              released={released}
              catalogMoviesList={catalogMoviesList}
              onCardTitleClick={_handleCardTitleClick}
            />
          </Route>

          <Route exact path="/dev-info">
            <InfoFilm card={catalogMoviesList[0]}/>
          </Route>
        </Switch>
      </BrowserRouter>
      
    </>
  );
};

export default App;
