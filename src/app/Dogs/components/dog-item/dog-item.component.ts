import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-dog-item',
  standalone: true,
  imports: [],
  templateUrl: './dog-item.component.html',
  styleUrl: './dog-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DogItemComponent {

  public readonly img = input.required<string>()

}
