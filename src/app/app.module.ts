import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxUploaderModule } from 'ngx-uploader';

import { AppComponent } from './app.component';
import { NgxFileDropComponent } from './ngx-file-drop.component';
import { NgxFileDropModule } from 'ngx-file-drop';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NgxFileDropComponent
  ],
  imports: [
    BrowserModule,
    NgxUploaderModule,
    NgxFileDropModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
