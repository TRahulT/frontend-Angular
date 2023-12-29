import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let _router = inject(Router);
  let Is_logged = localStorage.getItem('isloggedin');

  if (Is_logged == 'false') {
    // alert('Not Authenticated User!!');
    _router.navigateByUrl('/login');

    return false;
  }

  return true;
};
