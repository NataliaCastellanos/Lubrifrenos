import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

// componentes

import { AppComponent } from './app.component';

import { HeaderComponent} from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { InicioComponent } from './components/bodies/home/inicio/inicio.component';
import { ContactenosComponent } from './components/bodies/home/contactenos/contactenos.component';
import { IniciarSesionComponent } from './components/bodies/home/iniciar-sesion/iniciar-sesion.component';

import { OpcionesComponent } from './components/bodies/menu/opciones/opciones/opciones.component';

import { ProductosComponent } from './components/bodies/menu/inventario/productos/productos.component';
import { CrearProductoComponent } from './components/bodies/menu/inventario/crear-producto/crear-producto.component';
import { EliminarProductoComponent } from './components/bodies/menu/inventario/eliminar-producto/eliminar-producto.component';

// services
import {EliminarProductoService} from './servicios/eliminar-producto.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    ContactenosComponent,
    IniciarSesionComponent,
    OpcionesComponent,
    ProductosComponent,
    CrearProductoComponent,
    EliminarProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    EliminarProductoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
