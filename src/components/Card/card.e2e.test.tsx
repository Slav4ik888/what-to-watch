import * as React from 'react';
import {mount, configure} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import Card from './card';

import {mockListFilms} from '../../mocks/mockListFilms';


configure({
  adapter: new Adapter(),
});

describe(`<Card> tests`, () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const onCardTitleClick = jest.fn();

  const onHoverFilm = jest.fn((...args) => [...args]);
  const isHover = true;

  const renderComponent = (props = {}) => {
    return mount(
      <Card
        card={mockListFilms[0]}
        isHover={isHover}
        onCardMouseEnter={onHoverFilm}
        onCardMouseLeave={() => {}}
        onCardTitleClick={onCardTitleClick}
      />
    );
  };

  it(`<Card/> click on card`, () => {
    const component = renderComponent();
    // const component = mount(
    //   <Card
    //     card={mockListFilms[0]}
    //     isHover={isHover}
    //     onCardMouseEnter={() => {}}
    //     onCardMouseLeave={() => {}}
    //     onCardTitleClick={onCardTitleClick}
    //   />
    // );
    // const hover = component.find(`article.small-movie-card`);

    // hover.props().onClick();
    // `mouseOut` pointerenter mouseOver click pointerleave
    // hover.simulate(`pointerenter`);

    const click = component.find(`article.small-movie-card`);
    click.simulate(`click`);

    expect(onCardTitleClick).toHaveBeenCalledTimes(1);
    expect(onCardTitleClick.mock.calls.length).toBe(1);// вроде как тоже что выше

    expect(onCardTitleClick.mock.calls[0][0]).toEqual(mockListFilms[0]);
  });

  it(`<Card/> hover on card`, () => {
    const component = renderComponent();
    
    // hover.props().onClick();
    // `mouseOut` pointerenter mouseOver click pointerleave

    const hover = component.find(`article.small-movie-card`);
    hover.simulate(`pointerenter`);

    expect(onHoverFilm).toHaveBeenCalledTimes(1);
    expect(onHoverFilm.mock.calls.length).toBe(1);// вроде как тоже что выше

    expect(onHoverFilm.mock.calls[0][0]).toEqual(mockListFilms[0]);
  });
});

// npm test card.e2e.test.tsx