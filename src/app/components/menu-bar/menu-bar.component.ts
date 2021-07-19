import { Component, OnInit } from '@angular/core';
import { RoutePathKey } from 'src/app/model/route-path-key';


@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  
  paths = RoutePathKey;

  constructor() { }

  ngOnInit(): void {
  }

}
