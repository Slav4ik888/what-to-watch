import {extend} from '../../utils/utils';
import {mockListFilms} from '../../mocks/mockListFilms';


const PLUS_FILMS_VIEW = 4;


const initState = {
  selectedGenre: `All genres`,
  filmCards: mockListFilms,
  filmsCountView: PLUS_FILMS_VIEW,
  activeFilm: null,
};


const ActionType = {
  CHANGE_SELECTED_GENRE: `CHANGE_SELECTED_GENRE`,
  SET_FILMS: `SET_FILMS`,
  ADD_FILMS_COUNT_VIEW: `ADD_FILMS_COUNT_VIEW`,
  SET_ACTIVE_FILM: `SET_ACTIVE_FILM`,
  DEL_ACTIVE_FILM: `DEL_ACTIVE_FILM`,
};


const ActionCreator = {
  changeSelectedGenre: (genre) => ({
    type: ActionType.CHANGE_SELECTED_GENRE,
    payload: genre,
  }),

  setFilms: (films) => ({
    type: ActionType.SET_FILMS,
    payload: films,
  }),

  addFilmsCountView: () => ({
    type: ActionType.ADD_FILMS_COUNT_VIEW,
    payload: PLUS_FILMS_VIEW,
  }),

  setActiveFilm: (activeFilm) => ({
    type: ActionType.SET_ACTIVE_FILM,
    payload: activeFilm,
  }),

  delActiveFilm: () => ({
    type: ActionType.DEL_ACTIVE_FILM,
    payload: null,
  }),
};


const reducer = (state = initState, action) => {
  switch (action.type) {

    case ActionType.CHANGE_SELECTED_GENRE:
      if (state.selectedGenre !== action.payload) {
        return extend(state, {
          selectedGenre: action.payload,
          filmsCountView: PLUS_FILMS_VIEW,
        });
      } else {
        return state;
      }

    case ActionType.SET_FILMS:
      return extend(state, {
        filmCards: action.payload,
      });

    case ActionType.ADD_FILMS_COUNT_VIEW:
      return extend(state, {
        filmsCountView: state.filmsCountView + action.payload,
      });

    case ActionType.SET_ACTIVE_FILM:
      return extend(state, {
        activeFilm: action.payload,
      });

    case ActionType.DEL_ACTIVE_FILM:
      return extend(state, {
        activeFilm: action.payload,
      });
  }
  return state;
};


export {reducer, ActionType, ActionCreator, PLUS_FILMS_VIEW};
