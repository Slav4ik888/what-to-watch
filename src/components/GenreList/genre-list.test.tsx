import * as React from "react";
import * as renderer from "react-test-renderer";
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import GenreList from './genre-list';

import {NameSpace} from '../../redusers/name-space';
import {mockListFilms} from '../../mocks/mockListFilms';


const mockStore = configureStore([]);


describe(`Snapshot <GenreList/>`, () => {
  it(`Render <GenreList/>`, () => {
    const store = mockStore({
      [NameSpace.WATCH]: {
        selectedGenre: `All genres`,
        filmCards: mockListFilms,
      },
    });
    const tree = renderer
        .create(
          <Provider store={store}>
            <GenreList
              />
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
