'use strict';

const numberOfFilms = +prompt('Сколько фильмов Вы уже смотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count < 10) {
    alert ('На жаль, Ви подивилися мало фільмів'); 
} else if (personalMovieDB.count < 30) {
    alert ('Ви класичний глядач');
} else if (personalMovieDB.count >= 30) {
    alert ('Ви справжній кіноман');
} else {
    console.log ('Виникла помилка');
}

// First method
for(let i=0; i<2; i++) {
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


// Second method    
//     let a = 0;

//     while(a<2) {
//         let movie = prompt('Один из последних просмотренных фильмов?', '');
//         let rating = +prompt('На сколько оцените его?', '');
//         if (movie !== null && movie !== '' && rating !== null && rating !== '' && movie.length < 50) {
//             personalMovieDB.movies[movie] = rating;
//             a++;
//             console.log('done');
//         } else {
//             console.log('error');
//             a--;
//         }
//     } 

// console.log(personalMovieDB);

// Third method
// let a = 0;
// do {
//     let movie = prompt('Один из последних просмотренных фильмов?', '');
//     let rating = +prompt('На сколько оцените его?', '');
//     if (movie !== null && movie !== '' && rating !== null && rating !== '' &&  movie.length < 50) {
//         personalMovieDB.movies[movie] = rating;
//         a++;
//         console.log('done');
//     } else {
//         console.log('error');
//         a--;
//     }
// }
// while(a<2);
// console.log(personalMovieDB);
