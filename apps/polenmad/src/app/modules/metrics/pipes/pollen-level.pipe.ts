import { Pipe, PipeTransform } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { PollenLevelType } from '@polenmad/data-access';

const POLLEN_LEVEL_I18N_MAP = new Map<PollenLevelType, string>([
  ['very_high', 'POLLEN_LEVEL__VERY_HIGH'],
  ['high', 'POLLEN_LEVEL__HIGH'],
  ['medium', 'POLLEN_LEVEL__MEDIUM'],
  ['low', 'POLLEN_LEVEL__LOW'],
]);

@Pipe({
  name: 'pollenLevel',
})
export class PollenLevelPipe implements PipeTransform {
  constructor(private readonly transloco: TranslocoService) {}
  transform(value: PollenLevelType): string {
    const i18nKey =
      POLLEN_LEVEL_I18N_MAP.get(value) || 'POLLEN_LEVEL__UNESTIMATED';
    const i18nValue = this.transloco.translate(`pollen.${i18nKey}`);
    return i18nValue;
  }
}
