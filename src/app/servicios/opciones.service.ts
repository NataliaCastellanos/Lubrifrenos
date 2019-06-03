import { Injectable } from '@angular/core';

@Injectable()
export class OpcionesService {

    private opciones: any[ ];

    constructor() {
         console.log('Servicio listo para usar');
    }
}
