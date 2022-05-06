import { Component, OnInit } from '@angular/core';
import { Movie } from './Movie';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe((m) => (this.movies = m));
  }
  getNew(newMovie: any) {
    if (newMovie) {
      this.moviesService
        .addMovie(newMovie)
        .subscribe((m) => this.movies.push(newMovie));
    }
    this.moviesService.getMovies().subscribe((m) => (this.movies = m));
  }
  delete(movie: any) {
    if (movie) {
      this.moviesService
        .deleteMovie(movie)
        .subscribe(
          () => (this.movies = this.movies.filter((m) => m.id !== movie.id))
        );
    }
  }

  update(movie: any) {
    if (movie) {
      //console.log('in app', movie);
      this.moviesService
        .updateMovie(movie)
        .subscribe(
          () =>
            (this.movies = [
              ...this.movies.filter((m) => m.id !== movie.id),
              movie,
            ])
        );
    }
  }
  //In update branch
}
