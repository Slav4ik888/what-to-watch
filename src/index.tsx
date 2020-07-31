import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from './components/App/app';

import reducer from './redusers/reducer';

import {mockListFilms} from './mocks/mockListFilms';
// import {CardType} from './types';
import {titleFilm} from './consts';


const store = createStore(
  reducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
    <Provider store={store}>
      <App
        titleFilm={titleFilm}
        catalogMoviesList={mockListFilms}
      />
    </Provider>
  , document.getElementById(`root`));
