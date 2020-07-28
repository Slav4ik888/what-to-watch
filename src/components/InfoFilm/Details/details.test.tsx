import * as React from "react";
import * as renderer from "react-test-renderer";

import Details from './details';

import {mockListFilms} from '../../../mocks/mockListFilms';


describe(`Snapshot <Details/>`, () => {
  it(`Render <Details/> `, () => {
    const tree = renderer
      .create(
          <Details
            card={mockListFilms[0]}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
