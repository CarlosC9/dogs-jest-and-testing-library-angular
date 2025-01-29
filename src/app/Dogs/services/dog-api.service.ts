import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Dog, DogRandomResponse, DogsRandomResponse} from '@app/Dogs/models';

@Injectable({
  providedIn: 'root'
})
export class DogApiService {

  private readonly http = inject(HttpClient)

  private readonly DOG_API = 'https://dog.ceo/api/breeds'

  getRandomDog(): Observable<Dog> {
    return this.http.get<DogRandomResponse>(`${this.DOG_API}/image/random`).pipe(
      map(response => ({ image: response.message }))
    )
  }

  getRandomDogs(args: { quantity: number }): Observable<Dog[]> {
    return this.http.get<DogsRandomResponse>(`${this.DOG_API}/image/random/${args.quantity}`).pipe(
      map((response) => {
        return response.message.map((message) => ({ image: message }))
      })
    )
  }
}
