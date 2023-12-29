import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ClientService } from '../services/client.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-case-add',
  templateUrl: './case-add.component.html',
  styleUrls: ['./case-add.component.css'],
})
export class CaseAddComponent implements OnInit {
  addcaseform: FormGroup;
  selectedValue: any; // Selected client name
  selectedValue2: any; // Selected case type
  casenames: any[] = [];
  clientnames: any[] = [];

  constructor(
    private _fb: FormBuilder,
    private _clientservice: ClientService,
    private dialogRef: MatDialogRef<CaseAddComponent>,
    private _router: Router,
    private http: HttpClient
  ) {
    this.addcaseform = this._fb.group({
      client_details: '',
      case_type: '',
      filling_number: '',
      filling_date: '',
      registration_number: '',
      registration_date: '',
      cnr_number: '',
      first_hearing: '',
      case_stage: '',
      court_no: '',
      petitioner: '',
      advocate_name: '',
      police_station: '',
      fir_number: '',
      fir_year: '',
      fir_date: '',
    });
  }

  ngOnInit() {
    this._clientservice.getallclientlist().subscribe((data) => {
      this.clientnames = data;
      console.log(data);
    });

    this._clientservice.caseType().subscribe((data) => {
      this.casenames = data;
      console.log(data);
    });
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onFormSubmit() {
    if (this.addcaseform.valid) {
      console.log(this.addcaseform.value);
      // this.addcaseform.patchValue({
      //   client_details: this.selectedValue,
      //   case_type: this.selectedValue2,
      // });
      this._clientservice.addcase(this.addcaseform.value).subscribe({
        next: (val: any) => {
          console.log('Successful response:', val);
          alert('New Case added successfully!!');
          this.dialogRef.close();
        },
        error: (err: any) => {
          console.error(err);
        },
      });
    }
  }
}
