import { Component, OnInit } from '@angular/core';
import { ModalFormService } from '../../services/modal-form.service';

@Component({
  selector: 'app-health-insurance',
  templateUrl: './health-insurance.component.html',
  styleUrls: ['./health-insurance.component.css']
})
export class HealthInsuranceComponent implements OnInit {

  constructor( private modalFormService: ModalFormService) { }

  ngOnInit(): void {
  }
  
  abrirModal() {
    this.modalFormService.abrirModal();
  }

}
