import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as auth0 from 'auth0-js';

@Injectable()
export class AuthService {

  // tslint:disable-next-line:variable-name
  private id_Token: string;
  // tslint:disable-next-line:variable-name
  private access_Token: string;
  // tslint:disable-next-line:variable-name
  private expires_At: number;

  auth0 = new auth0.WebAuth({
    clientID: 'tapo1WDoJJ72p2a5AgjI3MSQhlfokvTv',
    domain: 'lubrifrenosjh.auth0.com',
    responseType: 'token id_token',
    redirectUri: 'http://localhost:4200/callback',
    scope: 'openid'
  });

  constructor(public router: Router) {}

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.localLogin(authResult);
        this.router.navigate(['/home']);
      } else if (err) {
        this.router.navigate(['/home']);
        console.log(err);
      }
    });
  }

  private localLogin(authResult): void {
    // Set the time that the Access Token will expire at
    const expiresAt = (authResult.expiresIn * 1000) + Date.now();
    this.access_Token = authResult.accessToken;
    this.id_Token = authResult.idToken;
    this.expires_At = expiresAt;
  }

  public renewTokens(): void {
    this.auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.localLogin(authResult);
      } else if (err) {
        alert(`Could not get a new token (${err.error}: ${err.error_description}).`);
        this.logout();
      }
    });
  }

  public logout(): void {
    // Remove tokens and expiry time
    this.access_Token = '';
    this.id_Token = '';
    this.expires_At = 0;

    this.auth0.logout({
      returnTo: window.location.origin
    });
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    return this.access_Token && Date.now() < this.expires_At;
  }

}
