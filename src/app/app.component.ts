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
    console.log('movie in app', this.movies);
  }
}
