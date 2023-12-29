import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ClientService } from '../services/client.service';
import { CaseAddComponent } from '../case-add/case-add.component';
import { MatDialog } from '@angular/material/dialog';
import { FirstHearingComponent } from '../first-hearing/first-hearing.component';

@Component({
  selector: 'app-case-list',
  templateUrl: './case-list.component.html',
  styleUrls: ['./case-list.component.css'],
})
export class CaseListComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'client_details',
    'case_type',
    'filling_number',
    'filling_date',
    'registration_number',
    // 'registration_date',
    'cnr_number',
    'first_hearing',
    'case_stage',
    'court_no',
    'petitioner',
    'advocate_name',
    'police_station',
    'fir_number',
    'fir_year',
    'fir_date',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _clientService: ClientService,
    private _dialog: MatDialog
  ) {}
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  addCase() {
    this._dialog.open(CaseAddComponent);
  }

  onCancelClick(
    cnr: string,
    first_hearing: string,
    court: string,
    case_stage: string
  ) {
    // console.log(cnr);
    const dialogRef = this._dialog.open(FirstHearingComponent, {
      maxWidth: '70vw',
      maxHeight: '70vh',
      height: '80%',
      width: '80%',
      panelClass: 'full-screen-modal',
      data: {
        CNR_no: cnr,
        first_hearing: first_hearing,
        court_no: court,
        case_stage: case_stage,
      },
    });
  }
  ngOnInit() {
    this._clientService.getcaselist().subscribe({
      next: (res) => {
        // this.clients = data;
        // console.log(data);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }
}
