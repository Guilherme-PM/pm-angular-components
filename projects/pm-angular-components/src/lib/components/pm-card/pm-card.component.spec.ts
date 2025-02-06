import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmCard } from './pm-card.component';

describe('PmCard', () => {
  let component: PmCard;
  let fixture: ComponentFixture<PmCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PmCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PmCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
