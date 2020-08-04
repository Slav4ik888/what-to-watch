import * as React from 'react';

import Header from '../Header/header';
import MovieTabs from './MovieTabs/movie-tabs';
import Card from '../Card/card';
import Footer from '../Footer/footer';

import withHoverItem from '../../hocs/with-hover-item/with-hover-item';

import {mockListFilms} from '../../mocks/mockListFilms';
import {CardType} from '../../types';


const CardWrap = withHoverItem(Card);

type Props = {
  card: CardType;
  onCardTitleClick: (card: CardType) => void;
};


const InfoFilm: React.FC<Props> = ({card, onCardTitleClick}) => {
  return (
    <>
      <section className="movie-card movie-card--full">
      <div className="movie-card__hero">
        <Header card={card} />

        <div className="movie-card__wrap">
          <div className="movie-card__desc">
            <h2 className="movie-card__title">{card.name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{card.genre}</span>
              <span className="movie-card__year">{card.released}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
              </button>
              <a href="add-review.html" className="btn movie-card__button">Add review</a>
            </div>
          </div>
        </div>
      </div>

      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img src={card.posterImage} alt={card.name} width="218" height="327" />
          </div>

          <div className="movie-card__desc">
            <MovieTabs card={card}/>

            
          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>

        <div className="catalog__movies-list">
          {mockListFilms
            .filter((film) => film.genre === card.genre)
            .slice(0, 4)
            .map((film, i) => (
              <CardWrap
                key={`${card.name}${i}`}
                card={film}
                onCardTitleClick={onCardTitleClick}
              />
          ))}
        </div>
      </section>

      <Footer/>
    </div>
    </>
  )
};

export default InfoFilm;
