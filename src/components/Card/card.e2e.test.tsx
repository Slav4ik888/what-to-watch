import * as React from "react";
import {shallow, configure} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

import Card from "./card";

import {mockListFilms} from '../../mocks/mockListFilms';


configure({
  adapter: new Adapter(),
});

describe(`<Card> tests`, () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const onHoverFilm = jest.fn();
  const onCardTitleClick = jest.fn();

  // const onHoverFilm = jest.fn((...args) => [...args]);
  
  const renderComponent = (props = {}) => {
    return shallow(
      <Card
          card={mockListFilms[0]}
          onHoverFilm={onHoverFilm}
          onCardTitleClick={onCardTitleClick}
        />
    );
  };

  it(`<Card/> навели мышку на карточку`, () => {
    const component = renderComponent();
    const hover = component.find(`article.small-movie-card`);

    // hover.props().onClick();
    // `mouseOut` pointerenter mouseOver click pointerleave
    hover.simulate(`pointerenter`);

    const click = component.find(`article.small-movie-card`);
    click.simulate(`click`);

    expect(onHoverFilm).toHaveBeenCalledTimes(1);
    expect(onHoverFilm.mock.calls.length).toBe(1); // вроде как тоже что выше
    expect(onHoverFilm.mock.calls[0][0]).toEqual(mockListFilms[0]);
    
    expect(onCardTitleClick).toHaveBeenCalledTimes(1);
    expect(onCardTitleClick.mock.calls[0][0]).toEqual(mockListFilms[0]);


  });
});
