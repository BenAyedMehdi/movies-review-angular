import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Movie } from 'src/app/Movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css'],
})
export class AddMovieComponent implements OnInit {
  //@Output() onAddMovie: EventEmitter<Movie> = new EventEmitter();

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

  testRatings = [
    ['directing', 1],
    ['acting', 1],
    ['costumeDesign', 1],
    ['editing', 1],
    ['music', 1],
    ['visualEffects', 1],
    ['screenplay', 1],
  ];

  id: number = 0;
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
  ) {
    /*
    if (data) {
      this.title = data.name;
      this.director = data.director;
      this.writers = data.writers;
      this.year = data.year;
      this.stars = data.stars;
      this.imgUrl = data.imgUrl;
      this.review = data.review;
      this.testRatings = Object.entries(data.ratings);
      console.log(this.testRatings);
    }*/
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
    if (this.data) {
      this.id = this.data.id;
      this.title = this.data.name;
      this.director = this.data.director;
      this.writers = this.data.writers;
      this.year = this.data.year;
      this.stars = this.data.stars;
      this.imgUrl = this.data.imgUrl;
      this.review = this.data.review;
      this.testRatings = Object.entries(this.data.ratings);
      this.ratings = this.testRatings.map((r) => {
        return { type: String(r[0]), value: Number(r[1]) };
      });
    }
    //this.form.controls['title'].setValue('a');
  }

  getChange(value: any, type: string | number) {
    const i = this.ratings.indexOf(
      this.ratings.filter((e) => e.type === type)[0]
    );
    this.ratings[i].value = value;
    //console.log(this.ratings);
  }

  onSubmit(): Movie {
    //To improve
    const x = this.ratings.map((e) => {
      return JSON.parse(`{"${e.type}": ${e.value}}`);
    });
    const y = Object.assign({}, ...x);
    this.movie = {
      id: this.id,
      name: this.title,
      year: this.year,
      director: this.director,
      stars: this.stars,
      writers: this.writers,
      imgUrl: this.imgUrl,
      review: this.review,
      ratings: y,
    };
    //console.log('to submit', this.movie);
    return this.movie;
  }
}
