import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadInterimComponent } from './upload-interim.component';

describe('UploadInterimComponent', () => {
  let component: UploadInterimComponent;
  let fixture: ComponentFixture<UploadInterimComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadInterimComponent]
    });
    fixture = TestBed.createComponent(UploadInterimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
