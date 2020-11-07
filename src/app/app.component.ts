import { Component } from '@angular/core';
import { InfoPageAppcomponentService } from './services/info-page-appcomponent.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pdgroupSite';

  constructor(public _infoPageAppComponent: InfoPageAppcomponentService) { 

  
     // console.log(_infoPageAppComponent.infoPageSection1["section_title_h2"])
  
  }

}
