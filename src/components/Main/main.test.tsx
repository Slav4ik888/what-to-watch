import * as React from "react";
import * as renderer from "react-test-renderer";

import Main from './main';

import {mockListFilms} from '../../mocks/mockListFilms';


describe(`Snapshot <Main/>`, () => {
  it(`Render <Main/>`, () => {
    const tree = renderer
      .create(
          <Main
            name={`Very good film`}
            genre={`Comedy`}
            released={2020}
            catalogMoviesList={mockListFilms}
            onCardTitleClick={() => {}}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
