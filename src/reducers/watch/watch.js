import {extend} from '../../utils/utils';
import {adapterFilms} from '../../utils/adapter-films';

// import {mockListFilms} from '../../mocks/mockListFilms';


const PLUS_FILMS_VIEW = 4;


const initState = {
  filmCards: [],
  selectedGenre: `All genres`,
  filmsCountView: PLUS_FILMS_VIEW,
  activeFilm: null,
  isLoading: false,

};


const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,

  CHANGE_SELECTED_GENRE: `CHANGE_SELECTED_GENRE`,
  ADD_FILMS_COUNT_VIEW: `ADD_FILMS_COUNT_VIEW`,
  SET_ACTIVE_FILM: `SET_ACTIVE_FILM`,
  DEL_ACTIVE_FILM: `DEL_ACTIVE_FILM`,
  SET_IS_LOADING: `SET_IS_LOADING`,

};


const ActionCreator = {
  loadFilms: (filmCards) => ({
    type: ActionType.LOAD_FILMS,
    payload: filmCards,
  }),

  changeSelectedGenre: (genre) => ({
    type: ActionType.CHANGE_SELECTED_GENRE,
    payload: genre,
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

  setIsLoading: (status) => {
    return {
      type: ActionType.SET_IS_LOADING,
      payload: status,
    };
  },

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

    case ActionType.LOAD_FILMS:
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


// Operation это асинхронный ActionCreator
const Operation = {

  loadFilms: () => (dispatch, getState, api) => {
    // console.log('loadFilms: ');

    dispatch(ActionCreator.setIsLoading(true));

    return api.get(`/films`)
      .then((res) => {
        dispatch(ActionCreator.loadFilms(adapterFilms(res.data)));
        // console.log('res.data: ', res.data);
        dispatch(ActionCreator.setIsLoading(false));
      })
      .catch(() => {
        dispatch(ActionCreator.setIsLoading(false));
        // console.log(`/films NON`);
      });
  },
};


export {reducer, ActionType, ActionCreator, Operation, PLUS_FILMS_VIEW};
