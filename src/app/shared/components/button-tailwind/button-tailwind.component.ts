import {ChangeDetectionStrategy, Component, input, output} from '@angular/core';

@Component({
  selector: 'app-button-tailwind',
  standalone: true,
  imports: [],
  templateUrl: './button-tailwind.component.html',
  styleUrl: './button-tailwind.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonTailwindComponent {

  public readonly text = input.required<string>()

  public readonly onClick = output()

}
