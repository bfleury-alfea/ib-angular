import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isCollapsed: boolean;
  @Input() title: string;

  constructor() {
  }

  ngOnInit() {
    this.isCollapsed = false;
  }

  toggleCollapseNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
