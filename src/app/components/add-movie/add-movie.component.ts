import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css'],
})
export class AddMovieComponent implements OnInit {
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
}
