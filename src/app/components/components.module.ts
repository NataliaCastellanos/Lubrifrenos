import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { InicioComponent } from './bodies/home/inicio/inicio.component';
import { ContactenosComponent } from './bodies/home/contactenos/contactenos.component';
import { IniciarSesionComponent } from './bodies/home/iniciar-sesion/iniciar-sesion.component';

import { OpcionesComponent } from './bodies/menu/opciones/opciones/opciones.component';

import { CrearProductoComponent } from './bodies/menu/inventario/crear-producto/crear-producto.component';
import { ProductosComponent } from './bodies/menu/inventario/productos/productos.component';
import { EliminarProductoComponent } from './bodies/menu/inventario/eliminar-producto/eliminar-producto.component';
import { ModificarProductoComponent } from './bodies/menu/inventario/modificar-producto/modificar-producto.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    ContactenosComponent,
    IniciarSesionComponent,
    OpcionesComponent,
    CrearProductoComponent,
    ProductosComponent,
    EliminarProductoComponent,
    ModificarProductoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
