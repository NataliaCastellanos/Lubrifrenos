import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

// componentes

import { AppComponent } from './app.component';

import { HeaderComponent} from './components/header/header.component';
import { BodyComponent} from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';

import { InicioComponent } from './components/bodies/home/inicio/inicio.component';
import { ContactenosComponent } from './components/bodies/home/contactenos/contactenos.component';
import { IniciarSesionComponent } from './components/bodies/home/iniciar-sesion/iniciar-sesion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    InicioComponent,
    ContactenosComponent,
    IniciarSesionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
