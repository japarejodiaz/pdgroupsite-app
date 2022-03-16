import { Component, OnInit } from '@angular/core';
import { ModalFormService } from '../../services/modal-form.service';
import { InfoPageAboutUsService } from '../../services/info-page-about-us.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor( private modalFormService: ModalFormService,
               public _InfoPageAboutUsService: InfoPageAboutUsService ) { }

  ngOnInit(): void {
  }

  abrirModal() {

    this.modalFormService.abrirModal();
  }

}
