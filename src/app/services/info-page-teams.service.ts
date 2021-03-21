import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/utilities';
import { InfoPageTeams } from '../interfaces/info-page-services.interface';
@Injectable({
  providedIn: 'root'
})
export class InfoPageTeamsService {

  url: string = URL_SERVICIOS;
  tokenP: string = "1";
  usuarioP: string = "1"

  infoPageTeamsServices: InfoPageTeams = {};

  constructor(private http: HttpClient) {

    this.buscarDataPTeamsPageAll(this.tokenP, this.usuarioP);

  }


  private buscarDataPTeamsPageAll(token: string, usuario: string) {

    let url_comple = "/teams/buscar_teams_all/";

    let urlFinal = this.url + url_comple;

    return this.http.get(urlFinal + `${token}/${usuario}`)
      .subscribe((response: InfoPageTeams) => {

        this.infoPageTeamsServices = response;
      /** Seccion de Services */

        // console.log(this.infoPageTeamsServices);

        /* this.infoPageSection1 = this.infoPageLifeInsuranceServices.page_section[0];
        this.image1 = this.infoPageLifeInsuranceServices.page_section[0]["section_url_img"]
        this.infoPageSection2 = this.infoPageLifeInsuranceServices.page_section[1];
        this.image2 = this.infoPageLifeInsuranceServices.page_section[1]["section_url_img"]

        console.log(this.infoPageSection1);
        console.log(this.infoPageSection2); */

        //    this.pageSectionWhyus = this.infoPageServices.page_section[1]
      });

  }
}
