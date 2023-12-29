import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { ClientAddComponent } from './components/client-add/client-add.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { NgFor } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';

import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';
import { NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CaseAddComponent } from './components/case-add/case-add.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { AddNextHearingComponent } from './components/add-next-hearing/add-next-hearing.component';
import { FirstHearingComponent } from './components/first-hearing/first-hearing.component';
import { CaseListComponent } from './components/case-list/case-list.component';
import { UploadInterimComponent } from './components/upload-interim/upload-interim.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { TodayCasesComponent } from './components/today-cases/today-cases.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    ClientAddComponent,
    CaseAddComponent,
    AddNextHearingComponent,
    FirstHearingComponent,
    CaseListComponent,
    UploadInterimComponent,
    TodayCasesComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgbCarouselModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    NgbCollapseModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NgFor,
    MatSelectModule,
  ],
})
export class AdminModule {}
