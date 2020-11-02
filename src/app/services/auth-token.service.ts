import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { URL_SERVICIOS } from '../../config/utilities';
import { ResponseGenerateToken } from '../interfaces/response-generate-token.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {
  
  data: any = {
      'correo' : "jesus",
      'contrasena': "123456"   
  };
  token: string;
  responseGenerateToken: ResponseGenerateToken = {};
  


  constructor( public http: HttpClient ) { 
    console.log("llegue al servicio");
    }


  ingresar(correo: string, contrasena: string) {
    
    /* let data = new URLSearchParams();
    
    data.append("correo", correo );
    data.append("contrasena", contrasena); */

    let data: any = {
      'correo' : "jesus",
      'contrasena': "123456"   
   };

    
    
    let url = URL_SERVICIOS + "/jwtToken/login"

    console.log(data);
    
    return this.http.post(url, data)
          .subscribe( (resp: ResponseGenerateToken)  => {          
            
            console.log(resp);
            this.responseGenerateToken = resp;
            
            console.log( this.token = resp.token);
        })
      
      
      
    
    
    
  }
  
  
  
  
  
}
