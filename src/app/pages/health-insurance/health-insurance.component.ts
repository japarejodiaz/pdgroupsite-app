import { Component, OnInit } from '@angular/core';
import { ModalFormService } from '../../services/modal-form.service';
import { InfoPageHealthInsService } from '../../services/info-page-health-ins.service';

@Component({
  selector: 'app-health-insurance',
  templateUrl: './health-insurance.component.html',
  styleUrls: ['./health-insurance.component.css']
})
export class HealthInsuranceComponent implements OnInit {

  constructor(private modalFormService: ModalFormService,
              public _infoPageHealthInsuranceService: InfoPageHealthInsService ) { }

  ngOnInit(): void {
  }

  abrirModal() {
    this.modalFormService.abrirModal();
    // console.log(this._infoPageHealthInsuranceService.image1);
  }

}
