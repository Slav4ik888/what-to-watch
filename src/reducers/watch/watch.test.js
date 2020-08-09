import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../api';
import {reducer, ActionType, ActionCreator, Operation, PLUS_FILMS_VIEW} from './watch';

import {mockListFilms} from '../../mocks/mockListFilms';
import {adapterFilms} from '../../utils/adapter-films';


describe(`Reducer WATCH work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      filmCards: [],
      selectedGenre: `All genres`,
      filmsCountView: PLUS_FILMS_VIEW,
      activeFilm: null,
      isLoading: false,
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


  it(`Change "loadFilms"`, () => {
    expect(reducer({
      filmCards: {},
    }, {
      type: ActionType.LOAD_FILMS,
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

  it(`ActionCreator.loadFilms`, () => {
    expect(ActionCreator.loadFilms(mockListFilms)).toEqual({
      type: ActionType.LOAD_FILMS,
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


const api = createAPI(() => {});

describe(`WATCH Operation work correctly`, () => {

  it(`loadFilms work correctly`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = Operation.loadFilms();

    apiMock
      .onGet(`/films`) // Чтобы мок на запрос `/films`
      .reply(200, [{fake: true}]); // вернул ответ 200 и массив таких данных [{fake: true}]

    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3); // Проверяем, что dispatch был вызван
        expect(dispatch).toHaveBeenNthCalledWith(1, { // Проверяем с какими данными этот вызов был произведён
          type: ActionType.SET_IS_LOADING,
          payload: true,
        });
        expect(dispatch.mock.calls[0][0]).toEqual({
          type: ActionType.SET_IS_LOADING,
          payload: true,
        });

        expect(dispatch.mock.calls[1][0]).toEqual({
          type: ActionType.LOAD_FILMS,
          payload: adapterFilms([{fake: true}]),
        });

        // expect(dispatch).toHaveBeenNthCalledWith(1, { // Проверяем с какими данными этот вызов был произведён
        //   type: ActionType.LOAD_OFFERS,
        //   payload: [{fake: true}],
        // });
      });
  });
});

// npm test watch.test.js
