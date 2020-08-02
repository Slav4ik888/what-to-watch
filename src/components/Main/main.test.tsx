import * as React from 'react';
import * as renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import {Main} from './main';

import {NameSpace} from '../../redusers/name-space';
import {mockListFilms} from '../../mocks/mockListFilms';
import {titleFilm} from '../../consts';


const mockStore = configureStore([]);


describe(`Snapshot <Main/>`, () => {
  it(`Render <Main/>`, () => {
    const store = mockStore({
      [NameSpace.WATCH]: {
        selectedGenre: `All genres`,
        filmCards: mockListFilms,
        filmsCountView: 8,
      },
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <Main
              titleFilm={titleFilm}
              filtredList={mockListFilms}
              onCardTitleClick={() => {}}
              filmsCountView={8}
              handleShowMore={() => {}}

            />
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
