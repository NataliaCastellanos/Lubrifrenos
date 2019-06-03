import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// componentes
import { InicioComponent } from './components/bodies/home/inicio/inicio.component';
import { ContactenosComponent } from './components/bodies/home/contactenos/contactenos.component';
import { IniciarSesionComponent } from './components/bodies/home/iniciar-sesion/iniciar-sesion.component';

import { OpcionesComponent } from './components/bodies/menu/opciones/opciones/opciones.component';

import { ProductosComponent } from './components/bodies/menu/inventario/productos/productos.component';
import { CrearProductoComponent } from './components/bodies/menu/inventario/crear-producto/crear-producto.component';
import { EliminarProductoComponent } from './components/bodies/menu/inventario/eliminar-producto/eliminar-producto.component';
import { ModificarProductoComponent } from './components/bodies/menu/inventario/modificar-producto/modificar-producto.component';


const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'contactenos', component: ContactenosComponent},
  {path: 'iniciar-sesion', component: IniciarSesionComponent},
  {path: 'iniciar-sesion/menu', component: OpcionesComponent},
  {path: 'iniciar-sesion/menu/productos', component: ProductosComponent},
  {path: 'iniciar-sesion/menu/productos/crear-producto', component: CrearProductoComponent},
  {path: 'iniciar-sesion/menu/productos/eliminar-producto/:id', component: EliminarProductoComponent},
  {path: 'iniciar-sesion/menu/productos/modificar-producto/:id', component: ModificarProductoComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
