import * as React from "react";
import * as renderer from "react-test-renderer";

import App from './app';

import {mockListFilms} from '../../mocks/mockListFilms';
import {titleFilm} from '../../consts';



describe(`Snapshot <App/>`, () => {
  it(`Render <App/>`, () => {
    const tree = renderer
      .create(
          <App
            titleFilm={titleFilm}
            catalogMoviesList={mockListFilms}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
