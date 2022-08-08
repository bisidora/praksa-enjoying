import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FromServerPromise {
  constructor(private http: HttpClient) {}

  getFromServer() {
    return firstValueFrom(
      this.http.get('https://dog.ceo/api/breeds/image/random')
    );
  }
}
