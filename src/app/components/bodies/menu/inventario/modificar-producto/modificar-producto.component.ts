import { Component} from '@angular/core';
import { AuthService } from '../../../../../servicios/auth.service';

@Component({
  selector: 'app-modificar-producto',
  templateUrl: './modificar-producto.component.html',
  styleUrls: ['./modificar-producto.component.sass']
})
export class ModificarProductoComponent {

  constructor( private auth: AuthService ) {
    auth.handleAuthentication();
  }


}
