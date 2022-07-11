'use strict';

const numberOfFilms = +prompt('Сколько фильмов Вы уже смотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// const movieA = prompt('Один из последних просмотренных фильмов?', '');
// const ratingA = +prompt('На сколько оцените его?', '');  
// const movieB = prompt('Один из последних просмотренных фильмов?', '');
// const ratingB = +prompt('На сколько оцените его?', '');  


// personalMovieDB.movies[movieA] = ratingA;
// personalMovieDB.movies[movieB] = ratingB;

// console.log (personalMovieDB);



for(let i=0; i<2; i++) {
    const movie = prompt('Один из последних просмотренных фильмов?', '');
    const rating = +prompt('На сколько оцените его?', '');

    if (movie[i] !== null && rating[i] !== null) {
        personalMovieDB.movies[movie] = rating;
        console.log ('done!');
    } else {
        console.log('error');
    }
}
console.log(personalMovieDB);