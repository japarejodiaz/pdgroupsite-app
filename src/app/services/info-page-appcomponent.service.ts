import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { URL_SERVICIOS } from '../../config/utilities';
import { InfoPageServices, InfoPageSection } from '../interfaces/info-page-services.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageAppcomponentService {

  infoPageAppServices: InfoPageServices = {};

  url: string = URL_SERVICIOS;
  tokenP: string = "1";
  usuarioP: string = "1";
  idpageP: number = 7;
  idsectionP: number = 6;

  infoPageSection1: InfoPageSection = {};
  infoPageSection2: InfoPageSection = {};
  infoPageSection3: InfoPageSection = {};
  infoPageSection: InfoPageSection = {};



  constructor(private http: HttpClient) {

    this.buscarDataPageServices(this.tokenP, this.usuarioP, this.idpageP, this.idsectionP);

  }

  /**
   * Metodo para buscar la seccion de la pagina de appComonent de forma dinamica
   * @param token
   * @param usuario
   * @param idpage
   * @param idSection
   * @return La seccion de una pagina dado los paramtros de entrada
   */

  private buscarDataPageServices(token: string, usuario: string, idpage: number, idSection: number) {

    let url_comple = "/sections/obtener_page_section/";

    let urlFinal = this.url + url_comple;

    return this.http.get(urlFinal + `${token}/${usuario}/${idpage}/${idSection}`)
      .subscribe((response: InfoPageServices) => {

        this.infoPageAppServices = response;
        /** Seccion de Services y Productos */

        this.infoPageSection1 = this.infoPageAppServices.page_section[0];
        this.infoPageSection2 = this.infoPageAppServices.page_section[1];
        this.infoPageSection3 = this.infoPageAppServices.page_section[2];
        this.infoPageSection.page_section = this.infoPageAppServices.page_section;

        // console.log(this.infoPageSection1);
        // console.log(this.infoPageSection2);
        // console.log(this.infoPageSection3);

        // console.log(this.infoPageSection);

        // console.log("entre");

        // console.log(this.infoPageSection.page_section);

        // console.log("sali");

        //    this.pageSectionWhyus = this.infoPageServices.page_section[1]
      });
  }
}

