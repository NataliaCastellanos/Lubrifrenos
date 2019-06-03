import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../servicios/auth.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.sass']
})
export class CrearProductoComponent implements OnInit {

  constructor( private auth: AuthService ) {
    auth.handleAuthentication();
  }

  ngOnInit() {
  }

}
