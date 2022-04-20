import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit {
  choice: number = 0;
  @Input() name!: string;
  @Output() newItemEvent = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}
  radioChange(value: number) {
    this.newItemEvent.emit(value);
  }
}
