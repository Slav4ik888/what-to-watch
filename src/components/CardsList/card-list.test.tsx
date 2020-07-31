import * as React from "react";
import * as renderer from "react-test-renderer";

import CardList from './cards-list';

import {mockListFilms} from '../../mocks/mockListFilms';


describe(`Snapshot <CardList/>`, () => {
  it(`Render <CardList/>`, () => {
    const tree = renderer
      .create(
          <CardList
            filmsCards={mockListFilms}
            onCardTitleClick={() => {}}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
