import { Component, OnInit } from '@angular/core';
import { ModalFormService } from '../../services/modal-form.service';
import { InfoPagePensionsRetirementService } from '../../services/info-page-pensions-retirement.service';

@Component({
  selector: 'app-pensions-retirements',
  templateUrl: './pensions-retirements.component.html',
  styleUrls: ['./pensions-retirements.component.css']
})
export class PensionsRetirementsComponent implements OnInit {

  constructor(private modalFormService: ModalFormService,
              public _infoPagePensionsRetirementService: InfoPagePensionsRetirementService) { }

  ngOnInit(): void {
    
  }  
  
 abrirModal() {
    this.modalFormService.abrirModal();
  }

}
