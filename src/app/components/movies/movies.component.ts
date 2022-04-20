import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/Movie';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  private moviesSub!: Subscription;

  gridColumns = 4;
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe((m) => (this.movies = m));
    this.moviesSub = this.moviesService
      .getMoviesUpdatedListener()
      .subscribe(
        (movies: Movie[]) => (this.movies = [...this.movies, movies[0]])
      );
  }
}
