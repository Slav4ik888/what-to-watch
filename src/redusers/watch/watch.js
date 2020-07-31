import {extend} from '../../utils/utils';
import {mockListFilms} from '../../mocks/mockListFilms';


const initState = {
  selectedGenre: `Fantastic`,
  filmCards: mockListFilms,
};

const ActionType = {
  CHANGE_FILTER_GENRE: `CHANGE_FILTER_GENRE`,
  GET_FILMS: `GET_FILMS`,
};

const ActionCreator = {
  changeFilterGenre: (genre) => ({
    type: ActionType.CHANGE_FILTER_GENRE,
    payload: genre,
  }),

  getFilms: (films) => ({
    type: ActionCreator.GET_FILMS,
    payload: films,
  }),
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_FILTER_GENRE:
      return extend(state, {
        selectedGenre: action.payload,
      });

    case ActionType.GET_FILMS:
      return extend(state, {
        filmCards: action.payload,
      });
  }
  return state;
};

export {reducer, ActionType, ActionCreator};
