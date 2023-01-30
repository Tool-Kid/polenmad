import { PollenCatcherId } from '../../domain';

export const POLLEN_CATCHER_ID_MAP = new Map<string, PollenCatcherId>([
  ['ALCA', PollenCatcherId.AlcalaDeHenares],
  ['ALCO', PollenCatcherId.Alcobendas],
  ['ALER', PollenCatcherId.BarrioSalamanca],
  ['ARAN', PollenCatcherId.Aranjuez],
  ['AYTM', PollenCatcherId.Arganzuela],
  ['COSL', PollenCatcherId.Coslada],
  ['FACF', PollenCatcherId.CiudadUniversitaria],
  ['GETA', PollenCatcherId.Getafe],
  ['LEGA', PollenCatcherId.Leganes],
  ['ROZA', PollenCatcherId.LasRozas],
  ['VILL', PollenCatcherId.ColladoVillalba],
]);

export function mapPollenCatcherIdToDomain(id: string): PollenCatcherId {
  return POLLEN_CATCHER_ID_MAP.get(id) ?? PollenCatcherId.Unknown;
}
