import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { TuiTabsModule } from '@taiga-ui/kit';
import { TuiSvgModule } from '@taiga-ui/core';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';

const TUI_MODULES = [TuiTabsModule, TuiSvgModule];

@NgModule({
  declarations: [TabsComponent],
  imports: [CommonModule, RouterModule, TranslocoModule, ...TUI_MODULES],
  exports: [TabsComponent],
})
export class TabsModule {}
