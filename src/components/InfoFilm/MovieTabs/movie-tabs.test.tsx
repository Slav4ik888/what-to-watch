import * as React from "react";
import * as renderer from "react-test-renderer";

import MovieTabs from './movie-tabs';

import {mockListFilms} from '../../../mocks/mockListFilms';


describe(`Snapshot <MovieTabs/>`, () => {
  it(`Render <MovieTabs/> `, () => {
    const tree = renderer
      .create(
          <MovieTabs
            card={mockListFilms[0]}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
