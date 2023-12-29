import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseAddComponent } from './case-add.component';

describe('CaseAddComponent', () => {
  let component: CaseAddComponent;
  let fixture: ComponentFixture<CaseAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaseAddComponent]
    });
    fixture = TestBed.createComponent(CaseAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
