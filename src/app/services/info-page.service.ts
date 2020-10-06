import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-page.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {
  
  infoPagina: InfoPagina = {};
  cargada: boolean = false; 
  

  constructor( private http: HttpClient ) {
  
    this.cargarInfo();
  
  }
  
  
  /**
   *  Servicio para cargar la informacion de la pagina, header y footer
   */
  
  private cargarInfo() {
    console.log("Servicio Listo viejo");

    this.http
      .get("assets/data/data-pagina.json")
      .subscribe((resp: InfoPagina) => {
        this.cargada = true;
        this.infoPagina = resp;
      });
  }
}
