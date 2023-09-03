'use strict';

let start = (number) => {
    while (number == null || number == '' || isNaN(number) ) {
        number = +prompt("How many films have you already watched? (Type only numbers)", "");
    }
    return number;
}

const personalMovieDB = {
    count: start(),
    movies: {},
    actors: {},
    genres: [],
    private: false
};

let detectPersonalLevel = (count) => {
    (count < 10) ? console.log("Watched a few films")
    : (count >= 10 && count < 30) ? console.log("You are a classic viewer")
    : (count >= 30) ? console.log("You are a movie buff!")
    : console.log("There was an error!");
}

let rememberMyFilms = () => {
    for (let i = 0; i < 2; i++) {
        let lastWatchedFilm = prompt("One of the last movies you watched?", ""),
            giveRate = +prompt("How much would you rate it, from 1 to 10 stars?", "");

        (lastWatchedFilm != null && giveRate != null && lastWatchedFilm != '' && giveRate != '' && lastWatchedFilm.length <= 50 && !isNaN(giveRate) && giveRate <= 10) 
        ? (personalMovieDB.movies[lastWatchedFilm] = giveRate, console.log('Done!')) 
        : (i--, console.log('Error!'));
    }
}

let writeYourGenres = (genres) => {
    for (let i = 1; i <= 3; i++) genres.push(prompt(`Your favorite genre is number ${i}`, ``))
}

let showMyDB = hidden => !hidden ? console.log(personalMovieDB) : console.log('The Movie Database is private!');

detectPersonalLevel(personalMovieDB.count);
rememberMyFilms();
writeYourGenres(personalMovieDB['genres']);
showMyDB(personalMovieDB.private);