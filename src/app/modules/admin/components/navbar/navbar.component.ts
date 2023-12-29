import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClientAddComponent } from '../client-add/client-add.component';
import { CaseAddComponent } from '../case-add/case-add.component';
import { CaseListComponent } from '../case-list/case-list.component';
import { Route } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  name = 'Angular';
  public isCollapsed = true;

  constructor(private _dialog: MatDialog) {}

  openAddClient() {
    this._dialog.open(ClientAddComponent);
  }
  addCase() {
    this._dialog.open(CaseAddComponent, {
      maxWidth: '70vw',
      maxHeight: '70vh',
      height: '80%',
      width: '80%',
      panelClass: 'full-screen-modal',
    });
  }
  myCase() {
    this._dialog.open(CaseListComponent, {
      maxWidth: '70vw',
      maxHeight: '70vh',
      height: '80%',
      width: '80%',
      panelClass: 'full-screen-modal',
    });
  }
}
