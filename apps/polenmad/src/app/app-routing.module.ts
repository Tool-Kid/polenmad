import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
