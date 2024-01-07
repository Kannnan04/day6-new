class movie{
    constructor(title, studio, rating = "PG "){
        this.title = title;
        this.studio = studio;
        this.rating = rating;

    }
}
class Movie {
  
    static getPG(movies) {
      return movies.filter(movie => movie.rating === "PG");
    }
  }
  
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

const moviesArray = [
    new Movie("Movie1", "Studio1", "PG"),
    new Movie("Movie2", "Studio2", "PG-13"),
    new Movie("Movie3", "Studio3", "R"),
  ];
  
  const pgMoviesArray = Movie.getPG(moviesArray);
  console.log(pgMoviesArray);
  