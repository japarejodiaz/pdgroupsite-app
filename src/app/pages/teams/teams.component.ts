import { Component, OnInit } from '@angular/core';
import { InfoPageTeamsService } from '../../services/info-page-teams.service';
import { ModalFormTeamsService } from '../../services/modal-form-teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  constructor(public _infoPageTeamsService: InfoPageTeamsService,
              public modalFormTeamsService: ModalFormTeamsService) { }

  ngOnInit(): void {
  }
  
  abrirModalWithParameter(paramAux: string, nombres: string, apellidos: string) {
  
    // console.log("lleuge al servicio");
    console.log(paramAux);
    console.log(apellidos);
    console.log(nombres);
    
    
    this.modalFormTeamsService.abrirModalTWithparameter( paramAux, nombres, apellidos );

  
  }

}
