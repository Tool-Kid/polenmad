import { PollenCategoryType } from '../pollen-type';
import { PollenCategoryConfig } from './config';

export const PollenCategoriesConfigMap = new Map<
  PollenCategoryType,
  PollenCategoryConfig
>([
  ['total', { type: 'acer', name: 'TOTAL__NAME', icon: '' }],
  ['acer', { type: 'acer', name: 'ACER__NAME', icon: '' }],
  ['alnus', { type: 'acer', name: 'ALNUS__NAME', icon: '' }],
  ['betula', { type: 'acer', name: 'BETULA__NAME', icon: '' }],
  ['corylus', { type: 'acer', name: 'CORYLUS__NAME', icon: '' }],
  [
    'cupresaceae_taxaceae',
    { type: 'acer', name: 'CUPRESACEAE_TAXACEAE__NAME', icon: '' },
  ],
  ['fraxinus', { type: 'acer', name: 'FRAXINUS__NAME', icon: '' }],
  ['platanus', { type: 'acer', name: 'PLATANUS__NAME', icon: '' }],
  ['poaceae', { type: 'acer', name: 'PLATANUS__NAME', icon: '' }],
  ['popolus', { type: 'acer', name: 'POPOLUS__NAME', icon: '' }],
  ['salix', { type: 'acer', name: 'SALIX__NAME', icon: '' }],
  ['ulmus', { type: 'acer', name: 'ULMUS__NAME', icon: '' }],
]);
