import {reducer, ActionType, ActionCreator, PLUS_FILMS_VIEW} from './watch';

import {mockListFilms} from '../../mocks/mockListFilms';


describe(`Reducer WATCH work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      selectedGenre: `All genres`,
      filmCards: mockListFilms,
      filmsCountView: PLUS_FILMS_VIEW,
      activeFilm: null,
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

  it(`Change "setActiveFilm"`, () => {
    expect(reducer({
      activeFilm: null,
    }, {
      type: ActionType.SET_ACTIVE_FILM,
      payload: mockListFilms[0],
    })).toEqual({
      activeFilm: mockListFilms[0],
    });
  });

  it(`Change "delActiveFilm"`, () => {
    expect(reducer({
      activeFilm: mockListFilms[0],
    }, {
      type: ActionType.DEL_ACTIVE_FILM,
      payload: null,
    })).toEqual({
      activeFilm: null,
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

  it(`ActionCreator.setActiveFilm`, () => {
    expect(ActionCreator.setActiveFilm(mockListFilms[0])).toEqual({
      type: ActionType.SET_ACTIVE_FILM,
      payload: mockListFilms[0],
    });
  });

  it(`ActionCreator.delActiveFilm`, () => {
    expect(ActionCreator.delActiveFilm()).toEqual({
      type: ActionType.DEL_ACTIVE_FILM,
      payload: null,
    });
  });
});

// npm test watch.test.js
