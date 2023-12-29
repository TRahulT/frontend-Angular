import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginObj: any = {
    phone_number: '',
    password: '',
  };
  constructor(private http: HttpClient, private router: Router) {}
  onLogin() {
    this.http
      .post('https://trahult.pythonanywhere.com/advocate-login/', this.loginObj)
      .subscribe((res: any) => {
        if (res.is_log) {
          console.log(res);
          localStorage.setItem('loginToken', res.token);
          localStorage.setItem('isloggedin', 'true');
          this.router.navigateByUrl('/admin/home');
        } else {
          alert('user not loggedin !! ');
          localStorage.setItem('isloggedin', 'false');
        }
      });
  }
}
