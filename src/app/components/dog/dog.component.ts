import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css'],
})
export class DogComponent implements OnInit {
  @Input() imageSrc: string;

  constructor() {}

  ngOnInit() {}
}
