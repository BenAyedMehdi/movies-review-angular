import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
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
  private moviesUpdated = new Subject<Movie[]>();
  private apiUrl = 'http://localhost:5000/movies';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl);
  }
  service!: MoviesService;
  getMoviesUpdatedListener() {
    return this.moviesUpdated.asObservable();
  }
  addMovie(movie: Movie): Observable<Movie> {
    const x = this.http.post<Movie>(this.apiUrl, movie, httpOptions);

    let y: Movie[] = [];
    this.getMovies().subscribe((m) => {
      console.log('m');
      console.log(m);
      y = [...m];
    });
    console.log('y');
    console.log(y);
    y.push(movie);
    console.log(y);
    const z = this.moviesUpdated.next([...y]);

    console.log('z');
    console.log(z);
    return x;
  }
}
