import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URL = 'https://test-node-jb.herokuapp.com/api';

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  // tslint:disable-next-line: typedef
  login(email: string, password: string) {
    const body = {
      email,
      password
    }
    return this.httpClient.post('https://test-node-jb.herokuapp.com/api/auth/login', body)
    .pipe(
      map(
        (response: any) => {
          localStorage.setItem('TOKEN_APP', response.token);
          localStorage.setItem('USER_ID', response.userId);
          console.log('Token Saved');
          return response;
        }

      )
    );
  }

  // tslint:disable-next-line: typedef
  logout() {
    localStorage.removeItem('TOKEN_APP');
    this.router.navigate(['/home']);
  }

  // tslint:disable-next-line: typedef
  register(email: string, firstName: string, lastName: string, pseudo: string, password: string) {
    const body = {
      email,
      firstName,
      lastName,
      pseudo,
      password
    }
    return this.httpClient.post('https://test-node-jb.herokuapp.com/api/auth/signup', body);
  }
}
