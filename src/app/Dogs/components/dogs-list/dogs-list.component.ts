import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {Dog} from '@app/Dogs/models';
import {DogItemComponent} from '@app/Dogs/components/dog-item/dog-item.component';

@Component({
  selector: 'app-dogs-list',
  standalone: true,
  imports: [
    DogItemComponent
  ],
  templateUrl: './dogs-list.component.html',
  styleUrl: './dogs-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DogsListComponent {

  dogsList = input<Dog[]>([])

}
