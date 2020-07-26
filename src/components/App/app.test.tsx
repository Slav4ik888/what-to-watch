import * as React from "react";
import * as renderer from "react-test-renderer";

import App from './app';

import {CardType} from '../../types';
import {mockCards} from '../../mocks/cards';


describe(`Snapshot <App/>`, () => {
  it(`Render <App/>`, () => {
    const tree = renderer
      .create(
          <App
            name={`Very good film`}
            genre={`Comedy`}
            released={2020}
            catalogMoviesList={mockCards}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
