import * as React from "react";
import * as renderer from "react-test-renderer";

import App from './app';

import {mockListFilms} from '../../mocks/mockListFilms';


describe(`Snapshot <App/>`, () => {
  it(`Render <App/>`, () => {
    const tree = renderer
      .create(
          <App
            name={`Very good film`}
            genre={`Comedy`}
            released={2020}
            catalogMoviesList={mockListFilms}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
