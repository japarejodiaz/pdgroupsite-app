import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/utilities';
import { InfoPageServices, InfoPageSection } from '../interfaces/info-page-services.interface';
@Injectable({
  providedIn: 'root'
})
export class InfoPageHealthInsService {

  url: string = URL_SERVICIOS;
  tokenP: string = "1";
  usuarioP: string = "1";
  idpageP: number = 11;
  idsectionP: number = 1;
  image1: string;
  image2: string;

  infoPageHealthInsuranceServices: InfoPageServices = {};
  infoPageSection1: InfoPageSection = {};
  infoPageSection2: InfoPageSection = {};


  constructor(private http: HttpClient) {

     this.buscarDataHealthInsurancePage(this.tokenP, this.usuarioP, this.idpageP, this.idsectionP);

  }

  private buscarDataHealthInsurancePage(token: string, usuario: string, idpage: number, idSection: number) {

    let url_comple = "/sections/obtener_page_section/";

    let urlFinal = this.url + url_comple;

    return this.http.get(urlFinal + `${token}/${usuario}/${idpage}/${idSection}`)
      .subscribe((response: InfoPageServices) => {

        this.infoPageHealthInsuranceServices = response;
        /** Seccion de Services */

        // console.log(this.infoPageHealthInsuranceServices);

        this.infoPageSection1 = this.infoPageHealthInsuranceServices.page_section[0];
        this.image1 = this.infoPageHealthInsuranceServices.page_section[0]["section_url_img"]
        this.infoPageSection2 = this.infoPageHealthInsuranceServices.page_section[1];
        this.image2 = this.infoPageHealthInsuranceServices.page_section[1]["section_url_img"]

        // console.log(this.infoPageSection1);
        // console.log(this.infoPageSection2);

        //    this.pageSectionWhyus = this.infoPageServices.page_section[1]
      });


  }

}
