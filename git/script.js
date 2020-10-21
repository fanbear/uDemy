const numberOfFilms = prompt('Сколько фильмов вы посмотрели', '');

const personalMovieDB= {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genders: [],
    privat: false
};

const lastFilm = prompt('Последний фильм', '');
const raiting = prompt('На сколько оцените его', '');

personalMovieDB.movies[lastFilm] = raiting;
console.log(personalMovieDB.movies);