import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private _http: HttpClient) {}
  addclient(data: any): Observable<any> {
    return this._http.post(
      'https://trahult.pythonanywhere.com/client_add/',
      data
    );
  }
  getallclientlist(): Observable<any> {
    return this._http.get('https://trahult.pythonanywhere.com/client_add/');
  }
  getcaselist(): Observable<any> {
    return this._http.get('https://trahult.pythonanywhere.com/new-case/');
  }
  addcase(data: any): Observable<any> {
    return this._http.post(
      'https://trahult.pythonanywhere.com/new-case/',
      data
    );
  }
  nexthearing(data: any): Observable<any> {
    return this._http.post(
      'https://trahult.pythonanywhere.com/next-listing/',
      data
    );
  }
  hearingHistory(data: any): Observable<any> {
    return this._http.post(
      'https://trahult.pythonanywhere.com/next_hearing_by_sid/',
      data
    );
  }
  caseType(): Observable<any> {
    return this._http.get('https://trahult.pythonanywhere.com/case-type/');
  }
  todaycase(): Observable<any> {
    const currentDate = new Date();
    const options = { timeZone: 'Asia/Kolkata' };
    const indianDate = new Date(currentDate.toLocaleString('en-US', options));

    // Format the date as needed (e.g., YYYY-MM-DD)
    const formattedDate = indianDate.toISOString().slice(0, 10);

    // Construct the URL with the formatted date
    const url = `https://trahult.pythonanywhere.com/home/${formattedDate}/`;

    return this._http.get(url);
  }
  inform(data: any): Observable<any> {
    return this._http.post(
      'https://trahult.pythonanywhere.com/next-listing/',
      data
    );
  }
}
