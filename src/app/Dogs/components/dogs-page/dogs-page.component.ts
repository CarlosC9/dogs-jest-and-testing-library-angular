import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {DogsListComponent} from '@app/Dogs/components/dogs-list/dogs-list.component';
import {DogApiService} from '@app/Dogs/services';
import {takeUntilDestroyed, toSignal} from '@angular/core/rxjs-interop';
import {ButtonTailwindComponent} from '@app/shared/components/button-tailwind/button-tailwind.component';
import {Subject, switchMap} from 'rxjs';

@Component({
  selector: 'app-dogs-page',
  standalone: true,
  imports: [
    DogsListComponent,
    ButtonTailwindComponent
  ],
  templateUrl: './dogs-page.component.html',
  styleUrl: './dogs-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DogsPageComponent implements OnInit {

  readonly dogsAPI = inject(DogApiService)

  readonly getRandomDogsSubject$ = new Subject<void>()
  readonly getRandomDogs$ = this.getRandomDogsSubject$.pipe(
    switchMap(() => this.dogsAPI.getRandomDogs({ quantity: 12 })),
    takeUntilDestroyed()
  )

  readonly dogs = toSignal(this.getRandomDogs$)

  ngOnInit() {
    this.getRandomDogsSubject$.next()
  }

}
