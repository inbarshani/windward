import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetsTableComponent } from './fleets-table.component';

describe('FleetsTableComponent', () => {
  let component: FleetsTableComponent;
  let fixture: ComponentFixture<FleetsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FleetsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FleetsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
