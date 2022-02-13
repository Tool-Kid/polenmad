import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetricsLayoutComponent } from './layout/metrics-layout.component';

const routes: Routes = [{ path: '', component: MetricsLayoutComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MetricsPageRoutingModule {}
