import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from 'src/app/Movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  @Output() deleteMovieEvent = new EventEmitter<Movie>();
  @Input() movies!: Movie[];
  gridColumns = 4;
  constructor() {}

  ngOnInit(): void {}

  delete(movie: any) {
    if (movie) {
      this.deleteMovieEvent.emit(movie);
    }
  }
}
