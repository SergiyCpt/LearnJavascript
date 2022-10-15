'use strict';

let numberOfFilms;

function start(){
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "").trim();
  while(numberOfFilms ==='' || numberOfFilms== null || isNaN(numberOfFilms)){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "");
  }
}
start();

const personalMovieDB = {
    count : numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
    
};

function rememberMyFilms(){
  for(let i = 0; i < 2; i++){
    const a = prompt('Один из последних просмотренных фильмов?', "").trim(),
          b = prompt('На сколько оцените его?', "").trim();
          if(a != null && a != '' & b != null && b != '' & a.length < 50){
            personalMovieDB.movies[a] = b;
          }else{
            console.log('Error');
            i--;
          }
}  
}
rememberMyFilms();

function detectPersonalLevel(){
  if(personalMovieDB.count <= 10){
    console.log("Просмотрено довльно мало фильмов");
  }else if(personalMovieDB.count <= 30){
    console.log("Вы класичный зритель");
  }else if(personalMovieDB.count > 30){
    console.log("Вы киноман");
  }else{
    console.log('Ошибка');
  }
}
detectPersonalLevel();

function showMyBD(hidden){
  if(!hidden){
    console.log(personalMovieDB);
  }
}
showMyBD(personalMovieDB.privat);

function writeYourGenres(){
  for(let i = 1;i <= 3; i++){
    personalMovieDB.genres[i] = prompt(`Какие ваши любимые жанры под номером ${i}`).trim();
  }
}
writeYourGenres();
