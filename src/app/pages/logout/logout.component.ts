import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent {
  constructor(private route: Router) {
    this.onLogout();
  }
  onLogout() {
    // Clear the authentication-related information from local storage
    localStorage.removeItem('loginToken');
    localStorage.setItem('isloggedin', 'false');
    // Redirect the user to the login page or any other appropriate page
    this.route.navigate(['login']); // Replace '/login' with the appropriate route
  }
}
