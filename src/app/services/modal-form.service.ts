import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalFormService {

  private _ocultarModal: boolean = true;

  constructor() { }

  get ocultarModal() {
    return this._ocultarModal;
  }

  abrirModal() {

    this._ocultarModal = false;
  }

  cerrarModal() {

    this._ocultarModal = true;
  }

  abrirModalWithparameter( param: string ) {

    // console.log(param);

    this._ocultarModal = false;
  }


}
