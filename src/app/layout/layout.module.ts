
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContentComponent } from './components/content/content.component';
import { LoaderComponent } from './components/loader/loader.component';
import { HeaderModule } from './modules/header/header.module';
import { SideMenuModule } from './modules/side-menu/side-menu.module';

const exportComponents = [
  ContentComponent,
  LoaderComponent,
];

const exportModules = [
  HeaderModule,
  SideMenuModule
];

@NgModule({
  declarations: [
    ...exportComponents,
  ],
  exports: [
    ...exportComponents,
    ...exportModules,
  ],
  imports: [
    CommonModule,
    ...exportModules,
  ],
})
export class LayoutModule { }
