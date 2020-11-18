import { Component, OnInit } from '@angular/core';
import { ModalFormService } from '../../services/modal-form.service';
import { InfoPageAnnuitiesService } from '../../services/info-page-annuities.service';

@Component({
  selector: 'app-annuities',
  templateUrl: './annuities.component.html',
  styleUrls: ['./annuities.component.css']
})
export class AnnuitiesComponent implements OnInit {

  constructor(private modalFormService: ModalFormService,
            public _infoPageAnnuitiesService: InfoPageAnnuitiesService  ) { }

  ngOnInit(): void {
  }
  
   abrirModal() {
    this.modalFormService.abrirModal();
  }


}
