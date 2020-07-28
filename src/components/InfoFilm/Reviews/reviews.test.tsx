import * as React from "react";
import * as renderer from "react-test-renderer";

import Reviews from './reviews';


describe(`Snapshot <Reviews/>`, () => {
  it(`Render <Reviews/> `, () => {
    const tree = renderer
      .create(
          <Reviews />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
