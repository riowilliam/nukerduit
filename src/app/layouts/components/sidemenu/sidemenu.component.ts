import { Component, OnInit } from '@angular/core';
import { SidemenuService } from '../../services/sidemenu.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit {
  sidemenuItems = this.sidemenuSvc.items;
  constructor(public sidemenuSvc: SidemenuService) {}

  ngOnInit(): void {}
}
