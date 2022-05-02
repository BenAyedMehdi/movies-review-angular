import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit {
  @Input() arr!: (string | number)[];
  choice: number = 0;
  @Output() newItemEvent = new EventEmitter<number>();
  constructor() {
    console.log(this.arr);
  }

  ngOnInit(): void {}
  radioChange(value: number) {
    console.log(this.arr);
    this.newItemEvent.emit(value);
  }
}
