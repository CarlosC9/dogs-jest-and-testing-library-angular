import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonTailwindComponent } from './button-tailwind.component';

describe('ButtonTailwindComponent', () => {
  let component: ButtonTailwindComponent;
  let fixture: ComponentFixture<ButtonTailwindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonTailwindComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonTailwindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
