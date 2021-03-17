import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SolRequest, ResponseServiceSingle, ResponseServiceSingleWithID, InfoPageSection, InfoPageServices } from '../interfaces/info-page-services.interface';
import { URL_SERVICIOS } from '../../config/utilities';
@Injectable({
  providedIn: 'root'
})
export class InfoPageDevelopmentProfesionalService {

  token: string;
  usuario: string;
  url: string = URL_SERVICIOS;
  solRequest: SolRequest = {};

  infoResponseServiceSingle: ResponseServiceSingle;
  infoResponseServiceSingleWithID: ResponseServiceSingleWithID;

  /** Seccion para consultas de Datos de developmentProfesionalComponent */

  infoPageDevelopmentServices: InfoPageServices = {};

  idpageP: number = 4;
  idsectionP: number = 4;

  infoPageSection1: InfoPageSection = {};
  infoPageSection2: InfoPageSection = {};
  infoPageSection3: InfoPageSection = {};
  infoPageSection4: InfoPageSection = {};

  pageSectionWhyus1: InfoPageSection = {};
  pageSectionWhyus2: InfoPageSection = {};

  pageSectionFeatures1: InfoPageSection = {};
  pageSectionFeatures2: InfoPageSection = {};
  pageSectionFeatures3: InfoPageSection = {};

  listIconSection1: string[] = [];
  listIconSection2: string[] = [];

  image1: string;
  image2: string;
  image3: string;
  image4: string;

  constructor(private httpContactUs: HttpClient) {

    this.idpageP = 4;
    this.idsectionP = 4;
    this.buscarDataPageDevelopment(this.token, this.usuario, this.idpageP, this.idsectionP);
    this.idpageP = 4;
    this.idsectionP = 8;
    this.buscarDataPageDevelopmentB(this.token, this.usuario, this.idpageP, this.idsectionP);
  }

  buscarDevelopProfesional_SolRequest($sol_request: SolRequest) {

    console.log("voy a buscar por correo");

    console.log("Sol Reques" + $sol_request.email);
    console.log("Sol Reques" + $sol_request.subject);

    let url_comple = "/contactus/buscar_contact_us_email/";

    let urlFinal = this.url + url_comple;

    return this.httpContactUs.get(urlFinal + `${this.token}/${this.usuario}/${$sol_request.email}/${$sol_request.subject}`);

  }

  crearRegistroSolicitud($token: string, $usuario: string, $sol_req: SolRequest) {

    console.log("Enviando correo....");

    let url_comple = "/contactus/create_contact_us/";

    let urlFinal = this.url + url_comple;

    return this.httpContactUs.post(urlFinal + `${$token}/${$usuario}`, $sol_req);

  }

  private buscarDataPageDevelopment(token: string, usuario: string, idpage: number, idSection: number) {

    let url_comple = "/sections/obtener_page_section/";

    let urlFinal = this.url + url_comple;

    return this.httpContactUs.get(urlFinal + `${token}/${usuario}/${idpage}/${idSection}`)
      .subscribe((response: InfoPageServices) => {

        this.infoPageDevelopmentServices = response;
        /** Seccion de Services */

        console.log(this.infoPageDevelopmentServices);

        this.infoPageSection1 = this.infoPageDevelopmentServices.page_section[0];
        this.image1 = this.infoPageDevelopmentServices.page_section[0]["section_url_img"];

        console.log(this.infoPageSection1);

      });
  }


  private buscarDataPageDevelopmentB(token: string, usuario: string, idpage: number, idSection: number) {

    let url_comple = "/sections/obtener_page_section/";

    let urlFinal = this.url + url_comple;

    return this.httpContactUs.get(urlFinal + `${token}/${usuario}/${idpage}/${idSection}`)
      .subscribe((response: InfoPageServices) => {

        this.infoPageDevelopmentServices = response;
        /** Seccion de Services */

        console.log(this.infoPageDevelopmentServices);

        this.infoPageSection1 = this.infoPageDevelopmentServices.page_section[0];
        this.image1 = this.infoPageDevelopmentServices.page_section[0]["section_url_img"]
        this.infoPageSection2 = this.infoPageDevelopmentServices.page_section[1];
        this.image2 = this.infoPageDevelopmentServices.page_section[1]["section_url_img"]
        this.infoPageSection3 = this.infoPageDevelopmentServices.page_section[2];
        this.image3 = this.infoPageDevelopmentServices.page_section[2]["section_url_img"]
        this.infoPageSection4 = this.infoPageDevelopmentServices.page_section[3];
        this.image4 = this.infoPageDevelopmentServices.page_section[3]["section_url_img"]

        console.log(this.infoPageSection1);
        console.log(this.infoPageSection2);
        console.log(this.infoPageSection3);
        console.log(this.infoPageSection4);



      });
  }


}
