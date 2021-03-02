import { Component } from '@angular/core';

import { menuItems } from 'app/shared/utils/nav-list';

@Component({
  selector: 'test-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {

  menuItems: any;
  isCollapsed = false;

  constructor() {
    this.menuItems = menuItems;
  }

  toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
  }
}
