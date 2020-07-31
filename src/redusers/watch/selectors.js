import {NameSpace} from '../name-space';
import {createSelector} from 'reselect';


const NAME_SPACE = NameSpace.WATCH;


export const getFilmCards = (state) => {
  console.log('state: ', state);
  return state[NAME_SPACE].filmCards;
};

export const getSelectedGenre = (state) => {
  return state[NAME_SPACE].selectedGenre;
};

export const getGenresList = createSelector(
    getFilmCards,
    (filmCards) => {
      // Список уникальных жанров находящихся в filmCards
      let genreList = [...new Set(filmCards.map((item) => item.genre))];
      return genreList;
    }

);

// export const getFiltredList = createSelector(
