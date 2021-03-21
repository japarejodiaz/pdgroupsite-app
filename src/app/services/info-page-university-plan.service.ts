import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/utilities';
import { InfoPageServices, InfoPageSection } from '../interfaces/info-page-services.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageUniversityPlanService {

  url: string = URL_SERVICIOS;
  tokenP: string = "1";
  usuarioP: string = "1";
  idpageP: number = 12;
  idsectionP: number = 1;
  image1: string;

  infoPageUniversityPlanServices: InfoPageServices = {};
  infoPageSection1: InfoPageSection = {};

  constructor( private http: HttpClient ) {

    this.buscarDataUniversityPlanPage(this.tokenP, this.usuarioP, this.idpageP, this.idsectionP);
  }

  private buscarDataUniversityPlanPage(token: string, usuario: string, idpage: number, idSection: number) {

    let url_comple = "/sections/obtener_page_section/";

    let urlFinal = this.url + url_comple;

    return this.http.get(urlFinal + `${token}/${usuario}/${idpage}/${idSection}`)
      .subscribe((response: InfoPageServices) => {

        this.infoPageUniversityPlanServices = response;
        /** Seccion de Services */

        // console.log(this.infoPageUniversityPlanServices);

        this.infoPageSection1 = this.infoPageUniversityPlanServices.page_section[0];
        this.image1 = this.infoPageUniversityPlanServices.page_section[0]["section_url_img"]

        // console.log(this.infoPageSection1);

      });


  }
}
