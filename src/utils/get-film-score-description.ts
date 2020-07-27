
export const getFilmScoreDescription = (rating: number) => {
  return  rating < 3 ? `Bad` : 
          rating < 5 ? `Normal` : 
          rating < 8 ? `Good` :
          rating < 10 ? `Very good` : `Awesome`
};
