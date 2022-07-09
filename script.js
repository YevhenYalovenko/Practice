'use strict';

const numberOfFilms = prompt('Сколько фильмов Вы уже смотрели?', '');

const personalMovieDB = {
    count: console.log (numberOfFilms),
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
console.log (personalMovieDB);