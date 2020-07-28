import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './components/App/app';

import {mockListFilms} from './mocks/mockListFilms';
import {CardType} from './types';
import {titleFilm} from './consts';



ReactDOM.render(
    <App
      titleFilm={titleFilm}
      catalogMoviesList={mockListFilms}
    />
  , document.getElementById(`root`));
