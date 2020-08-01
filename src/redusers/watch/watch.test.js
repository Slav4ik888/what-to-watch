import {reducer, ActionType, ActionCreator} from './watch';

import {mockListFilms} from '../../mocks/mockListFilms';


describe(`Reducer WATCH work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      selectedGenre: `All genres`,
      filmCards: mockListFilms,
    });
  });

  it(`Change "selectedGenre" by a given value`, () => {
    expect(reducer({
      selectedGenre: `All genres`,
    }, {
      type: ActionType.CHANGE_SELECTED_GENRE,
      payload: `Comedy`,
    })).toEqual({
      selectedGenre: `Comedy`,
    });
  });

  it(`No change "selectedGenre" by the same given value`, () => {
    expect(reducer({
      selectedGenre: `All genres`,
    }, {
      type: ActionType.CHANGE_SELECTED_GENRE,
      payload: `All genres`,
    })).toEqual({
      selectedGenre: `All genres`,
    });
  });

});

describe(`ACTION CREATORS work correctly `, () => {
  it(`ActionCreator.changeSelectedGenre`, () => {
    expect(ActionCreator.changeSelectedGenre(`Sexy`)).toEqual({
      type: ActionType.CHANGE_SELECTED_GENRE,
      payload: `Sexy`,
    });
  });

  it(`ActionCreator.setFilms`, () => {
    expect(ActionCreator.setFilms(mockListFilms)).toEqual({
      type: ActionCreator.SET_FILMS,
      payload: mockListFilms,
    });
  });

});
