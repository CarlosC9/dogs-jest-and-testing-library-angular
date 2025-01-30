import {render, screen} from '@testing-library/angular';
import {ButtonTailwindComponent} from './button-tailwind.component';
import {userEvent} from '@testing-library/user-event';

describe('ButtonTailwindComponent', () => {

  it('Should emit an event in the onClick output when the button is clicked', async () => {
    const onClickSpy = jest.fn()
    await render(ButtonTailwindComponent, {
      inputs: {
        text: ''
      },
      on: {
        onClick: onClickSpy
      }
    })

    await userEvent.click(await screen.findByRole('button'))

    expect(onClickSpy).toHaveBeenCalled()
  });
});
