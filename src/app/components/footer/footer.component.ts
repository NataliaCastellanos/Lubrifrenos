import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent {
  anio: number;

  constructor() {
    this.anio = new Date().getFullYear();
  }
}

