import {extend} from '../../utils/utils';
import {mockListFilms} from '../../mocks/mockListFilms';


const initState = {
  selectedGenre: `All genres`,
  filmCards: mockListFilms,
};

const ActionType = {
  CHANGE_SELECTED_GENRE: `CHANGE_SELECTED_GENRE`,
  SET_FILMS: `SET_FILMS`,
};

const ActionCreator = {
  changeSelectedGenre: (genre) => ({
    type: ActionType.CHANGE_SELECTED_GENRE,
    payload: genre,
  }),

  setFilms: (films) => ({
    type: ActionCreator.SET_FILMS,
    payload: films,
  }),
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_SELECTED_GENRE:
      return extend(state, {
        selectedGenre: action.payload,
      });

    case ActionType.SET_FILMS:
      return extend(state, {
        filmCards: action.payload,
      });
  }
  return state;
};

export {reducer, ActionType, ActionCreator};
