'use strict';

const numberOfFilms = +prompt('Сколько фильмов Вы уже смотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

FirstStep:for(let i=0; i<2; i++) {
    const movie = prompt('Один из последних просмотренных фильмов?', '');
    const rating = +prompt('На сколько оцените его?', '');

    if (movie !== null && movie !== '' && rating !== null && rating !== '' && movie.length < 50) {
        personalMovieDB.movies[movie] = rating;
        console.log('done');
        } else {console.log('error');
        i--;
    }
   }
console.log(personalMovieDB);

