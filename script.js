const   numberOfFilms = prompt("How many films have you already watched?", ""),
        personalMovieDB = {
            count: numberOfFilms,
            movies: {},
            actors: {},
            genres: [],
            privat: false
        },
        lastWatchedFilm = prompt("One of the last movies you watched?", ""),
        giveRating = +prompt("How much would you rate it?", ""),
        lastWatchedFilm2 = prompt("One of the last movies you watched?", ""),
        giveRating2 = +prompt("How much would you rate it?", "");

personalMovieDB.movies[lastWatchedFilm] = giveRating;
personalMovieDB.movies[lastWatchedFilm2] = giveRating2;

console.log(personalMovieDB);