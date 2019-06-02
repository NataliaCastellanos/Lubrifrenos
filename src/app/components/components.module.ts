import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './bodies/home/inicio/inicio.component';
import { ContactenosComponent } from './bodies/home/contactenos/contactenos.component';
import { IniciarSesionComponent } from './bodies/home/iniciar-sesion/iniciar-sesion.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, BodyComponent, FooterComponent, InicioComponent, ContactenosComponent, IniciarSesionComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
