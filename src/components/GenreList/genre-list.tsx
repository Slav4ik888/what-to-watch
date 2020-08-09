import * as React from 'react';
import {connect} from 'react-redux';

import {getGenresListTitle, getSelectedGenre, getFiltredList} from '../../reducers/watch/selectors';
import {ActionCreator} from '../../reducers/watch/watch';




type Props = {
  selectedGenre: string,
  genreListTitle: string[],
  onGenreClick: (genre: string) => void;
};

const GenreList: React.FC<Props> = ({genreListTitle, onGenreClick, selectedGenre}) => {
  
  const adaptTitleGenre = (titleGenre: string) => {
    switch (titleGenre) {
      case `Comedies`: return `Comedy`;
      case `Crime`: return `Crime`;
      case `Documentary`: return `Documental`;
      case `Dramas`: return `Drama`;
      case `Horror`: return `Horror`;
      case `Kids & Family`: return `Kids & Family`;
      case `Romance`: return `Romance`;
      case `Detectivies`: return `Detective`;
      case `Sci-Fi`: return `Sci-Fi`;
      case `Thrillers`: return `Thriller`;
      default: return titleGenre;
    }
  };
  
  return (
    <>
      <ul className="catalog__genres-list">
        {genreListTitle
          .slice(0, 9)
          .map((genre, i) => (
            <li key={genre + i}
              id={`i${i}`}
              className={`catalog__genres-item ${adaptTitleGenre(genre) === selectedGenre && "catalog__genres-item--active"}`}
              onClick={() => onGenreClick(adaptTitleGenre(genre))}
            >
              <a href={`#i ${i}`} className="catalog__genres-link">{genre}</a>
            </li>
        ))}
      </ul>
    </>
  )
};

const mapStateToProps = (state) => ({
  selectedGenre:getSelectedGenre(state),
  genreListTitle: getGenresListTitle(state),
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(genre) {
    dispatch(ActionCreator.changeSelectedGenre(genre));
  }
});

export {GenreList};
export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
