import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { URL_SERVICIOS } from '../../config/utilities';
import { InfoPageServices, InfoPageSection } from '../interfaces/info-page-services.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageServicesService {

  infoPageServices: InfoPageServices = {};
  infoPageServicesWhyUs: InfoPageServices = {};

  url: string = URL_SERVICIOS;
  tokenP: string = "1";
  usuarioP: string = "1";
  idpageP: number = 5;
  idsectionP: number = 1;

  infoPageSection: InfoPageSection = {};
  infoPageSection2: InfoPageSection = {};
  infoPageSection3: InfoPageSection = {};
  infoPageSection4: InfoPageSection = {};
  infoPageSection5: InfoPageSection = {};

  pageSectionWhyus1: InfoPageSection = {};
  pageSectionWhyus2: InfoPageSection = {};
  pageSectionWhyus3: InfoPageSection = {};
  pageSectionWhyus4: InfoPageSection = {};
  pageSectionWhyus5: InfoPageSection = {};

  constructor(private http: HttpClient) {

    this.buscarDataPageServices(this.tokenP, this.usuarioP, this.idpageP, this.idsectionP);
    /** Llama a la seccion de WhyUs de la pagina */
    this.idsectionP = 2;
    this.buscarDataPagesServicesWhyus(this.tokenP, this.usuarioP, this.idpageP, this.idsectionP);

  }


  private buscarDataPageServices(token: string, usuario: string, idpage: number, idSection: number) {

    let url_comple = "/sections/obtener_page_section/";

    let urlFinal = this.url + url_comple;

    return this.http.get(urlFinal + `${token}/${usuario}/${idpage}/${idSection}`)
      .subscribe((response: InfoPageServices) => {

        this.infoPageServices = response;
        /** Seccion de Services y Productos */

        this.infoPageSection = this.infoPageServices.page_section[0];
        this.infoPageSection2 = this.infoPageServices.page_section[1];
        this.infoPageSection3 = this.infoPageServices.page_section[2];
        this.infoPageSection4 = this.infoPageServices.page_section[3];
        this.infoPageSection5 = this.infoPageServices.page_section[4];
        //    this.pageSectionWhyus = this.infoPageServices.page_section[1]

        // // console.log(this.infoPageSection["section_parrafo_h4"]);
        // // console.log(this.infoPageSection);
        // // console.log(this.pageSectionWhyus);

        /* for (let i in this.pageSection) {
          // console.log(this.pageSection[i].section_parrafo_h4);
        }

        for(let i in this.pageSection){
  // console.log(i); // a, b, c
} */


      });



  }

  buscarDataPagesServicesWhyus(token: string, usuario: string, idpage: number, idSection: number) {

    let url_comple = "/sections/obtener_page_section/";

    let urlFinal = this.url + url_comple;

    return this.http.get(urlFinal + `${token}/${usuario}/${idpage}/${idSection}`)
      .subscribe((response: InfoPageServices) => {

        this.infoPageServicesWhyUs = response;
        /** Seccion de Services y Productos */

        this.pageSectionWhyus1 = this.infoPageServicesWhyUs.page_section[0];
        this.pageSectionWhyus2 = this.infoPageServicesWhyUs.page_section[1];
        this.pageSectionWhyus3 = this.infoPageServicesWhyUs.page_section[2];
        this.pageSectionWhyus4 = this.infoPageServicesWhyUs.page_section[3];
        this.pageSectionWhyus5 = this.infoPageServicesWhyUs.page_section[4];
        //    this.pageSectionWhyus = this.infoPageServices.page_section[1]

        // // console.log(this.infoPageSection["section_parrafo_h4"]);
        // // console.log(this.infoPageSection);
        // console.log(this.infoPageServicesWhyUs);





      });



  }


}
