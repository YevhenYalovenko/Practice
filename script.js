'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов Вы уже смотрели?', '');
     
         while( personalMovieDB.count == '' ||  personalMovieDB.count == null || isNaN( personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов Вы уже смотрели?', '');
         }
    },
    rememberMyFilms: function () {
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
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            alert ('На жаль, Ви подивилися мало фільмів'); 
        } else if (personalMovieDB.count < 30) {
            alert ('Ви класичний глядач');
        } else if (personalMovieDB.count >= 30) {
            alert ('Ви справжній кіноман');
        } else {
            console.log ('Виникла помилка');
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function () {
        for (let i=1; i<=3; i++) {
            let genreQuestion = prompt(`Ваш улюблений жанр під номером ${i}`);
    
            if (genreQuestion !== null && genreQuestion !== '' && isNaN(genreQuestion) && genreQuestion.length < 50) {
                personalMovieDB.genres[i-1]=genreQuestion;
                console.log('questDone');
            } else {console.log('questError');
                    i--;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Улюблений жанр ${[i + 1]} - це ${item}`);
        });
    },
    toggleVisibleMyDB: function () {
       if (personalMovieDB.privat) {
        personalMovieDB.privat = false;
       } else {
        personalMovieDB.privat = true;
       }
    }
};

//personalMovieDB.start();
//personalMovieDB.rememberMyFilms();
//personalMovieDB.detectPersonalLevel ();
//personalMovieDB.writeYourGenres ();
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showMyDB (personalMovieDB.privat);


// function showMyDB () {
//     if (personalMovieDB.privat==false) {
//         console.log(personalMovieDB);
//     }
// }
// showMyDB ();

// writeYourGenres ();

// {


// for (let i=1; i<=3; i++) {
//     personalMovieDB.genres[i-1]=prompt(`Ваш улюблений жанр під номером ${i}`, ``);
//     }







































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
