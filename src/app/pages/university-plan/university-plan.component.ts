import { Component, OnInit } from '@angular/core';
import { ModalFormService } from '../../services/modal-form.service';
import { InfoPageUniversityPlanService } from '../../services/info-page-university-plan.service';

@Component({
  selector: 'app-university-plan',
  templateUrl: './university-plan.component.html',
  styles: [
  ]
})
export class UniversityPlanComponent implements OnInit {

  constructor(private modalFormService: ModalFormService,
              public _infoPageUniversityPlanService: InfoPageUniversityPlanService) { }

  ngOnInit(): void {
  }
  
  abrirModal() {
    this.modalFormService.abrirModal();
  }

}
