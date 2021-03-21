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
  infoPageServicesWhyUs: InfoPageServices = {};
  infoPageServicesFeatures: InfoPageServices = {};

  url: string = URL_SERVICIOS;
  tokenP: string = "1";
  usuarioP: string = "1";
  idpageP: number = 1;
  idsectionP: number = 1;

  infoPageSection1: InfoPageSection = {};
  infoPageSection2: InfoPageSection = {};
  infoPageSection3: InfoPageSection = {};
  infoPageSection4: InfoPageSection = {};

  pageSectionWhyus1: InfoPageSection = {};
  pageSectionWhyus2: InfoPageSection = {};

  pageSectionFeatures1: InfoPageSection = {};
  pageSectionFeatures2: InfoPageSection = {};
  pageSectionFeatures3: InfoPageSection = {};

  listIconSection1: string [] = [];
  listIconSection2: string [] = [];

  image1: string;
  image2: string;
  image3: string;
  image4: string;

  constructor(private http: HttpClient) {

    this.buscarDataPageDashboard(this.tokenP, this.usuarioP, this.idpageP, this.idsectionP);
    this.idsectionP = 2;
    this.buscarDataPagesDashboardWhyus(this.tokenP, this.usuarioP, this.idpageP, this.idsectionP);
    this.idsectionP = 3;
    this.buscarDataPagesDashboardFeatures(this.tokenP, this.usuarioP, this.idpageP, this.idsectionP);
  }

  private buscarDataPageDashboard(token: string, usuario: string, idpage: number, idSection: number) {

    let url_comple = "/sections/obtener_page_section/";

    let urlFinal = this.url + url_comple;

    return this.http.get(urlFinal + `${token}/${usuario}/${idpage}/${idSection}`)
      .subscribe((response: InfoPageServices) => {

        this.infoPageDashboardServices = response;
      /** Seccion de Services */

        // console.log(this.infoPageDashboardServices);

        this.infoPageSection1 = this.infoPageDashboardServices.page_section[0];
        this.image1 = this.infoPageDashboardServices.page_section[0]["section_url_img"]
        this.infoPageSection2 = this.infoPageDashboardServices.page_section[1];
        this.image2 = this.infoPageDashboardServices.page_section[1]["section_url_img"]
        this.infoPageSection3 = this.infoPageDashboardServices.page_section[2];
        this.image3 = this.infoPageDashboardServices.page_section[2]["section_url_img"]
        this.infoPageSection4 = this.infoPageDashboardServices.page_section[3];
        this.image4 = this.infoPageDashboardServices.page_section[3]["section_url_img"]

        // console.log(this.infoPageSection1);
        // console.log(this.infoPageSection2);
        // console.log(this.infoPageSection3);
        // console.log(this.infoPageSection4);

        //    this.pageSectionWhyus = this.infoPageServices.page_section[1]

      });
  }

  buscarDataPagesDashboardWhyus(token: string, usuario: string, idpage: number, idSection: number) {

    let url_comple = "/sections/obtener_page_section/";

    let urlFinal = this.url + url_comple;

    return this.http.get(urlFinal + `${token}/${usuario}/${idpage}/${idSection}`)
      .subscribe((response: InfoPageServices) => {

        this.infoPageServicesWhyUs = response;
        /** Seccion de Whyus*/
        this.pageSectionWhyus1 = this.infoPageServicesWhyUs.page_section[0];
        this.pageSectionWhyus2 = this.infoPageServicesWhyUs.page_section[1];
        // console.log(this.infoPageServicesWhyUs);

      });

  }

  buscarDataPagesDashboardFeatures(token: string, usuario: string, idpage: number, idSection: number) {

    let url_comple = "/sections/obtener_page_section/";

    let urlFinal = this.url + url_comple;

    return this.http.get(urlFinal + `${token}/${usuario}/${idpage}/${idSection}`)
      .subscribe((response: InfoPageServices) => {

        this.infoPageServicesFeatures = response;
        /** Seccion de Features */

        this.pageSectionFeatures1 = this.infoPageServicesFeatures.page_section[0];
        this.pageSectionFeatures2 = this.infoPageServicesFeatures.page_section[1];
        this.pageSectionFeatures3 = this.infoPageServicesFeatures.page_section[2];
        // console.log(this.infoPageServicesFeatures);

        // // console.log(this.pageSectionFeatures1.page_section.detalle[0]["parrafo_icon_text"]);

        // console.log(this.infoPageServicesFeatures.page_section[0].detalle[0]);
        // console.log(this.infoPageServicesFeatures.page_section[0].detalle[0]["parrafo_icon_text"]);
        // console.log(this.infoPageServicesFeatures.page_section[0].detalle[1]["parrafo_icon_text"]);
        // console.log(this.infoPageServicesFeatures.page_section[0].detalle[1]);

        this.listIconSection1[0] = this.infoPageServicesFeatures.page_section[0].detalle[0]["parrafo_icon_text"];
        this.listIconSection1[1] = this.infoPageServicesFeatures.page_section[0].detalle[1]["parrafo_icon_text"];
        this.listIconSection2[0] = this.infoPageServicesFeatures.page_section[2].detalle[0]["parrafo_icon_text"];
        this.listIconSection2[1] = this.infoPageServicesFeatures.page_section[2].detalle[1]["parrafo_icon_text"];
        this.listIconSection2[2] = this.infoPageServicesFeatures.page_section[2].detalle[2]["parrafo_icon_text"];
        this.listIconSection2[3] = this.infoPageServicesFeatures.page_section[2].detalle[3]["parrafo_icon_text"];


      });

  }





}


