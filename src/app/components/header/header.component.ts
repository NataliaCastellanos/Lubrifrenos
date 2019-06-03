import { Component } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {

  constructor( private auth: AuthService ) {
    auth.handleAuthentication();
  }

  login() {
    this.auth.login();
  }

  salir() {
    this.auth.logout();
  }

}
