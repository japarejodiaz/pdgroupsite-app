import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SolRequest, ResponseServiceSingle, ResponseServiceSingleWithID } from '../interfaces/info-page-services.interface';
import { URL_SERVICIOS } from '../../config/utilities';


@Injectable({
  providedIn: 'root'
})
export class InfoPageDevelopmentProfesionalService {

  token: string;
  usuario: string;
  url: string = URL_SERVICIOS;
  solRequest: SolRequest = {};

  infoResponseServiceSingle: ResponseServiceSingle;
  infoResponseServiceSingleWithID: ResponseServiceSingleWithID;

  constructor(private httpContactUs: HttpClient) { }

  buscarDevelopProfesional_SolRequest( $sol_request: SolRequest ) {
  
    console.log("voy a buscar por correo");

    console.log("Sol Reques" + $sol_request.email);
    console.log("Sol Reques" + $sol_request.subject);

    let url_comple = "/contactus/buscar_contact_us_email/";

    let urlFinal = this.url + url_comple;

    return this.httpContactUs.get(urlFinal + `${this.token}/${this.usuario}/${$sol_request.email}/${$sol_request.subject}`);    
     
  }  
  
  crearRegistroSolicitud($token: string, $usuario: string, $sol_req: SolRequest) {  
    
    console.log("Enviando correo....");
    
    let url_comple = "/contactus/create_contact_us/";
    
    let urlFinal = this.url + url_comple;
    
    return this.httpContactUs.post(urlFinal + `${$token}/${$usuario}`, $sol_req);   
  
  } 


}
