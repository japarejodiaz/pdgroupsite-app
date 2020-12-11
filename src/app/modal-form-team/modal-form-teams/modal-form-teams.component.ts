import { Component, OnInit } from '@angular/core';
import { ModalFormTeamsService } from '../../services/modal-form-teams.service';
@Component({
  selector: 'app-modal-form-teams',
  templateUrl: './modal-form-teams.component.html',
  styles: []
})
export class ModalFormTeamsComponent implements OnInit {

  constructor(public modalFormTeamsService: ModalFormTeamsService) { }

  ngOnInit(): void {
  }
  
  cerrarModalT() {
    
    this.modalFormTeamsService.cerrarModalT();   

  }

}
