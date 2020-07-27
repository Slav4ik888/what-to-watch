import * as React from "react";
import * as renderer from "react-test-renderer";

import InfoFilm from './info-film';

import {mockListFilms} from '../../mocks/mockListFilms';


describe(`Snapshot <InfoFilm/>`, () => {
  it(`Render <InfoFilm/> with card`, () => {
    const tree = renderer
      .create(
          <InfoFilm
            card={mockListFilms[0]}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

});
