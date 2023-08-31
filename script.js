'use strict';

let numberOfFilms;

let start = () => {
    while (numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms) ) {
        numberOfFilms = +prompt("How many films have you already watched?", "");
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

let detectPersonalLevel = () => {
    if (personalMovieDB.count < 10)
        console.log("Watched a few films")
    else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30)
        console.log("You are a classic spectator")
    else if (personalMovieDB.count >= 30)
        console.log("You are a movie buff!")
    else
        console.log("There was an error!")
}
detectPersonalLevel();


let rememberMyFilms = () => {
    ///// FOR /////
    for (let i = 0; i < 2; i++) {
        let lastWatchedFilm = prompt("One of the last movies you watched?", ""),
            giveRating = +prompt("How much would you rate it, from 1 to 10 stars?", "");

        (lastWatchedFilm != null && giveRating != null && lastWatchedFilm != '' && giveRating != '' && lastWatchedFilm.length <= 50 && !isNaN(giveRating) && giveRating <= 10) 
        ? (personalMovieDB.movies[lastWatchedFilm] = giveRating, console.log('Done!')) 
        : (i--, console.log('Error!'))

        // OLD CONDITION
        // if (lastWatchedFilm != null && giveRating != null && lastWatchedFilm != '' && giveRating != '' && lastWatchedFilm.length <= 50) {
        //     personalMovieDB.movies[lastWatchedFilm] = giveRating;
        //     console.log('Done!');
        // } else {
        //     i--;
        //     console.log('Error!');
        // }
    }
}
rememberMyFilms();

///// WHILE /////
// let i = 0;
// while (i < 2) {
//     lastWatchedFilm = prompt("One of the last movies you watched?", ""),
//     giveRating = prompt("How much would you rate it, from 1 to 10 stars?", "");

//     if (lastWatchedFilm != null && giveRating != null && lastWatchedFilm != '' && giveRating != '' && lastWatchedFilm.length <= 50) {
//         personalMovieDB.movies[lastWatchedFilm] = giveRating;
//         i++;
//         console.log('Done!');
//     } else {
//         console.log('Error!');
//     } 
// }

///// DO WHILE /////
// let i = 0;
// do {
//     lastWatchedFilm = prompt("One of the last movies you watched?", ""),
//     giveRating = prompt("How much would you rate it, from 1 to 10 stars?", "");

//     if (lastWatchedFilm != null && giveRating != null && lastWatchedFilm != '' && giveRating != '' && lastWatchedFilm.length <= 50) {
//         personalMovieDB.movies[lastWatchedFilm] = giveRating;
//         i++;
//         console.log('Done!');
//     } else {
//         console.log('Error!');
//     } 
// } while (i < 2);

let writeYourGenres = () => {
    for (let i = 1; i <= 3; i++) personalMovieDB['genres'].push(prompt(`Your favorite genre is number ${i}`, ``))
}
writeYourGenres();

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) personalMovieDB['genres'].push(prompt(`Your favorite genre is number ${i}`, ``))
// }
// writeYourGenres();

let showMyDB = hidden => !hidden ? console.log(personalMovieDB) : console.log('The Movie Database is private!');
showMyDB(personalMovieDB.private);

// function showMyDB() {
//     if (!personalMovieDB.private) {
//         console.log(personalMovieDB);
//     }
// }
// showMyDB();