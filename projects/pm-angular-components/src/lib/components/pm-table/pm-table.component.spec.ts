import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmTable } from './pm-table.component';

describe('PmTable', () => {
  let component: PmTable;
  let fixture: ComponentFixture<PmTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PmTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PmTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
