import * as React from 'react';

import {CardType} from '../../types';


type Props = {
  card: CardType | null;
};


const Header: React.FC<Props> = ({card}) => {
  const bg = card ? card.backgroundImage : `img/bg-the-grand-budapest-hotel.jpg`;
  const alt = card ? card.name : `The Grand Budapest Hotel`;

  return (
    <>
      <div className="movie-card__bg">
        <img src={bg} alt={alt} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header movie-card__head">
        <div className="logo">
          <a className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="user-block">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </div>
      </header>
    </>
  )
};

export default Header;
