import { Component, OnInit } from '@angular/core';
import { ModalFormService } from '../../services/modal-form.service';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styles: [
  ]
})
export class ModalFormComponent implements OnInit {

  constructor( public modelFormService: ModalFormService) { }

  ngOnInit(): void {
  }

  cerrarModal() {
    
    this.modelFormService.cerrarModal();   

  }


}
