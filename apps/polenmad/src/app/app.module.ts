import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  TuiDialogModule,
  TuiNotificationsModule,
  TuiRootModule,
} from '@taiga-ui/core';
import { DataAccessModule } from '@polenmad/data-access';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './components/header/header.module';
import { TabsModule } from './components/tabs/tabs.module';

const OWN_MODULES = [HeaderModule, TabsModule];
const TAIGA_MODULES = [TuiRootModule, TuiNotificationsModule, TuiDialogModule];

const NGXS_MODULES = [
  NgxsModule.forRoot([], { developmentMode: !environment.production }),
  NgxsStoragePluginModule.forRoot({}),
  NgxsReduxDevtoolsPluginModule.forRoot({ disabled: environment.production }),
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DataAccessModule.forRoot({
      strategy: environment.production ? 'http' : 'mock',
    }),
    ...NGXS_MODULES,
    ...TAIGA_MODULES,
    ...OWN_MODULES,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
