import * as React from 'react';


type Props = {
  genreList: string[],

};

const GenreList: React.FC<Props> = ({genreList}) => {
  return (
    <>
      <ul className="catalog__genres-list">
        {genreList
          .slice(0, 9)
          .map((genre, i) => <li key={genre + i}
          className={`catalog__genres-item ${i === 0 && "catalog__genres-item--active"}`}>
          <a href="#" className="catalog__genres-link">{genre}</a>
        </li>
        )}
      </ul>
    </>
  )
};

export default GenreList;
