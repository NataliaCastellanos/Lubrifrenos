import { Component, OnInit } from '@angular/core';

import { EliminarProductoService } from '../../../../../servicios/eliminar-producto.service';

@Component({
  selector: 'app-eliminar-producto',
  templateUrl: './eliminar-producto.component.html',
  styleUrls: ['./eliminar-producto.component.sass']
})
export class EliminarProductoComponent implements OnInit {

  constructor(private eliminarServicio: EliminarProductoService) { }

  ngOnInit() {
  }

}
