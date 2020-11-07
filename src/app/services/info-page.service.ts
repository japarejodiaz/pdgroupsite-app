import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-page.interfaces';
import { InfoProducto } from '../interfaces/info-producto.interface';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  infoPagina: InfoPagina = {};
  
  infoPagina2: InfoPagina = {};
  cargada: boolean = false; 
  infoProducto: InfoProducto = {};
  
  
  

  constructor( private http: HttpClient ) {
  
    this.cargarInfo();
   // this.getProducto('S10_2016');
  
  }
  
  
  /**
   *  Servicio para cargar la informacion de la pagina, header y footer
   */
  
  private cargarInfo() {
   // console.log("Servicio Listo viejo");

    this.http
      .get("assets/data/data-pagina.json")
      .subscribe((resp: InfoPagina) => {
        this.cargada = true;
        this.infoPagina = resp;
      });
  }

  /**
   * Obtener Producto a partir de un Id de Producto
   * @param id String Identificador de Producto
   */
  getProducto(id: String) {
    
    productoObj: Object;
    
    return this.http.get(
      `http://localhost/apiRestServices3/index.php/prueba/obtener_producto/${id}`)
     // .map(response => response.json)      
      .subscribe( (resp: InfoProducto) => {
      
       // console.log(resp);
        
        this.infoProducto = resp;        
          
        /* console.log(this.infoProducto.error);
        console.log(this.infoProducto.producto[0].producto); */
        
        for(let i in this.infoProducto.producto) {
          console.log("entre ", this.infoProducto.producto[i]); // 
          
        }
        
        

        
      
      });
      
      
      
      
      ;
    
    
  }
  
  
  
  
}
