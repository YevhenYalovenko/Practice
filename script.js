'use strict';

const numberOfFilms = +prompt('Сколько фильмов Вы уже смотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const movieA = prompt('Один из последних просмотренных фильмов?', '');
const ratingA = prompt('На сколько оцените его?', '');  
const movieB = prompt('Один из последних просмотренных фильмов?', '');
const ratingB = prompt('На сколько оцените его?', '');  


personalMovieDB.movies[movieA] = ratingA;
personalMovieDB.movies[movieB] = ratingB;

console.log (personalMovieDB);