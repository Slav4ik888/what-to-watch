import * as React from "react";
import * as renderer from "react-test-renderer";

import Footer from './footer';

import {mockListFilms} from '../../mocks/mockListFilms';


describe(`Snapshot <Footer/>`, () => {
  it(`Render <Footer/>`, () => {
    const tree = renderer
      .create(
          <Footer/>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
