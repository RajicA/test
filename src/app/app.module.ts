
import { NzLayoutModule } from 'ng-zorro-antd/layout';

import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { NzMessageService } from 'ng-zorro-antd/message';

import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

registerLocaleData(en);
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    FormsModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    HttpClientModule,
  ],
  providers: [
    NzMessageService,
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
