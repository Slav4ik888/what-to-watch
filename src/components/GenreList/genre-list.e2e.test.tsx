import * as React from 'react';
import {mount, configure} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import {GenreList} from './genre-list';


configure({
  adapter: new Adapter(),
});


describe(`<GenreList> tests`, () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const onGenreClick = jest.fn();

  const renderComponent = (props = {}) => {
    return mount(
      <GenreList
        selectedGenre={`All genres`}
        genreListTitle={[`Comedy`, `Crime`]}
        onGenreClick={onGenreClick}
      />
    );
  };

  it(`<GenreList/> click on active--item`, () => {
    const component = renderComponent();
    
    component
      .find(`li.catalog__genres-item`)
      .at(0)
      .simulate(`click`);

    expect(onGenreClick).toHaveBeenCalledTimes(1);
    expect(onGenreClick.mock.calls.length).toBe(1); // вроде как тоже что выше
  });
});

// npm test genre-list.e2e.test.tsx