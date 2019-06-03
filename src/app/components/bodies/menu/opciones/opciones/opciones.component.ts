import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../servicios/auth.service';

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.component.html'
})
export class OpcionesComponent implements OnInit {

  constructor( private auth: AuthService ) {
    auth.handleAuthentication();
  }

  ngOnInit() {
  }

}
