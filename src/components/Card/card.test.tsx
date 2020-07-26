import * as React from "react";
import * as renderer from "react-test-renderer";

import Card from './card';

import {mockListFilms} from '../../mocks/mockListFilms';


describe(`Snapshot <CardList/>`, () => {
  it(`Render <CardList/>`, () => {
    const tree = renderer
      .create(
          <Card
            card={mockListFilms[0]}
            onHoverFilm={() => {}}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
