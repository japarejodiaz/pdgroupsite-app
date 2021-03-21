import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/utilities';
import { ResponseServiceSingleWithID, SolSubscription, ResponseServiceSingle } from '../interfaces/info-page-services.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPageFooterSubscripcionService {

  token: string;
  usuario: string;
  url: string = URL_SERVICIOS;

  infoResponseServiceSingle: ResponseServiceSingle;
  infoResponseServiceSingleWithID: ResponseServiceSingleWithID;

  constructor( private httpSubscription: HttpClient ) { }


  crearSubscription($token: string, $usuario: string, $sol_sub: SolSubscription) {

    // console.log("Enviando subscripcion....");

    // console.log($sol_sub);

    let url_comple = "/subscriptions/create_subscription/";

    let urlFinal = this.url + url_comple;

    return this.httpSubscription.post(urlFinal + `${$token}/${$usuario}`, $sol_sub);

  }
}
