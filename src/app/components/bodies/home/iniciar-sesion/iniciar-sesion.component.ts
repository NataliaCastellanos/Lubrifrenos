import { Component, OnInit } from '@angular/core';
import { OpcionesService } from '../../../../servicios/opciones.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.sass']
})
export class IniciarSesionComponent implements OnInit {

  constructor(private opciones: OpcionesService) { }

  ngOnInit() {
  }

}
