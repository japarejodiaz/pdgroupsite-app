import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalFormTeamsService {

  private _ocultarModalT: boolean = true;
  img1: string;
  nombres: string;
  apellidos: string;

  constructor() { }

  get ocultarModalT() {
    return this._ocultarModalT;
  }

  abrirModalT() {

    this._ocultarModalT = false;
  }

  cerrarModalT() {

    this._ocultarModalT = true;
  }

  abrirModalTWithparameter( paramInputImgQR: string, paramNombres: string, paramApellidos: string ) {

    // console.log("estoy en el servicio");
    // console.log(paramInputImgQR);
    // console.log(paramApellidos);
    // console.log(paramNombres);

    this.img1 = paramInputImgQR;
    this.apellidos = paramApellidos;
    this.nombres = paramNombres;

    this._ocultarModalT = false;

  }

}
