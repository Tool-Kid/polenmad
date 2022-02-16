export enum PollenCategory {
  Alnus = 'alnu',
  Acer = 'acer',
  Betula = 'betu',
  Corylus = 'cory',
  CupresaceaeTaxaceae = 'cupr',
  Fraxinus = 'frax',
  Platanus = 'plat',
  Poaceae = 'poac',
  Populus = 'popu',
  Salix = 'sali',
  Ulmus = 'ulmu',
}
export type PollenCategoryType = `${PollenCategory}`;

export enum PollenCatcherRegion {
  AlcalaDeHenares = 'ah',
  Alcobendas = 'alco',
  Aranjuez = 'aran',
  Coslada = 'cosl',
  Getafe = 'geta',
  Leganes = 'lega',
  ColladoVillalba = 'covi',
  BarrioSalamanca = 'sala',
  Arganzuela = 'arga',
  CiudadUniversitaria = 'ciuu',
  LasRozas = 'roza',
}
export type PollenCatcherRegionType = `${PollenCatcherRegion}`;

export interface PollenCollection {
  entries: PollenCatcherEntry[];
}

export interface PollenCatcherEntry {
  date: string;
  catcher: PollenCatcherRegionType;
  pollen: PollenCategoryType;
  value: number;
}

export const PollenCategoryIndexRegistry: {
  type: PollenCategoryType;
  index: number;
}[] = [
  {
    type: 'acer',
    index: 0,
  },
  {
    type: 'alnu',
    index: 0,
  },
  {
    type: 'betu',
    index: 0,
  },
  {
    type: 'cory',
    index: 0,
  },
  {
    type: 'cory',
    index: 0,
  },
  {
    type: 'cupr',
    index: 0,
  },
  {
    type: 'frax',
    index: 0,
  },
  {
    type: 'plat',
    index: 0,
  },
  {
    type: 'poac',
    index: 0,
  },
  {
    type: 'popu',
    index: 0,
  },
  {
    type: 'sali',
    index: 0,
  },
  {
    type: 'ulmu',
    index: 0,
  },
];

export function getPollenCategoryForIndex(index: number) {
  return PollenCategoryIndexRegistry.find(
    (registry) => registry.index === index
  ).type;
}

export const CatcherRegionIndexRegistry: {
  type: PollenCatcherRegionType;
  index: number;
}[] = [
  {
    type: 'ah',
    index: 1,
  },
  {
    type: 'alco',
    index: 2,
  },
  {
    type: 'aran',
    index: 3,
  },
  {
    type: 'covi',
    index: 4,
  },
  {
    type: 'cosl',
    index: 5,
  },
  {
    type: 'geta',
    index: 6,
  },
  {
    type: 'roza',
    index: 7,
  },
  {
    type: 'lega',
    index: 8,
  },
  {
    type: 'arga',
    index: 9,
  },
  {
    type: 'sala',
    index: 10,
  },
  {
    type: 'ciuu',
    index: 11,
  },
];

export function getCatcherRegionForIndex(index: number) {
  return CatcherRegionIndexRegistry.find((registry) => registry.index === index)
    .type;
}
