import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayCasesComponent } from './today-cases.component';

describe('TodayCasesComponent', () => {
  let component: TodayCasesComponent;
  let fixture: ComponentFixture<TodayCasesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodayCasesComponent]
    });
    fixture = TestBed.createComponent(TodayCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
