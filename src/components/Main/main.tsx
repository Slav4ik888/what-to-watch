import * as React from 'react';

import Header from '../Header/header';
import CardsList from'../CardsList/cards-list';
import Footer from '../Footer/footer';

import {CardType} from '../../types';


type Props = {
  name: string,
  genre: string,
  released: number,
  catalogMoviesList: CardType[],
  onCardTitleClick: (card: CardType) => void,
};


const Main: React.FC<Props> = ({name, genre, released, catalogMoviesList,
onCardTitleClick}) => {
  return (
    <>
      <div className="visually-hidden">
        {/* <!-- inject:svg --> */}
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <symbol id="add" viewBox="0 0 19 20">
            {/* <!-- Generator: Sketch 52.2 (67145) - http://www.bohemiancoding.com/sketch --> */}
            <title>+</title>
            <desc>Created with Sketch.</desc>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <polygon id="+" fill="#EEE5B5" points="10.777832 11.2880859 10.777832 19.5527344 8.41650391 19.5527344 8.41650391 11.2880859 0.627929688 11.2880859 0.627929688 8.92675781 8.41650391 8.92675781 8.41650391 0.662109375 10.777832 0.662109375 10.777832 8.92675781 18.5664062 8.92675781 18.5664062 11.2880859"/>
            </g>
          </symbol>
          <symbol id="full-screen" viewBox="0 0 27 27">
            <path fillRule="evenodd" clipRule="evenodd" d="M23.8571 0H16V3.14286H23.8571V11H27V3.14286V0H23.8571Z" fill="#FFF9D9" fillOpacity="0.7"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M27 23.8571V16H23.8571V23.8571H16V27H23.8571H27L27 23.8571Z" fill="#FFF9D9" fillOpacity="0.7"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M0 3.14286L0 11H3.14286L3.14286 3.14286L11 3.14286V0H3.14286H0L0 3.14286Z" fill="#FFF9D9" fillOpacity="0.7"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M3.14286 27H11V23.8571H3.14286L3.14286 16H0L0 23.8571V27H3.14286Z" fill="#FFF9D9" fillOpacity="0.7"/>
          </symbol>
          <symbol id="in-list" viewBox="0 0 18 14">
            <path fillRule="evenodd" clipRule="evenodd" d="M2.40513 5.35353L6.1818 8.90902L15.5807 0L18 2.80485L6.18935 14L0 8.17346L2.40513 5.35353Z" fill="#EEE5B5"/>
          </symbol>
          <symbol id="pause" viewBox="0 0 14 21">
            {/* <!-- Generator: Sketch 52.2 (67145) - http://www.bohemiancoding.com/sketch --> */}
            <title>Artboard</title>
            <desc>Created with Sketch.</desc>
            <g id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <polygon id="Line" fill="#EEE5B5" fillRule="nonzero" points="0 -1.11910481e-13 4 -1.11910481e-13 4 21 0 21"/>
              <polygon id="Line" fill="#EEE5B5" fillRule="nonzero" points="10 -1.11910481e-13 14 -1.11910481e-13 14 21 10 21"/>
            </g>
          </symbol>
        </svg>
        {/* // <!-- endinject --> */}
      </div>

        <section className="movie-card">
          <Header card={null} />

          <div className="movie-card__wrap">
            <div className="movie-card__info">
              <div className="movie-card__poster">
                <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
              </div>

              <div className="movie-card__desc">
                <h2 className="movie-card__title">
                  {name}
                </h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{genre}</span>
                  <span className="movie-card__year">{released}</span>
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
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>

            <ul className="catalog__genres-list">
              <li className="catalog__genres-item catalog__genres-item--active">
                <a href="#" className="catalog__genres-link">All genres</a>
              </li>
              <li className="catalog__genres-item">
                <a href="#" className="catalog__genres-link">Comedies</a>
              </li>
              <li className="catalog__genres-item">
                <a href="#" className="catalog__genres-link">Crime</a>
              </li>
              <li className="catalog__genres-item">
                <a href="#" className="catalog__genres-link">Documentary</a>
              </li>
              <li className="catalog__genres-item">
                <a href="#" className="catalog__genres-link">Dramas</a>
              </li>
              <li className="catalog__genres-item">
                <a href="#" className="catalog__genres-link">Horror</a>
              </li>
              <li className="catalog__genres-item">
                <a href="#" className="catalog__genres-link">Kids & Family</a>
              </li>
              <li className="catalog__genres-item">
                <a href="#" className="catalog__genres-link">Romance</a>
              </li>
              <li className="catalog__genres-item">
                <a href="#" className="catalog__genres-link">Sci-Fi</a>
              </li>
              <li className="catalog__genres-item">
                <a href="#" className="catalog__genres-link">Thrillers</a>
              </li>
            </ul>

            <CardsList
              catalogMoviesList={catalogMoviesList}
              onCardTitleClick={onCardTitleClick}
            />

            <div className="catalog__more">
              <button className="catalog__button" type="button">Show more</button>
            </div>
          </section>

          <Footer />
        </div>
    </>
  );
};

export default Main;
