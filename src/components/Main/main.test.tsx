import * as React from "react";
import * as renderer from "react-test-renderer";

import Main from './main';

import {mockListFilms} from '../../mocks/mockListFilms';
import {titleFilm} from '../../consts';


describe(`Snapshot <Main/>`, () => {
  it(`Render <Main/>`, () => {
    const tree = renderer
      .create(
          <Main
            titleFilm={titleFilm}
            catalogMoviesList={mockListFilms}
            onCardTitleClick={() => {}}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
