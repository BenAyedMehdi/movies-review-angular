import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/Movie';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css'],
})
export class AddMovieComponent implements OnInit {
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
  constructor() {}

  ngOnInit(): void {}
  getChange(value: any, type: string) {
    const i = this.ratings.indexOf(
      this.ratings.filter((e) => e.type === type)[0]
    );
    this.ratings[i].value = value;
  }
  onSubmit() {
    console.log(this.ratings);
    const x = this.ratings.map((e) => {
      //console.log(`{"${e.type}": ${e.value}}`);
      return JSON.parse(`{"${e.type}": ${e.value}}`);
    });
    console.log(x);
    const y = Object.assign({}, ...x);
    console.log(y);
    this.movie = {
      id: 0,
      name: this.title,
      year: this.year,
      director: this.director,
      stars: this.stars,
      writers: this.writers,
      imgUrl: this.imgUrl,
      review: this.review,
      ratings: y,
    };
    console.log(this.movie);
  }
}
