import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ClientService } from '../services/client.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css'],
})
export class ClientAddComponent {
  clientform: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _clientservice: ClientService,
    private _dailog: DialogRef<ClientAddComponent>
  ) {
    this.clientform = this._fb.group({
      name: '',
      fh_name: '',
      gender: '',
      phone_number: '',
      password: '',
      address: '',
    });
  }
  onCancelClick(): void {
    this._dailog.close();
  }
  onFormSubmit() {
    if (this.clientform.valid) {
      // console.log(this.clientform.value);
      this._clientservice.addclient(this.clientform.value).subscribe({
        next: (val: any) => {
          alert('client added sucessfully');
          this._dailog.close();
        },
        error: (err: any) => {
          console.error(err);
        },
      });
    }
  }
}
