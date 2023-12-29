import { DialogRef } from '@angular/cdk/dialog';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/modules/admin/components/services/client.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NotFoundComponent } from '../not-found/not-found.component';

@Component({
  selector: 'app-hearing-history',
  templateUrl: './hearing-history.component.html',
  styleUrls: ['./hearing-history.component.css'],
})
export class HearingHistoryComponent {
  searchobj: any = {
    sid: '',
  };
  responseData: any;
  responseData2: any;
  responseData3: any;
  responseData4: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private sanitizer: DomSanitizer,
    private toastr: ToastrService
  ) {}
  transformImagePath(path: string): SafeResourceUrl {
    // Assuming the path is relative and contains a PDF extension
    // Replace PDF extension with an image extension (e.g., jpg, png)
    const imagePath = path.replace('.pdf', '.pdf'); // Replace '.pdf' with the image extension

    // const imageUrl = `http://127.0.0.1:8000${imagePath}`;
    const imageUrl = `https://trahult.pythonanywhere.com${imagePath}`;

    // Sanitize the URL to make it safe to use
    return this.sanitizer.bypassSecurityTrustResourceUrl(imageUrl);
  }
  onSearchAll() {
    this.responseData = null;
    this.responseData2 = null;
    this.responseData3 = null;
    this.responseData4 = null;
    this.onSearch();
    this.onSearchCase();
    this.onSearchRules();
    this.onSearchRespondent();
  }

  onSearch() {
    this.http
      .post(
        'https://trahult.pythonanywhere.com/next_hearing_by_sid/',
        this.searchobj
      )
      .subscribe((res: any) => {
        if (!res.is_valid) {
          this.toastr.error('The provided ID does not exist'); // Show error in console
        } else {
          this.responseData2 = res; // Store the response data if needed
          console.log(res);
        }
      });
  }
  onSearchCase() {
    this.http
      .post(
        'https://trahult.pythonanywhere.com/case_details_by_sid/',
        this.searchobj
      )
      .subscribe((res: any) => {
        this.responseData = res; // Store the response data
        console.log(res);
      });
  }
  onSearchRules() {
    this.http
      .post('https://trahult.pythonanywhere.com/rules_by_sid/', this.searchobj)
      .subscribe((res: any) => {
        this.responseData3 = res; // Store the response data
        console.log(res);
      });
  }
  onSearchRespondent() {
    this.http
      .post(
        'https://trahult.pythonanywhere.com/respondent_by_sid/',
        this.searchobj
      )
      .subscribe((res: any) => {
        this.responseData4 = res; // Store the response data
        console.log(res);
      });
  }
}
