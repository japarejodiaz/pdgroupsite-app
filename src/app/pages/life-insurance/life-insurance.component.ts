import { Component, OnInit } from '@angular/core';
import { ModalFormService } from 'src/app/services/modal-form.service';


@Component({
  selector: 'app-life-insurance',
  templateUrl: './life-insurance.component.html',
  styles: [
  ]
})
export class LifeInsuranceComponent implements OnInit {

  constructor( private modalFormService: ModalFormService) { }

  ngOnInit(): void {
  }
  
  abrirModal() {
    this.modalFormService.abrirModal();
  }

}
