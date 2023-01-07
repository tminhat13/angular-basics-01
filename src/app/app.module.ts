import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SuccessComponent } from './success/success.component';
import { WarningAlert } from './warning/warning.component';

@NgModule({
  declarations: [AppComponent, SuccessComponent, WarningAlert],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
