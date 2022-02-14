import { PollenCategoryType } from '../pollen-type';
import { PollenCategoryConfig } from './config';

const DEFAULT_ICON = 'assets/img/trees/tree-placeholder.png';
const ICON_PATH = 'assets/img/trees/$.png';
function icon(type: PollenCategoryType) {
  return ICON_PATH.replace('$', type);
}

export const PollenCategoriesConfigMap = new Map<
  PollenCategoryType,
  PollenCategoryConfig
>([
  ['todos', { type: 'todos', name: 'TOTAL__NAME', icon: icon('todos') }],
  ['acer', { type: 'acer', name: 'ACER__NAME', icon: icon('acer') }],
  ['alnu', { type: 'alnu', name: 'ALNUS__NAME', icon: icon('alnu') }],
  ['betu', { type: 'betu', name: 'BETULA__NAME', icon: icon('betu') }],
  ['cory', { type: 'cory', name: 'CORYLUS__NAME', icon: icon('cory') }],
  [
    'cupr',
    {
      type: 'cupr',
      name: 'CUPRESACEAE_TAXACEAE__NAME',
      icon: icon('cupr'),
    },
  ],
  ['frax', { type: 'frax', name: 'FRAXINUS__NAME', icon: icon('frax') }],
  ['plat', { type: 'plat', name: 'PLATANUS__NAME', icon: icon('plat') }],
  ['poac', { type: 'poac', name: 'POACEAE__NAME', icon: icon('poac') }],
  ['popo', { type: 'popo', name: 'POPOLUS__NAME', icon: icon('popo') }],
  ['sali', { type: 'sali', name: 'SALIX__NAME', icon: icon('sali') }],
  ['ulmu', { type: 'ulmu', name: 'ULMUS__NAME', icon: icon('ulmu') }],
]);
