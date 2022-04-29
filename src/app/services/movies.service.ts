import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../Movie';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private apiUrl = 'http://localhost:5000/movies';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl);
  }

  addMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.apiUrl, movie, httpOptions);
  }

  deleteMovie(movie: Movie): Observable<Movie> {
    const url = `${this.apiUrl}/${movie.id}`;
    return this.http.delete<Movie>(url);
  }
}
