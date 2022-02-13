import { PollenCategoryType } from '../pollen-type';
import { PollenCategoryConfig } from './config';

const DEFAULT_ICON = 'assets/img/trees/tree-placeholder.png';

export const PollenCategoriesConfigMap = new Map<
  PollenCategoryType,
  PollenCategoryConfig
>([
  ['total', { type: 'total', name: 'TOTAL__NAME', icon: DEFAULT_ICON }],
  ['acer', { type: 'acer', name: 'ACER__NAME', icon: DEFAULT_ICON }],
  ['alnus', { type: 'alnus', name: 'ALNUS__NAME', icon: DEFAULT_ICON }],
  ['betula', { type: 'betula', name: 'BETULA__NAME', icon: DEFAULT_ICON }],
  ['corylus', { type: 'corylus', name: 'CORYLUS__NAME', icon: DEFAULT_ICON }],
  [
    'cupresaceae_taxaceae',
    {
      type: 'cupresaceae_taxaceae',
      name: 'CUPRESACEAE_TAXACEAE__NAME',
      icon: DEFAULT_ICON,
    },
  ],
  [
    'fraxinus',
    { type: 'fraxinus', name: 'FRAXINUS__NAME', icon: DEFAULT_ICON },
  ],
  [
    'platanus',
    { type: 'platanus', name: 'PLATANUS__NAME', icon: DEFAULT_ICON },
  ],
  ['poaceae', { type: 'poaceae', name: 'POACEAE__NAME', icon: DEFAULT_ICON }],
  ['popolus', { type: 'popolus', name: 'POPOLUS__NAME', icon: DEFAULT_ICON }],
  ['salix', { type: 'salix', name: 'SALIX__NAME', icon: DEFAULT_ICON }],
  ['ulmus', { type: 'ulmus', name: 'ULMUS__NAME', icon: DEFAULT_ICON }],
]);
