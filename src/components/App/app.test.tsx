import * as React from "react";
import * as renderer from "react-test-renderer";

import App from './app';

import {titleFilm} from '../../consts';



describe(`Snapshot <App/>`, () => {
  it(`Render <App/>`, () => {
    const tree = renderer
      .create(
          <App
            titleFilm={titleFilm}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
