import {reducer, ActionType, ActionCreator, PLUS_FILMS_VIEW} from './watch';

import {mockListFilms} from '../../mocks/mockListFilms';


describe(`Reducer WATCH work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      selectedGenre: `All genres`,
      filmCards: mockListFilms,
      filmsCountView: PLUS_FILMS_VIEW,
    });
  });

  it(`Change "selectedGenre" by a given value`, () => {
    expect(reducer({
      selectedGenre: `All genres`,
      filmsCountView: 16,
    }, {
      type: ActionType.CHANGE_SELECTED_GENRE,
      payload: `Comedy`,
    })).toEqual({
      selectedGenre: `Comedy`,
      filmsCountView: PLUS_FILMS_VIEW,
    });
  });

  it(`No change "selectedGenre" by the same given value`, () => {
    expect(reducer({
      selectedGenre: `All genres`,
      filmsCountView: 16,
    }, {
      type: ActionType.CHANGE_SELECTED_GENRE,
      payload: `All genres`,
    })).toEqual({
      selectedGenre: `All genres`,
      filmsCountView: 16,
    });
  });


  it(`Change "setFilms"`, () => {
    expect(reducer({
      filmCards: {},
    }, {
      type: ActionType.SET_FILMS,
      payload: mockListFilms,
    })).toEqual({
      filmCards: mockListFilms,
    });
  });


  it(`Change "addFilmsCountView"`, () => {
    expect(reducer({
      filmsCountView: PLUS_FILMS_VIEW,
    }, {
      type: ActionType.ADD_FILMS_COUNT_VIEW,
      payload: 4,
    })).toEqual({
      filmsCountView: PLUS_FILMS_VIEW + 4,
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
      type: ActionType.SET_FILMS,
      payload: mockListFilms,
    });
  });

  it(`ActionCreator.addFilmsCountView`, () => {
    expect(ActionCreator.addFilmsCountView()).toEqual({
      type: ActionType.ADD_FILMS_COUNT_VIEW,
      payload: PLUS_FILMS_VIEW,
    });
  });

});
