export enum PollenCategory {
  PollenTotal = 'todos',
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

export type PollenGranisCountValue = number | 'ND';
export interface PollenCatcherEntry {
  date: string;
  catcher: PollenCatcherRegionType;
  pollen: PollenCategoryType;
  value: PollenGranisCountValue;
}

export const PollenCategoryIndexRegistry: {
  type: PollenCategoryType;
}[] = [
  {
    type: 'todos',
  },
  {
    type: 'acer',
  },
  {
    type: 'alnu',
  },
  {
    type: 'betu',
  },
  {
    type: 'cory',
  },
  {
    type: 'cory',
  },
  {
    type: 'cupr',
  },
  {
    type: 'frax',
  },
  {
    type: 'plat',
  },
  {
    type: 'poac',
  },
  {
    type: 'popu',
  },
  {
    type: 'sali',
  },
  {
    type: 'ulmu',
  },
];

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
