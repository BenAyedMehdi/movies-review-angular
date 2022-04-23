import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Movie } from 'src/app/Movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css'],
})
export class AddMovieComponent implements OnInit {
  @Output() onAddMovie: EventEmitter<Movie> = new EventEmitter();

  movie!: Movie;
  choice!: number;
  ratingTypes: string[] = [
    'directing',
    'acting',
    'costumeDesign',
    'editing',
    'music',
    'visualEffects',
    'screenplay',
  ];
  ratings = this.ratingTypes.map((type) => {
    return { type: type, value: 0 };
  });
  title: string = '';
  director: string = '';
  writers: string = '';
  year: string = '';
  stars: string = '';
  imgUrl: string = '';
  review: string = '';
  constructor(
    public dialogRef: MatDialogRef<AddMovieComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Movie
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {}
  getChange(value: any, type: string) {
    const i = this.ratings.indexOf(
      this.ratings.filter((e) => e.type === type)[0]
    );
    this.ratings[i].value = value;
  }
  onSubmit(): Movie {
    //To improve
    const x = this.ratings.map((e) => {
      return JSON.parse(`{"${e.type}": ${e.value}}`);
    });
    const y = Object.assign({}, ...x);
    this.movie = {
      name: this.title,
      year: this.year,
      director: this.director,
      stars: this.stars,
      writers: this.writers,
      imgUrl: this.imgUrl,
      review: this.review,
      ratings: y,
    };
    return this.movie;
  }
}
