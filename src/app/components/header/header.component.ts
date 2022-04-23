import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Movie } from 'src/app/Movie';
import { AddMovieComponent } from '../add-movie/add-movie.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  movie!: Movie;
  @Output() newMovieEvent = new EventEmitter<Movie>();

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    const dialogRef = this.dialog.open(AddMovieComponent, {
      height: '95%',
      width: '80%',
      data: this.movie,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.movie = result;
      this.newMovieEvent.emit(this.movie);
    });
  }
}
