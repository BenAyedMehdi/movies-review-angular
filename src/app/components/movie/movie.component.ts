import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/Movie';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ViewMovieComponent } from '../view-movie/view-movie.component';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  @Input() movie!: Movie;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    this.dialog.open(ViewMovieComponent, {
      data: {
        animal: 'panda',
      },
    });
  }
}
