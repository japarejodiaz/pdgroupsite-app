import { Component, OnInit } from '@angular/core';
import { InfoPageServicesService } from '../../services/info-page-services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {


  constructor(public _infoPageService: InfoPageServicesService) {
     

  }

  ngOnInit(): void {
    
  
    
    
    
  }

}
