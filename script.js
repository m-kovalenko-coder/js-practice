/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. 

После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// Код возьмите из предыдущего домашнего задания
  
const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,
  start: () => {
    personalMovieDB.count = +prompt("How many films have you already watched?", "");

    while (personalMovieDB.count == null || personalMovieDB.count == "" || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt("How many films have you already watched?", "");
    }
  },
  detectPersonalLevel: () => {
    personalMovieDB.count < 10
      ? console.log("Watched a few films")
      : personalMovieDB.count >= 10 && personalMovieDB.count < 30
      ? console.log("You are a classic spectator")
      : personalMovieDB.count >= 30
      ? console.log("You are a movie buff!")
      : console.log("There was an error!");
  },
  rememberMyFilms: () => {
    for (let i = 0; i < 3; i++) {
      let lastWatchedFilm = prompt("One of the last movies you watched?", ""),
          giveRating = +prompt("How much would you rate it, from 1 to 10 stars?", "");
  
      lastWatchedFilm != null &&
      giveRating != null &&
      lastWatchedFilm != "" &&
      giveRating != "" &&
      lastWatchedFilm.length <= 50 &&
      !isNaN(giveRating) &&
      giveRating <= 10
        ? ((personalMovieDB.movies[lastWatchedFilm] = giveRating),
          console.log("Done!"))
        : (i--, console.log("Error!"));
    }
  },
  writeYourGenres: () => {
    for (let y = 0; y <= 3; y++) {
      //TYPE THREE WORDS
      // personalMovieDB.genres[y] = prompt(`Your favorite genre is number ${y+1}`, ``);

      // if (personalMovieDB.genres[y] != null && personalMovieDB.genres[y] != "") {
      //   console.log("Done!")
      // } else {
      //   y--; 
      //   console.log("Error!");
      // } 

      // TYPE ONE LINES
      let genres = prompt(`Type your favorite genres separated by commas`, ``);

      if (genres === null || genres === "") {
        console.log("Yor wrote incorrect genres or nothing type!")
        y--;
      } else {
        personalMovieDB.genres = genres.split(', ');
        personalMovieDB.genres.sort();
      }
    }

    personalMovieDB.genres.forEach((item, i) => {
       console.log(`Любимый жанр №${i+1} - это ${item}`);
    })
  },
  showMyDB: (hidden) => !hidden ? console.log(personalMovieDB) : console.log("The Movie Database is private!"),
  toggleVisibleMyDB: () => personalMovieDB.private = !personalMovieDB.private
};

// personalMovieDB.detectPersonalLevel();
// personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
// personalMovieDB.showMyDB(personalMovieDB.private);