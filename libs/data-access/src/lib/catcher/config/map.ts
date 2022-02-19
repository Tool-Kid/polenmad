import { PollenCatcherRegionConfig } from './config';
import { PollenCatcherRegionType } from '../catcher';

export const PollenCategoriesConfigMap = new Map<
  PollenCatcherRegionType,
  PollenCatcherRegionConfig
>([
  ['ah', { type: 'ah', name: 'AH__NAME' }],
  ['alco', { type: 'alco', name: 'ALCO__NAME' }],
  ['aran', { type: 'aran', name: 'AH__NAME' }],
  ['arga', { type: 'ah', name: 'ARGA__NAME' }],
  ['ciuu', { type: 'ciuu', name: 'CIUU__NAME' }],
  ['cosl', { type: 'cosl', name: 'COSL__NAME' }],
  ['covi', { type: 'covi', name: 'COVI__NAME' }],
  ['geta', { type: 'geta', name: 'GETA__NAME' }],
  ['lega', { type: 'lega', name: 'LEGA__NAME' }],
  ['roza', { type: 'roza', name: 'ROZA__NAME' }],
  ['sala', { type: 'sala', name: 'SALA__NAME' }],
]);
