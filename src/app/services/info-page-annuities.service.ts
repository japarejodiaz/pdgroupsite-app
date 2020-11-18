import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/utilities';
import { InfoPageServices, InfoPageSection } from '../interfaces/info-page-services.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageAnnuitiesService {
  
  url: string = URL_SERVICIOS;
  tokenP: string = "1";
  usuarioP: string = "1";
  idpageP: number = 9;
  idsectionP: number = 1;
  
  infoPageAnnuitiesServices: InfoPageServices = {};
  infoPageSection1: InfoPageSection = {};
  infoPageSection2: InfoPageSection = {};

  constructor(private http: HttpClient) {
  
     this.buscarDataAnuualidadPage(this.tokenP, this.usuarioP, this.idpageP, this.idsectionP);
    
  }
  
  
  
  private buscarDataAnuualidadPage(token: string, usuario: string, idpage: number, idSection: number) {
  
    let url_comple = "/sections/obtener_page_section/";

    let urlFinal = this.url + url_comple;

    return this.http.get(urlFinal + `${token}/${usuario}/${idpage}/${idSection}`)
      .subscribe((response: InfoPageServices) => {

        this.infoPageAnnuitiesServices = response;
      /** Seccion de Services */
        
        console.log(this.infoPageAnnuitiesServices);

        this.infoPageSection1 = this.infoPageAnnuitiesServices.page_section[0];
        this.infoPageSection2 = this.infoPageAnnuitiesServices.page_section[1];
       

        console.log(this.infoPageSection1);
        console.log(this.infoPageSection2);

        //    this.pageSectionWhyus = this.infoPageServices.page_section[1]
      });
  
  
  }

}
