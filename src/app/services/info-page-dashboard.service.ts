import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { URL_SERVICIOS } from '../../config/utilities';
import { InfoPageServices, InfoPageSection } from '../interfaces/info-page-services.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageDashboardService {

  infoPageDashboardServices: InfoPageServices = {};

  url: string = URL_SERVICIOS;
  tokenP: string = "1";
  usuarioP: string = "1";
  idpageP: number = 1;
  idsectionP: number = 1;

  infoPageSection1: InfoPageSection = {};
  infoPageSection2: InfoPageSection = {};
  infoPageSection3: InfoPageSection = {};
  infoPageSection4: InfoPageSection = {};

  constructor(private http: HttpClient) {

    this.buscarDataPageDashboard(this.tokenP, this.usuarioP, this.idpageP, this.idsectionP);
  }

  private buscarDataPageDashboard(token: string, usuario: string, idpage: number, idSection: number) {

    let url_comple = "/sections/obtener_page_section/";

    let urlFinal = this.url + url_comple;

    return this.http.get(urlFinal + `${token}/${usuario}/${idpage}/${idSection}`)
      .subscribe((response: InfoPageServices) => {

        this.infoPageDashboardServices = response;
        /** Seccion de Services */

        this.infoPageSection1 = this.infoPageDashboardServices.page_section[0];
        this.infoPageSection2 = this.infoPageDashboardServices.page_section[1];
        this.infoPageSection3 = this.infoPageDashboardServices.page_section[2];
        this.infoPageSection4 = this.infoPageDashboardServices.page_section[3];

        console.log(this.infoPageSection1);
        console.log(this.infoPageSection2);
        console.log(this.infoPageSection3);
        console.log(this.infoPageSection4);

        //    this.pageSectionWhyus = this.infoPageServices.page_section[1]
      });
  }
}


