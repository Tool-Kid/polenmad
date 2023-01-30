export interface PollenCatcher {
  id: PollenCatcherId;
  name: string;
  description: string;
  ownership: PollenCatcherOwnsership;
  height: number;
  geo: PollenCatcherGeo;
  reportedPollenTypes: string[];
}

export interface PollenCatcherGeo {
  street: string;
  ZIP: number;
  latitude: number;
  longitude: number;
  building: string;
}

export enum PollenCatcherId {
  AlcalaDeHenares = 'ALCALA',
  Alcobendas = 'ALCOBENDAS',
  BarrioSalamanca = 'BARRIO_SALAMANCA',
  Aranjuez = 'ARANJUEZ',
  Arganzuela = 'ARGANZUELA',
  Coslada = 'COSLADA',
  CiudadUniversitaria = 'CIUDAD_UNIVERSITARIA',
  Getafe = 'GETAFE',
  Leganes = 'LEGANES',
  LasRozas = 'LAS_ROZAS',
  ColladoVillalba = 'COLLADO_VILLALBA',
  Unknown = 'UNKNOWN',
}

export type PollenCatcherOwnsership = 'public' | 'private';
