import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from '../Movie';
import { MoviesService } from './movies.service';

@Injectable({
  providedIn: 'root',
})
export class StorageMoviesService {
  private moviesSub!: Subscription;
  movies: Movie[] = [];
  getMovies() {
    this.apiService.getMovies().subscribe((m) => (this.movies = [...m]));
    this.moviesSub = this.apiService
      .getMoviesUpdatedListener()
      .subscribe((movies: Movie[]) => (this.movies = movies));
    console.log('from storage', this.movies);
    return this.movies;
  }

  constructor(private apiService: MoviesService) {
    this.apiService.getMovies().subscribe((m) => (this.movies = m));
    this.moviesSub = this.apiService
      .getMoviesUpdatedListener()
      .subscribe((movies: Movie[]) => (this.movies = movies));
    console.log('from storage', this.movies);
  }
}
