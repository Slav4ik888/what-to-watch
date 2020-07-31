import {NameSpace} from '../name-space';
import {createSelector} from 'reselect';


const NAME_SPACE = NameSpace.WATCH;


export const getFilmCards = (state) => {
  return state[NAME_SPACE].filmCards;
};


export const getSelectedGenre = (state) => {
  return state[NAME_SPACE].selectedGenre;
};


export const getGenresList = createSelector(
    getFilmCards,
    (filmCards) => {
      // Список уникальных жанров находящихся в filmCards
      const allGenreList = [...new Set(filmCards.map((item) => item.genre))];
      // Создать список жанров для GenreList
      const genreList = [`All genres`, ...allGenreList.map((genre) => {
        switch (genre) {
          case `Comedy`: return `Comedies`;
          case `Crime`: return `Crime`;
          case `Documental`: return `Documentary`;
          case `Drama`: return `Dramas`;
          case `Horror`: return `Horror`;
          case `Kids & Family`: return `Kids & Family`;
          case `Romance`: return `Romance`;
          case `Detective`: return `Detectivies`;
          case `Sci-Fi`: return `Sci-Fi`;
          case `Thriller`: return `Thrillers`;
          default: return genre;
        }
      })];

      const checksGenreList = [...new Set([...genreList])];
      return checksGenreList;
    }
);


export const getFiltredList = createSelector(
    getFilmCards,
    getSelectedGenre,
    (filmCards, selectedGenre) => {
      if (selectedGenre === `All genres`) {
        return filmCards;
      }

      let filtredFilmCards = filmCards.filter((film) => film.genre === selectedGenre);
      return filtredFilmCards;
    }
);
