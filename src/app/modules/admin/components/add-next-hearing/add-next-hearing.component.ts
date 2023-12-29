import { Component, Inject, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ClientService } from '../services/client.service';
import { DialogRef } from '@angular/cdk/dialog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-next-hearing',
  templateUrl: './add-next-hearing.component.html',
  styleUrls: ['./add-next-hearing.component.css'],
})
export class AddNextHearingComponent {
  hearingform: FormGroup;
  clientnames: any[] = [];
  selectedValue2: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _fb: FormBuilder,
    private _clientservice: ClientService,
    private _dialog: DialogRef<AddNextHearingComponent>
  ) {
    this.hearingform = this._fb.group({
      case_detail: this.data.CNR_no,
      next_hearing_date: '',
      case_stage: '',
      court_no_judge: '',
    });
  }
  onCancelClick(): void {
    this._dialog.close();
  }
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
