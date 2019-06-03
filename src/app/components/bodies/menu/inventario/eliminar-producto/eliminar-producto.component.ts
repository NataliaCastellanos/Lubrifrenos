import { Component } from '@angular/core';
// import { EliminarProductoService, Productos } from '../../../../../servicios/eliminar-producto.service';
import { AuthService } from '../../../../../servicios/auth.service';

@Component({
  selector: 'app-eliminar-producto',
  templateUrl: './eliminar-producto.component.html',
  styleUrls: ['./eliminar-producto.component.sass']
})
export class EliminarProductoComponent {

  // productos: Productos[] = [];
  // private eliminarServicio: EliminarProductoService
  constructor( private auth: AuthService ) {
    auth.handleAuthentication();
  }


}
