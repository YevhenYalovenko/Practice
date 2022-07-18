'use strict';

let numberOfFilms;

function start() {
   numberOfFilms = prompt('Сколько фильмов Вы уже смотрели?', '').trim;

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов Вы уже смотрели?', '');
    }

}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms () {
    for(let i=0; i<2; i++) {
        const movie = prompt('Один из последних просмотренных фильмов?', '').trim;
        const rating = +prompt('На сколько оцените его?', '').trim;
    
        if (movie !== null && movie !== '' && rating !== null && rating !== '' && movie.length < 50) {
            personalMovieDB.movies[movie] = rating;
            console.log('done');
            } else {console.log('error');
            i--;
        }
       }
}
rememberMyFilms ();

function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        alert ('На жаль, Ви подивилися мало фільмів'); 
    } else if (personalMovieDB.count < 30) {
        alert ('Ви класичний глядач');
    } else if (personalMovieDB.count >= 30) {
        alert ('Ви справжній кіноман');
    } else {
        console.log ('Виникла помилка');
    }
}
detectPersonalLevel ();

// first method
// function showMyDB () {
//     if (personalMovieDB.privat==false) {
//         console.log(personalMovieDB);
//     }
// }
// showMyDB ();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB (personalMovieDB.privat);

// first method
function writeYourGenres () {
    for (let i=1; i<=3; i++) {
        const question = prompt(`Ваш улюблений жанр під номером ${i}`, ``).trim;

        if (question !== null && question !== '' && isNaN(question) && question.length < 50) {
            personalMovieDB.genres[i-1]=question;
            console.log('questDone');
        } else {console.log('questError');
                i--;
        }
    }
    return personalMovieDB.genres;
}
writeYourGenres ();

// second method
// function writeYourGenres () {
//     for (let i=1; i<=3; i++) {
//             personalMovieDB.genres[i-1]=prompt(`Ваш улюблений жанр під номером ${i}`, ``);
//             }
// }
// writeYourGenres ();











































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
