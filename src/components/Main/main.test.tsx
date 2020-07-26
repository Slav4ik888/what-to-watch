import * as React from "react";
import * as renderer from "react-test-renderer";

import Main from './main';

import {mockCards} from '../../mocks/cards';


describe(`Snapshot <Main/>`, () => {
  it(`Render <Main/>`, () => {
    const tree = renderer
      .create(
          <Main
            name={`Very good film`}
            genre={`Comedy`}
            released={2020}
            catalogMoviesList={mockCards}
            onCardTitleClick={() => {}}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
