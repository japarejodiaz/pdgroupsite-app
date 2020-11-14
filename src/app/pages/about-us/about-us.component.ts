import { Component, OnInit } from '@angular/core';
import { ModalFormService } from '../../services/modal-form.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor( private modalFormService: ModalFormService) { }

  ngOnInit(): void {
  }

  abrirModal() {
  
    this.modalFormService.abrirModal();
  }

}
