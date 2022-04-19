import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Movie } from 'src/app/Movie';

@Component({
  selector: 'app-view-movie',
  templateUrl: './view-movie.component.html',
  styleUrls: ['./view-movie.component.css'],
})
export class ViewMovieComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Movie) {}

  ngOnInit(): void {}
}
