import * as React from 'react';

import {mockReviews} from '../../../mocks/mockReviews';
import {showDate, isOdd} from '../../../utils/utils';


const Reviews: React.FC<{}> = () => {
  return (
    <>
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">
          {mockReviews.map((review, i) => {
            if (!isOdd(i) || i === 0) {
              return  <div key={review.user.name + i} className="review">
                        <blockquote className="review__quote">
                          <p className="review__text">{review.comment}</p>

                          <footer className="review__details">
                            <cite className="review__author">{review.user.name}</cite>
                            <time className="review__date" dateTime={showDate(review.date, `YYYY-MM-DD`)}>{showDate(review.date, `Month DD, YYYY`)}</time>
                          </footer>
                        </blockquote>

                        <div className="review__rating">{review.rating}</div>
                      </div>
          }})}
        </div>
        <div className="movie-card__reviews-col">
          {mockReviews.map((review, i) => {
            if (isOdd(i)) {
              return  <div key={review.user.name + i} className="review">
                        <blockquote className="review__quote">
                          <p className="review__text">{review.comment}</p>

                          <footer className="review__details">
                            <cite className="review__author">{review.user.name}</cite>
                            <time className="review__date" dateTime={showDate(review.date, `YYYY-MM-DD`)}>{showDate(review.date, `Month DD, YYYY`)}</time>
                          </footer>
                        </blockquote>

              <div className="review__rating">{review.rating}</div>
            </div>
          }})}
        </div>
      </div>
    </>
  )
};

export default Reviews;
