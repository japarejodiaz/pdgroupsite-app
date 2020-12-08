import { Component, OnInit } from '@angular/core';
import { ModalFormService } from 'src/app/services/modal-form.service';
import { InfoPageTeamsService } from '../../services/info-page-teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  constructor(public _infoPageTeamsService: InfoPageTeamsService,
              public _modalService: ModalFormService) { }

  ngOnInit(): void {
  }
  
  abrirModalWithParameter(paramAux: string) {
  
    console.log("lleuge al servicio");
    console.log(paramAux);
    
    this._modalService.abrirModal();

  
  
  }

}
