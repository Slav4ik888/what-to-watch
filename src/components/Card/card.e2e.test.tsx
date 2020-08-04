import * as React from 'react';
import {shallow, configure} from 'enzyme';
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

  // const onHoverFilm = jest.fn((...args) => [...args]);

  // const renderComponent = (props = {}) => {
  //   return shallow(
  //     <Card
  //         card={mockListFilms[0]}
  //         isHover={isHover}
  //         onCardTitleClick={onCardTitleClick}
  //       />
  //   );
  // };

  it(`<Card/> навели мышку на карточку`, () => {
    const isHover = true;

    // const component = renderComponent();
    const component = shallow(
          <Card
              card={mockListFilms[0]}
              isHover={isHover}
              onCardMouseEnter={() => {}}
              onCardMouseLeave={() => {}}
              onCardTitleClick={onCardTitleClick}
            />
        );
    // const hover = component.find(`article.small-movie-card`);

    // hover.props().onClick();
    // `mouseOut` pointerenter mouseOver click pointerleave
    // hover.simulate(`pointerenter`);

    const click = component.find(`article.small-movie-card`);
    click.simulate(`click`);

    expect(onCardTitleClick).toHaveBeenCalledTimes(1);
    expect(onCardTitleClick).toBe(1);// вроде как тоже что выше

    expect(onCardTitleClick.mock.calls[0][0]).toEqual(mockListFilms[0]);
  });
});
