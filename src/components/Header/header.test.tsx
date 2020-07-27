import * as React from "react";
import * as renderer from "react-test-renderer";

import Header from './header';

import {mockListFilms} from '../../mocks/mockListFilms';


describe(`Snapshot <Header/>`, () => {
  it(`Render <Header/> with card`, () => {
    const tree = renderer
      .create(
          <Header
            card={mockListFilms[0]}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`Render <Header/> with card = null`, () => {
    const tree = renderer
      .create(
          <Header
            card={null}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

});
