import { Component, OnInit } from '@angular/core';
import { ModalFormService } from '../../services/modal-form.service';

@Component({
  selector: 'app-annuities',
  templateUrl: './annuities.component.html',
  styleUrls: ['./annuities.component.css']
})
export class AnnuitiesComponent implements OnInit {

  constructor( private modalFormService: ModalFormService ) { }

  ngOnInit(): void {
  }
  
   abrirModal() {
    this.modalFormService.abrirModal();
  }


}
