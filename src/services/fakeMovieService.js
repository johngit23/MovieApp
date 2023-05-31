// import { getGenres } from "./fakeGenreService";

const movies = [
    {
        _id: "5b21ca3eeb7f6fbccd4711815",
        title: "Terminator",
        genre: {_id: "5b21ca3eeb7f6fbccd4711818", name: "Action"},
        numberInStock: 6,
        dailyRentalRate: 2.5,
        publishDate: "2018-01-03T19:04:28.809Z"
    },
    {
        _id: "5b21ca3eeb7f6fbccd4711816",
        title: "Die Hard",
        genre: {_id: "5b21ca3eeb7f6fbccd4711818", name: "Action"},
        numberInStock: 5,
        dailyRentalRate: 2.5,
    },
    {
        _id: "5b21ca3eeb7f6fbccd4711817",
        title: "Get Out",
        genre: {_id: "5b21ca3eeb7f6fbccd4711820", name: "Thriller"},
        numberInStock: 8,
        dailyRentalRate: 3.5,
    },
    {
        _id: "5b21ca3eeb7f6fbccd4711819",
        title: "Trip to Italy",
        genre: {_id: "5b21ca3eeb7f6fbccd4711814", name: "Comedy"},
        numberInStock: 7,
        dailyRentalRate: 3.5,
    },
    {
        _id: "5b21ca3eeb7f6fbccd471181a",
        title: "Airplane",
        genre: {_id: "5b21ca3eeb7f6fbccd4711814", name: "Comedy"},
        numberInStock: 7,
        dailyRentalRate: 3.5,
    },
    {
        _id: "5b21ca3eeb7f6fbccd471181b",
        title: "Wedding Crushers",
        genre: {_id: "5b21ca3eeb7f6fbccd4711814", name: "Comedy"},
        numberInStock: 7,
        dailyRentalRate: 3.5,
    },
    {
        _id: "5b21ca3eeb7f6fbccd471181e",
        title: "Gone Girl",
        genre: {_id: "5b21ca3eeb7f6fbccd4711820", name: "Thriller"},
        numberInStock: 7,
        dailyRentalRate: 4.5,
    },
    {
        _id: "5b21ca3eeb7f6fbccd471181f",
        title: "The Sixth Sense",
        genre: {_id: "5b21ca3eeb7f6fbccd4711820", name: "Thriller"},
        numberInStock: 4,
        dailyRentalRate: 3.5,
    },
    {
        _id: "5b21ca3eeb7f6fbccd4711821",
        title: "The Avengers",
        genre: {_id: "5b21ca3eeb7f6fbccd4711818", name: "Action"},
        numberInStock: 7,
        dailyRentalRate: 3.5,
    }

];

export function getMovies() {
    return movies;
}
export function getMovie(id) {
    return movies.find(m => m._id === id) || {};
}
// export function saveMovie(movie) {
//     let movieInDb = movies.find(m => m._id === movie.id) || {};
//     movieInDb.name= movie.name;
//     movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genre.genreId);
//     movieInDb.numberInStock = movie.numberInStock;
//     movieInDb.dailyRentalRate= movie.dailyRentalRate;

//     if(!movieInDb){
//         return "There are no movies in the database"
//     }
// }

