import * as React from 'react';
import * as renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import App from './app';

import {NameSpace} from '../../reducers/name-space';
import {mockListFilms} from '../../mocks/mockListFilms';
import {titleFilm} from '../../consts';


const mockStore = configureStore([]);


describe(`Snapshot <App/>`, () => {
  const store = mockStore({
    [NameSpace.WATCH]: {
      selectedGenre: `All genres`,
      filmCards: mockListFilms,
    },
  });
  it(`Render <App/>`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <App
                titleFilm={titleFilm}
              />
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
