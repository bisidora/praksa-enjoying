import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  @Output() clickedDog = new EventEmitter<number>();
  constructor() {}

  ngOnInit() {}

  onClick(clickedNumber: number) {
    this.clickedDog.emit(clickedNumber);
  }
}
