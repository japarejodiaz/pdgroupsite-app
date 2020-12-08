import { Component, OnInit } from '@angular/core';
import { InfoPageTeamsService } from '../../services/info-page-teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  constructor(public _infoPageTeamsService: InfoPageTeamsService) { }

  ngOnInit(): void {
  }

}
