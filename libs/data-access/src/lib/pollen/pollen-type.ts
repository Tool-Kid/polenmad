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
  Popolus = 'popu',
  Salix = 'sali',
  Ulmus = 'ulmu',
  Unknown = 'unknown',
}

export type PollenCategoryType = `${PollenCategory}`;
