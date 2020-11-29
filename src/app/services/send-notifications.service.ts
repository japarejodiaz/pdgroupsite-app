import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseServiceSingle, SolRequest } from '../interfaces/info-page-services.interface';
import { URL_SERVICIOS } from '../../config/utilities';

@Injectable({
  providedIn: 'root'
})
export class SendNotificationsService {

  token: string;
  usuario: string;
  url: string = URL_SERVICIOS;
  solRequest: SolRequest = {};

  infoResponseServiceSingle: ResponseServiceSingle;


  constructor(private httpSendMail: HttpClient) { }


  enviarNotificaciones($token: string, $usuario: string, $sol_req: SolRequest) {
    
    console.log("pase por enviar el correo");

    let url_comple = "/email/sendmail/";

    let urlFinal = this.url + url_comple;

    return this.httpSendMail.post(urlFinal + `${$token}/${$usuario}`, $sol_req);

  }
}

