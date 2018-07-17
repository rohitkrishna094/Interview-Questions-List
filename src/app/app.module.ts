import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, NgbModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
