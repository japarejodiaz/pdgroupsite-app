import { Component, OnInit } from '@angular/core';
import { ModalFormService } from 'src/app/services/modal-form.service';
import { InfoPageLifeinsuranceService } from '../../services/info-page-lifeinsurance.service';


@Component({
  selector: 'app-life-insurance',
  templateUrl: './life-insurance.component.html',
  styles: [
  ]
})
export class LifeInsuranceComponent implements OnInit {

  constructor(private modalFormService: ModalFormService,
              public _infoPageLifeInsuranceServices: InfoPageLifeinsuranceService) { }

  ngOnInit(): void {
  }
  
  abrirModal() {
    this.modalFormService.abrirModal();
  }

}
