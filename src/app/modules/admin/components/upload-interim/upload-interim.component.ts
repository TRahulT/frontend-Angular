import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClientService } from '../services/client.service';
import { DialogRef } from '@angular/cdk/dialog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload-interim',
  templateUrl: './upload-interim.component.html',
  styleUrls: ['./upload-interim.component.css'],
})
export class UploadInterimComponent {
  uploadform: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _fb: FormBuilder,
    private _clientservice: ClientService,
    private _dialog: DialogRef<UploadInterimComponent>,
    private _http: HttpClient
  ) {
    this.uploadform = this._fb.group({
      next_hearing_details: this.data.CNR_no,
      order_details: null, // Initialize order_details as null
    });
  }

  onCancelClick(): void {
    this._dialog.close();
  }

  onFileSelected(event: any) {
    const fileInput = event.target;

    if (fileInput.files.length > 0) {
      this.uploadform.get('order_details')?.setValue(fileInput.files[0]);
    }
  }

  onFormSubmit() {
    const formData = new FormData();
    formData.append(
      'next_hearing_details',
      this.uploadform.get('next_hearing_details')?.value
    );
    formData.append(
      'order_details',
      this.uploadform.get('order_details')?.value
    );

    this.uploadInterimDocument(formData, this.data.CNR_no).subscribe(
      (response) => {
        if (response !== 201) {
          alert('An Interim Order already exists for this Listening Date ');
        } else {
          alert('Copy of Order Uploaded successfully');
          this._dialog.close();
        }
      },
      (error) => {
        console.error('Upload error', error);
      }
    );
  }

  uploadInterimDocument(formData: FormData, CNR_no: string) {
    const uploadUrl = `https://trahult.pythonanywhere.com/copy-of-order/${CNR_no}/`;
    return this._http.post(uploadUrl, formData);
  }
}
