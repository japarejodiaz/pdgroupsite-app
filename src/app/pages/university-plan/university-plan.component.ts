import { Component, OnInit } from '@angular/core';
import { ModalFormService } from '../../services/modal-form.service';

@Component({
  selector: 'app-university-plan',
  templateUrl: './university-plan.component.html',
  styles: [
  ]
})
export class UniversityPlanComponent implements OnInit {

  constructor( private modalFormService: ModalFormService) { }

  ngOnInit(): void {
  }
  
  abrirModal() {
    this.modalFormService.abrirModal();
  }

}
