import { Component, OnInit } from '@angular/core';
import { ModalFormService } from '../../services/modal-form.service';

@Component({
  selector: 'app-international-presence',
  templateUrl: './international-presence.component.html',
  styleUrls: ['./international-presence.component.css']
})
export class InternationalPresenceComponent implements OnInit {

  
  constructor(private modalFormService: ModalFormService) { }

  ngOnInit(): void {
  }
  
  abrirModal() {
    this.modalFormService.abrirModal();

  }
}
