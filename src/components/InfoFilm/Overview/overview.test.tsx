import * as React from "react";
import * as renderer from "react-test-renderer";

import Overview from './overview';

import {mockListFilms} from '../../../mocks/mockListFilms';


describe(`Snapshot <Overview/>`, () => {
  it(`Render <Overview/> `, () => {
    const tree = renderer
      .create(
          <Overview
            card={mockListFilms[0]}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
