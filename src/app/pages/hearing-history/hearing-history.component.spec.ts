import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HearingHistoryComponent } from './hearing-history.component';

describe('HearingHistoryComponent', () => {
  let component: HearingHistoryComponent;
  let fixture: ComponentFixture<HearingHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HearingHistoryComponent]
    });
    fixture = TestBed.createComponent(HearingHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
