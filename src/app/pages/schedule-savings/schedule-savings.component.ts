import { Component, OnInit } from '@angular/core';
import { ModalFormService } from '../../services/modal-form.service';
import { InfoPageScheduleSavingsService } from '../../services/info-page-schedule-savings.service';

@Component({
  selector: 'app-schedule-savings',
  templateUrl: './schedule-savings.component.html',
  styleUrls: ['./schedule-savings.component.css']
})
export class ScheduleSavingsComponent implements OnInit {

  constructor(private modalFormService: ModalFormService,
              public _infoPageScheduleSavingsServices: InfoPageScheduleSavingsService ) { }

  ngOnInit(): void {
  }
  
  abrirModal() {
    this.modalFormService.abrirModal();
  }

}
