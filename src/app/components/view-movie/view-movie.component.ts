import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Movie } from 'src/app/Movie';
import { MovieComponent } from '../movie/movie.component';

@Component({
  selector: 'app-view-movie',
  templateUrl: './view-movie.component.html',
  styleUrls: ['./view-movie.component.css'],
})
export class ViewMovieComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<MovieComponent>,
    @Inject(MAT_DIALOG_DATA) public movie: Movie
  ) {}

  ngOnInit(): void {}

  onNoClick() {
    this.dialogRef.close();
    return null;
  }

  onDelete(movie: Movie) {
    return movie;
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
