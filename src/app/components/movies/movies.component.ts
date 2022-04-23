import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/Movie';
import { Subscription } from 'rxjs';
import { StorageMoviesService } from 'src/app/services/storage-movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  mmm: Movie[] = [];
  private moviesSub!: Subscription;

  gridColumns = 4;
  constructor(
    private moviesService: MoviesService,
    private storage: StorageMoviesService
  ) {}

  ngOnDestroy(): void {
    this.moviesSub.unsubscribe();
  }

  ngOnInit(): void {
    this.movies = this.storage.getMovies();
    /*
    this.storage.getMovies().subscribe((m) => (this.movies = m));
    this.moviesSub = this.storage
      .getMoviesUpdatedListener()
      .subscribe((movies: Movie[]) => (this.movies = movies));

    console.log('mmm', this.movies);

    /*
    this.moviesService.getMovies().subscribe((m) => (this.movies = m));
    this.moviesSub = this.moviesService
      .getMoviesUpdatedListener()
      .subscribe(
        (movies: Movie[]) => (this.movies = [...this.movies, movies[0]])
      );
    console.log('movies', this.movies);*/
  }
}
