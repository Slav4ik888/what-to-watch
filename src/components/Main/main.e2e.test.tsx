import * as React from "react";
import {shallow, configure} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

import Main from "./main";

import {mockListFilms} from '../../mocks/mockListFilms';


configure({
  adapter: new Adapter(),
});


it(`Should <Main/> button be pressed`, () => {
  const onCardTitleClick = jest.fn();

  const welcomeMain = shallow(
      <Main
        name={`Very good film`}
        genre={`Comedy`}
        released={2020}
        catalogMoviesList={mockListFilms}
        onCardTitleClick={onCardTitleClick}
      />
  );

  const click = welcomeMain.find(`h2.movie-card__title`);

  click.props().onClick();

  expect(onCardTitleClick.mock.calls.length).toBe(1);
});
