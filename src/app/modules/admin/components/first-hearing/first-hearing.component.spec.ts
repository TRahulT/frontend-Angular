import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstHearingComponent } from './first-hearing.component';

describe('FirstHearingComponent', () => {
  let component: FirstHearingComponent;
  let fixture: ComponentFixture<FirstHearingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstHearingComponent]
    });
    fixture = TestBed.createComponent(FirstHearingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
