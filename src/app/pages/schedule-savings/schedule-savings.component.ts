import { Component, OnInit } from '@angular/core';
import { ModalFormService } from '../../services/modal-form.service';

@Component({
  selector: 'app-schedule-savings',
  templateUrl: './schedule-savings.component.html',
  styleUrls: ['./schedule-savings.component.css']
})
export class ScheduleSavingsComponent implements OnInit {

  constructor( private modalFormService: ModalFormService) { }

  ngOnInit(): void {
  }
  
  abrirModal() {
    this.modalFormService.abrirModal();
  }

}
