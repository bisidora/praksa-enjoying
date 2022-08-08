import { Component, OnDestroy, OnInit } from '@angular/core';
import { FromServerObservable } from './services/fromServerObservable';
import { FromServerPromise } from './services/fromServerPromise';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  dog1;
  dog2;
  constructor(
    private fromServerPromise: FromServerPromise,
    private fromServerObservable: FromServerObservable
  ) {
    console.log('CONSTRUCTOR');
  }
  ngOnInit() {
    console.log('NG ON INIT');
    this.fromServerPromise.getFromServer().then((dog) => {
      this.dog1 = dog;
    });
    this.fromServerObservable.getFromServer().subscribe((dog) => {
      console.log('ISI');
      this.dog2 = dog;
    });
  }

  ngOnDestroy() {
    console.log('NG ON DESTROY');
  }

  onToggleDogClicked(dogOrder: number) {
    if (dogOrder === 1) {
      this.fromServerPromise.getFromServer().then((dog) => {
        this.dog1 = dog;
      });
    } else {
      this.fromServerObservable.getFromServer().subscribe((dog) => {
        this.dog2 = dog;
      });
    }
  }
}
