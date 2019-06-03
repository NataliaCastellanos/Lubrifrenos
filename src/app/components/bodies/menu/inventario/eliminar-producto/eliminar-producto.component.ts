import { Component, OnInit } from '@angular/core';

// import { EliminarProductoService, Productos } from '../../../../../servicios/eliminar-producto.service';

@Component({
  selector: 'app-eliminar-producto',
  templateUrl: './eliminar-producto.component.html',
  styleUrls: ['./eliminar-producto.component.sass']
})
export class EliminarProductoComponent implements OnInit {

  // productos: Productos[] = [];
  // private eliminarServicio: EliminarProductoService
  constructor() { }

  ngOnInit() {
    // this.productos = this.eliminarServicio.getProductos();
  }

}
