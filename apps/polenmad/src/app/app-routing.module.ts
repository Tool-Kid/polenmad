import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'metrics',
        pathMatch: 'full',
      },
      {
        path: 'metrics',
        loadChildren: () =>
          import('./pages/metrics/metrics-page.module').then(
            (m) => m.MetricsPageModule
          ),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./pages/settings/settings-page.module').then(
            (m) => m.SettingsPageModule
          ),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('./pages/about/about-page.module').then(
            (m) => m.AboutPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
