import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/Movie';
import { MatDialog } from '@angular/material/dialog';
import { ViewMovieComponent } from '../view-movie/view-movie.component';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  @Input() movie!: Movie;
  @Output() deleteMovieEvent = new EventEmitter<Movie>();
  @Output() updateMovieEvent = new EventEmitter<Movie>();
  movieToDelete!: Movie;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    const dialogRef = this.dialog.open(ViewMovieComponent, {
      data: this.movie,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (result.action == 'delete') {
          this.movieToDelete = result;
          this.deleteMovieEvent.emit(this.movie);
        }
        if (result.action == 'update') {
          //console.log('result in movie: ', result);
          this.updateMovieEvent.emit(result.data);
        }
      }
    });
  }
}
