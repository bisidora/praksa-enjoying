import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, repeat, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FromServerObservable {
  constructor(private http: HttpClient) {}

  getFromServer() {
    return this.http
      .get('https://dog.ceo/api/breeds/image/random')
      .pipe(delay(1000), repeat(), take(10));
  }
}
