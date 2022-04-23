import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/Movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  @Input() movies!: Movie[];
  gridColumns = 4;
  constructor() {}

  ngOnInit(): void {}
}
