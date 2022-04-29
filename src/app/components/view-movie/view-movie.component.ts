import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Movie } from 'src/app/Movie';

@Component({
  selector: 'app-view-movie',
  templateUrl: './view-movie.component.html',
  styleUrls: ['./view-movie.component.css'],
})
export class ViewMovieComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public movie: Movie) {}

  ngOnInit(): void {}

  onDelete(movie: Movie) {
    console.log(movie);
  }

  rates = Object.keys(this.movie.ratings).map((key) => {
    let a: Record<string, number> = this.movie.ratings;
    return [key, a[key]];
  });

  avg =
    this.rates.reduce((prev, cur) => {
      return prev + Number(cur[1]);
    }, 0) / this.rates.length;
}
