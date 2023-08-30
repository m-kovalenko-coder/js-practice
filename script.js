const   numberOfFilms = +prompt("How many films have you already watched?", ""),
        personalMovieDB = {
            count: numberOfFilms,
            movies: {},
            actors: {},
            genres: [],
            privat: false
        };

///// FOR /////
for (let i = 0; i < 2; i++) {
    lastWatchedFilm = prompt("One of the last movies you watched?", ""),
    giveRating = prompt("How much would you rate it, from 1 to 10 stars?", "");

    if (lastWatchedFilm != null && giveRating != null && lastWatchedFilm != '' && giveRating != '' && lastWatchedFilm.length <= 50) {
        personalMovieDB.movies[lastWatchedFilm] = giveRating;
        console.log('Done!');
    } else {
        i--;
        console.log('Error!');
    }
}

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

if (personalMovieDB.count < 10) {
    console.log("Watched quite a few films");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("You are a classic spectator");
} else if (personalMovieDB.count >= 30) {
    console.log("You are a movie buff!");
} else {
    console.log("There was an error!");
}

console.log(personalMovieDB);