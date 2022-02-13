import { PollenCategoryType } from '../pollen-type';
import { PollenCategoryConfig } from './config';

const DEFAULT_ICON = 'assets/img/trees/tree-placeholder.png';

export const PollenCategoriesConfigMap = new Map<
  PollenCategoryType,
  PollenCategoryConfig
>([
  ['total', { type: 'acer', name: 'TOTAL__NAME', icon: DEFAULT_ICON }],
  ['acer', { type: 'acer', name: 'ACER__NAME', icon: DEFAULT_ICON }],
  ['alnus', { type: 'acer', name: 'ALNUS__NAME', icon: DEFAULT_ICON }],
  ['betula', { type: 'acer', name: 'BETULA__NAME', icon: DEFAULT_ICON }],
  ['corylus', { type: 'acer', name: 'CORYLUS__NAME', icon: DEFAULT_ICON }],
  [
    'cupresaceae_taxaceae',
    { type: 'acer', name: 'CUPRESACEAE_TAXACEAE__NAME', icon: DEFAULT_ICON },
  ],
  ['fraxinus', { type: 'acer', name: 'FRAXINUS__NAME', icon: DEFAULT_ICON }],
  ['platanus', { type: 'acer', name: 'PLATANUS__NAME', icon: DEFAULT_ICON }],
  ['poaceae', { type: 'acer', name: 'POACEAE__NAME', icon: DEFAULT_ICON }],
  ['popolus', { type: 'acer', name: 'POPOLUS__NAME', icon: DEFAULT_ICON }],
  ['salix', { type: 'acer', name: 'SALIX__NAME', icon: DEFAULT_ICON }],
  ['ulmus', { type: 'acer', name: 'ULMUS__NAME', icon: DEFAULT_ICON }],
]);
