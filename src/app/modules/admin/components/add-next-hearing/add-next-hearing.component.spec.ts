import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNextHearingComponent } from './add-next-hearing.component';

describe('AddNextHearingComponent', () => {
  let component: AddNextHearingComponent;
  let fixture: ComponentFixture<AddNextHearingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNextHearingComponent]
    });
    fixture = TestBed.createComponent(AddNextHearingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
