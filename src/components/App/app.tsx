import * as React from 'react';

import Main from '../Main/main';

import {CardType} from '../../types';


type Props = {
  name: string,
  genre: string,
  released: number,
  catalogMoviesList: CardType[],
};

const _handleCardTitleClick = () => {
  console.log(`handleCardTitleClick`);
};

const App: React.FC<Props> = ({name, genre, released, catalogMoviesList}) => {
  return (
    <>
      <Main
        name={name}
        genre={genre}
        released={released}
        catalogMoviesList={catalogMoviesList}
        onCardTitleClick={_handleCardTitleClick}
      />
    </>
  );
};

export default App;
