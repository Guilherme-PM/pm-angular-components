import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmInputText } from './pm-input-text.component';

describe('PmInputText', () => {
  let component: PmInputText;
  let fixture: ComponentFixture<PmInputText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PmInputText]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PmInputText);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
