import { Component, OnInit } from '@angular/core';
import { AuthTokenService } from '../../services/auth-token.service';
import { ResponseGenerateToken } from '../../interfaces/response-generate-token.interfaces';
import { InfoPageDashboardService } from '../../services/info-page-dashboard.service';
import { ModalFormService } from '../../services/modal-form.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  
  correo: string = 'japarejo.diaz@gmail.com';
  contrasena: string = '123456';

  constructor(public tokenService: AuthTokenService,
    public _infoPageDashboard: InfoPageDashboardService,
    private modalFormService: ModalFormService  ) { }

  ngOnInit(): void {
    
   this.ingresar();
    
  }

  ingresar() {
  
    this.tokenService.ingresar(this.correo, this.contrasena);
      
  
  }
  
  abrirModal() {
    this.modalFormService.abrirModal();
  }
  
  
  
}


