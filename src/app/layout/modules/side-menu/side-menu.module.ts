
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SideMenuComponent } from './components/side-menu/side-menu.component';

@NgModule({
  declarations: [
    SideMenuComponent,
  ],
  exports: [
    SideMenuComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NzCollapseModule,
    NzIconModule,
    NzLayoutModule,
    NzSliderModule,
    NzMenuModule,
    NzButtonModule,
  ],
})
export class SideMenuModule { }
