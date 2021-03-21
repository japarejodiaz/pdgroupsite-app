import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/utilities';
import { InfoPageServices, InfoPageSection } from '../interfaces/info-page-services.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageScheduleSavingsService {

  url: string = URL_SERVICIOS;
  tokenP: string = "1";
  usuarioP: string = "1";
  idpageP: number = 13;
  idsectionP: number = 1;
  image1: string;

  infoPageScheduleSavingsServices: InfoPageServices = {};
  infoPageSection1: InfoPageSection = {};

  constructor( private http: HttpClient ) {

    this.buscarDataScheduleSavingsPage(this.tokenP, this.usuarioP, this.idpageP, this.idsectionP);
  }

  private buscarDataScheduleSavingsPage(token: string, usuario: string, idpage: number, idSection: number) {

    let url_comple = "/sections/obtener_page_section/";

    let urlFinal = this.url + url_comple;

    return this.http.get(urlFinal + `${token}/${usuario}/${idpage}/${idSection}`)
      .subscribe((response: InfoPageServices) => {

        this.infoPageScheduleSavingsServices = response;
        /** Seccion de Services */

        //    thisconsole.log(this.infoPageScheduleSavingsServices);

        this.infoPageSection1 = this.infoPageScheduleSavingsServices.page_section[0];
        this.image1 = this.infoPageScheduleSavingsServices.page_section[0]["section_url_img"]

        // console.log(this.infoPageSection1);

      });


  }
}
