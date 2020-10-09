import { Component, OnInit } from '@angular/core';
import { InfoPageService } from '../../services/info-page.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(public pageService: InfoPageService ) { }

  ngOnInit(): void {
  }

}
