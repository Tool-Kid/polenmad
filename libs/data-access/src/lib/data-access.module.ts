import { ModuleWithProviders, NgModule } from '@angular/core';
import { getProviders } from './providers';

export interface DataAccessModuleConfig {
  strategy: 'http' | 'mock';
}

@NgModule()
export class DataAccessModule {
  static forRoot(
    config: DataAccessModuleConfig
  ): ModuleWithProviders<DataAccessModule> {
    return {
      ngModule: DataAccessModule,
      providers: [...getProviders(config)],
    };
  }
}
