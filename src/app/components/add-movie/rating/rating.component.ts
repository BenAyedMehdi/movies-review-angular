import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit {
  @Input() arr!: (string | number)[];
  //choice: number = this.arr ? Number(this.arr[1]) : 0;
  @Output() newItemEvent = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}
  radioChange(value: number | string) {
    this.newItemEvent.emit(Number(value));
  }
}
