import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmForm } from './pm-form.component';

describe('PmForm', () => {
  let component: PmForm;
  let fixture: ComponentFixture<PmForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PmForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PmForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
