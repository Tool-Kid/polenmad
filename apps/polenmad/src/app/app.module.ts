import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {
  TuiDialogModule,
  TuiNotificationsModule,
  TuiRootModule,
} from '@taiga-ui/core';
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './components/header/header.module';

const OWN_MODULES = [HeaderModule];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiNotificationsModule,
    TuiDialogModule,
    AppRoutingModule,
    ...OWN_MODULES,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
