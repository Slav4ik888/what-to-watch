/**
 * Адаптер - преобразует полученные данные в нужный нам формат
 * @param {array} data - принятый с сервера массив
 * @returns {array} offers - объект в нужном формате
 */

export const adapterFilms = (data) => {
  let films = [];
  let film = {};

  // Создаём film ы
  for (let i = 0; i < data.length; i++) {
    film.id = data[i].id;
    film.name = data[i].name;
    film.posterImage = data[i].poster_image;
    film.previewImage = data[i].preview_image;
    film.backgroundImage = data[i].background_image;
    film.backgroundColor = data[i].background_color;
    film.bedrooms = data[i].bedrooms;
    film.maxGuestsNumber = data[i].max_adults;
    film.description = data[i].description;
    film.videoLink = data[i].video_link;
    film.previewVideoLink = data[i].preview_video_link;
    film.rating = data[i].rating;
    film.director = data[i].director;
    film.scoresCount = data[i].scores_count;
    film.starring = data[i].starring;
    film.runTime = data[i].run_time;
    film.genre = data[i].genre;
    film.released = data[i].released;
    film.isFavorite = data[i].is_favorite;

    // пушим их в созданные города
    films.push(film);
    film = {};
  }
  // console.log(offers);

  return films;
};
