import * as React from "react";
import * as renderer from "react-test-renderer";

import Card from './card';

import {mockListFilms} from '../../mocks/mockListFilms';


describe(`Snapshot <CardList/>`, () => {
  it(`Render <CardList/>`, () => {
    const isHover = true;

    const tree = renderer
      .create(
          <Card
            card={mockListFilms[0]}
            isHover={isHover}
            onCardMouseEnter={() => {}}
            onCardMouseLeave={() => {}}
            onCardTitleClick={() => {}}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
