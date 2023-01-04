import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TuiDialogModule, TuiRootModule } from '@taiga-ui/core';
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
import { TranslocoRootModule } from './modules/transloco/transloco.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SettingsState } from './pages/settings/state/settings.state';
import { FooterModule } from './components/footer/footer.module';

const OWN_MODULES = [HeaderModule, TabsModule, FooterModule];
const TAIGA_MODULES = [TuiRootModule, TuiDialogModule];

const NGXS_MODULES = [
  NgxsModule.forRoot([SettingsState], {
    developmentMode: !environment.production,
  }),
  NgxsStoragePluginModule.forRoot({ key: [SettingsState] }),
  NgxsReduxDevtoolsPluginModule.forRoot({ disabled: environment.production }),
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    DataAccessModule.forRoot({
      strategy: environment.production ? 'mock' : 'mock',
    }),
    ...NGXS_MODULES,
    ...TAIGA_MODULES,
    ...OWN_MODULES,
    TranslocoRootModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
