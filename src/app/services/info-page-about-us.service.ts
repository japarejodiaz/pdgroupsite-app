import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SolRequest, ResponseServiceSingle, ResponseServiceSingleWithID, InfoPageSection, InfoPageServices } from '../interfaces/info-page-services.interface';
import { URL_SERVICIOS } from '../../config/utilities';

@Injectable({
  providedIn: 'root'
})
export class InfoPageAboutUsService {

  token: string;
  usuario: string;
  url: string = URL_SERVICIOS;

  infoResponseServiceSingle: ResponseServiceSingle;
  infoResponseServiceSingleWithID: ResponseServiceSingleWithID;

  /** Seccion para consultas de Datos de developmentProfesionalComponent */

  infoPageAboutUsServices: InfoPageServices = {};

  idpageP: number = 2;
  idsectionP: number = 4;


  constructor(private httpAboutUs: HttpClient) {

    this.idpageP = 2;
    this.idsectionP = 8;
    this.buscarDataAboutUsPage(this.token, this.usuario, this.idpageP, this.idsectionP);

  }

  private buscarDataAboutUsPage(token: string, usuario: string, idpage: number, idSection: number) {

    let url_comple = "/sections/obtener_page_section/";

    let urlFinal = this.url + url_comple;

    return this.httpAboutUs.get(urlFinal + `${token}/${usuario}/${idpage}/${idSection}`)
      .subscribe((response: InfoPageServices) => {

        this.infoPageAboutUsServices = response;
        /** Seccion de Services */

        console.log(this.infoPageAboutUsServices);
/*
        this.infoPageSection5 = this.infoPageDevelopmentServices.page_section[0];
        this.image5 = this.infoPageDevelopmentServices.page_section[0]["section_url_img"];

        // console.log(this.infoPageSection5); */

      });
  }
}
