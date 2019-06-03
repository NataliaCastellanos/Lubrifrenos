import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../servicios/auth.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.sass']
})
export class ProductosComponent implements OnInit {

  constructor( private auth: AuthService ) {
    auth.handleAuthentication();
  }

  ngOnInit() {
  }

}
