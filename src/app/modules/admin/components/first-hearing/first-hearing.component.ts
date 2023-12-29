import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ClientService } from '../services/client.service';
import { DialogRef } from '@angular/cdk/dialog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-first-hearing',
  templateUrl: './first-hearing.component.html',
  styleUrls: ['./first-hearing.component.css'],
})
export class FirstHearingComponent {
  // @Output() firstHearingAssignedChange = new EventEmitter<boolean>();
  // firstHearingAssigned: boolean = false;
  hearingform: FormGroup;
  clientnames: any[] = [];
  selectedValue2: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _fb: FormBuilder,
    private _clientservice: ClientService,
    private _dialog: DialogRef<FirstHearingComponent>
  ) {
    this.hearingform = this._fb.group({
      case_detail: this.data.CNR_no,
      next_hearing_date: this.data.first_hearing,
      case_stage: this.data.case_stage,
      court_no_judge: this.data.court_no,
    });
  }
  onCancelClick(): void {
    // this.firstHearingAssigned = true;
    // this.firstHearingAssignedChange.emit(this.firstHearingAssigned);
    this._dialog.close();
  }
  // onFirstHearingAssignedChange(value: boolean): void {
  //   this.firstHearingAssigned = value;
  // }
  onFormSubmit() {
    if (this.hearingform.valid) {
      // this.hearingform.patchValue({ case_detail: this.CNR_no });
      console.log(this.hearingform.value);
      this._clientservice.nexthearing(this.hearingform.value).subscribe({
        next: (val: any) => {
          alert('Hearing Added successfully!!');
          this._dialog.close();
        },
        error: (err: any) => {
          console.error(err);
        },
      });
    }
  }
}
