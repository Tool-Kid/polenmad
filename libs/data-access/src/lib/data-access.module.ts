import { ModuleWithProviders, NgModule } from '@angular/core';
import { getProviders } from './providers';

export type ProviderStrategy = 'http' | 'mock';
export interface DataAccessModuleConfig {
  strategy: ProviderStrategy;
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
