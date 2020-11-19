import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/utilities';
import { InfoPageServices, InfoPageSection } from '../interfaces/info-page-services.interface';


@Injectable({
  providedIn: 'root'
})
export class InfoPageInternationalPresenceService {

  url: string = URL_SERVICIOS;
  tokenP: string = "1";
  usuarioP: string = "1";
  idpageP: number = 14;
  idsectionP: number = 1;
  image1: string;
  image2: string;
  image3: string;
  image4: string;

  infoPageInternationalPresenceServices: InfoPageServices = {};
  infoPageSection1: InfoPageSection = {};
  infoPageSection2: InfoPageSection = {};
  infoPageSection3: InfoPageSection = {};
  infoPageSection4: InfoPageSection = {};

  constructor(private http: HttpClient) {

    this.buscarDataInternationalPresencePage(this.tokenP, this.usuarioP, this.idpageP, this.idsectionP);
  }

  private buscarDataInternationalPresencePage(token: string, usuario: string, idpage: number, idSection: number) {

    let url_comple = "/sections/obtener_page_section/";

    let urlFinal = this.url + url_comple;

    return this.http.get(urlFinal + `${token}/${usuario}/${idpage}/${idSection}`)
      .subscribe((response: InfoPageServices) => {

        this.infoPageInternationalPresenceServices = response;
        /** Seccion de Services */

        console.log(this.infoPageInternationalPresenceServices);

        this.infoPageSection1 = this.infoPageInternationalPresenceServices.page_section[0];
        this.image1 = this.infoPageInternationalPresenceServices.page_section[0]["section_url_img"]
        this.infoPageSection2 = this.infoPageInternationalPresenceServices.page_section[1];
        this.image2 = this.infoPageInternationalPresenceServices.page_section[1]["section_url_img"]
        this.infoPageSection3 = this.infoPageInternationalPresenceServices.page_section[2];
        this.image3 = this.infoPageInternationalPresenceServices.page_section[2]["section_url_img"]
        this.infoPageSection4 = this.infoPageInternationalPresenceServices.page_section[3];
        this.image4 = this.infoPageInternationalPresenceServices.page_section[3]["section_url_img"]

        console.log(this.infoPageSection1);
        console.log(this.infoPageSection2);
        console.log(this.infoPageSection3);
        console.log(this.infoPageSection4);

      });


  }

}
