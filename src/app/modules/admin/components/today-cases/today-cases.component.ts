import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ClientService } from '../services/client.service';
import { AddNextHearingComponent } from '../add-next-hearing/add-next-hearing.component';
import { UploadInterimComponent } from '../upload-interim/upload-interim.component';

@Component({
  selector: 'app-today-cases',
  templateUrl: './today-cases.component.html',
  styleUrls: ['./today-cases.component.css'],
})
export class TodayCasesComponent implements OnInit {
  noCasesForToday: boolean = false;
  clients!: any[]; // You may want to replace 'any' with a specific type for your clients
  displayedColumns: string[] = [
    'Add Next Hearing',
    // 'id',
    'COO',
    'CNR_no',
    'case_type',
    'first_hearing',
    'client_name',
    'client_ph_no',
    'case_stage',
    'court_no_judge',
  ];
  dataSource!: MatTableDataSource<any>;
  title = 'angtut';
  clientnames = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(
    private _dialog: MatDialog,
    private _clientservice: ClientService
  ) {}
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit() {
    this._clientservice.todaycase().subscribe({
      // (data) => {
      //   this.clientnames = data;
      //   console.log(data);
      // }
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        // this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

        if (res.length === 0) {
          this.noCasesForToday = true;
        }
      },
    });
  }
  onCancelClick(cnr: string) {
    // console.log(cnr);
    const dialogRef = this._dialog.open(AddNextHearingComponent, {
      maxWidth: '70vw',
      maxHeight: '70vh',
      height: '80%',
      width: '80%',
      panelClass: 'full-screen-modal',
      data: { CNR_no: cnr },
    });
  }
  onInterim(cinfo: string) {
    // console.log(cinfo);
    const dialogRef = this._dialog.open(UploadInterimComponent, {
      maxWidth: '50vw',
      maxHeight: '50vh',
      height: '80%',
      width: '80%',
      panelClass: 'full-screen-modal',
      data: { CNR_no: cinfo },
    });
  }
}
