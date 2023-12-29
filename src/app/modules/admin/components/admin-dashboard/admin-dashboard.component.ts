import { Component } from '@angular/core';
import { ClientAddComponent } from '../client-add/client-add.component';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent {
  constructor(private _dialog: MatDialog) {}

  openAddClient() {
    this._dialog.open(ClientAddComponent);
  }
}
