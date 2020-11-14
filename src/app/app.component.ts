import { Component } from '@angular/core';
import { InfoPageAppcomponentService } from './services/info-page-appcomponent.service';
import { ModalFormService } from './services/modal-form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pdgroupSite';

  constructor(public _infoPageAppComponent: InfoPageAppcomponentService,
              private modalFormService: ModalFormService) { 

  
     // console.log(_infoPageAppComponent.infoPageSection1["section_title_h2"])
  
  }
  
  abrirModal() {
  
    this.modalFormService.abrirModal();
  
  }
  
  

}
