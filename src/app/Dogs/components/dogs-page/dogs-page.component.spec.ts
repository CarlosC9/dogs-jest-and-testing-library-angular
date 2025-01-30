import {render} from '@testing-library/angular';
import {DogsPageComponent} from './dogs-page.component';
import {DogApiService} from '@app/Dogs/services';
import {of} from 'rxjs';
import {Component, input, output} from '@angular/core';
import {By} from '@angular/platform-browser';

@Component({
  selector: 'app-dogs-list',
  template: '',
  standalone: true
})
class DogListComponentMock {
  dogsList = input.required<string>()
}

@Component({
  selector: 'app-button-tailwind',
  template: '',
  standalone: true
})
class ButtonTailwindComponentMock {
  onClick = output<void>()
}


describe('DogsPageComponent', () => {

  let dogApiService: jest.Mocked<DogApiService>

  beforeEach(() => {
    dogApiService = {
      getRandomDog: jest.fn(),
      getRandomDogs: jest.fn(),
    } as unknown as jest.Mocked<DogApiService>
    dogApiService.getRandomDogs.mockReturnValueOnce(of([
      { image: 'http://dog-api-custom/false-dog.jpg' },
      { image: 'http://dog-api-custom/false-dog2.jpg' }
    ]))
  })

  it('should load new dogs when user click button', async () => {
    const dogListMock = [
      { image: 'http://dog-api-custom/false-dog3.jpg' },
      { image: 'http://dog-api-custom/false-dog4.jpg' }
    ]
    const componentRender =  await render(DogsPageComponent, {
      providers: [
        { provide: DogApiService, useValue: dogApiService },
      ],
      componentImports: [ DogListComponentMock, ButtonTailwindComponentMock ],
    })
    const componentInstance = componentRender.fixture.componentInstance
    const buttonTailwindMock = componentRender.fixture.debugElement.query(By.directive(ButtonTailwindComponentMock)).componentInstance as ButtonTailwindComponentMock

    dogApiService.getRandomDogs.mockReturnValueOnce(of(dogListMock))
    buttonTailwindMock.onClick.emit()

    console.log((componentRender.fixture.nativeElement as HTMLDivElement).innerHTML)

    expect(componentInstance.dogs()).toEqual(dogListMock)
  })

})
