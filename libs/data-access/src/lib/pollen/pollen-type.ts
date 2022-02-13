export enum PollenCategory {
  PollenTotal = 'total',
  Alnus = 'alnus',
  Acer = 'acer',
  Betula = 'betula',
  Corylus = 'corylus',
  CupresaceaeTaxaceae = 'cupresaceae_taxaceae',
  Fraxinus = 'fraxinus',
  Platanus = 'platanus',
  Poaceae = 'poaceae',
  Popolus = 'popolus',
  Salix = 'salix',
  Ulmus = 'ulmus',
  Unknown = 'unknown',
}

export type PollenCategoryType = `${PollenCategory}`;
