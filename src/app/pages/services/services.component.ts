import { Component, OnInit } from '@angular/core';
import { InfoPageServicesService } from '../../services/info-page-services.service';
import { ModalFormService } from '../../services/modal-form.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {


  constructor(public _infoPageService: InfoPageServicesService,
    private modalFormService: ModalFormService) {
  }

  ngOnInit(): void {}
  
  abrirModal() {
    this.modalFormService.abrirModal();
  }

}
