import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

export enum PollenCatcherRegion {
  AlcalaDeHenares = 'ah',
  Alcobendas = 'alco',
  Aranjuez = 'aran',
  Arganzuela = 'arga',
  BarrioSalamanca = 'sala',
  CiudadUniversitaria = 'ciuu',
  ColladoVillalba = 'covi',
  Coslada = 'cosl',
  Getafe = 'geta',
  LasRozas = 'roza',
  Leganes = 'lega',
  Total = 'todos',
}
export type PollenCatcherRegionType = `${PollenCatcherRegion}`;

const PollenCatcherRegionCoordinatesMap = new Map<
  PollenCatcherRegion,
  { x: string; y: string }
>([
  [PollenCatcherRegion.AlcalaDeHenares, { x: '356', y: '264' }],
  [PollenCatcherRegion.Alcobendas, { x: '284', y: '242' }],
  [PollenCatcherRegion.Aranjuez, { x: '289', y: '439' }],
  [PollenCatcherRegion.Arganzuela, { x: '261', y: '298' }],
  [PollenCatcherRegion.BarrioSalamanca, { x: '266', y: '281' }],
  [PollenCatcherRegion.CiudadUniversitaria, { x: '249', y: '286' }],
  [PollenCatcherRegion.ColladoVillalba, { x: '147', y: '206' }],
  [PollenCatcherRegion.Coslada, { x: '299', y: '286' }],
  [PollenCatcherRegion.Getafe, { x: '250', y: '331' }],
  [PollenCatcherRegion.LasRozas, { x: '201', y: '247' }],
  [PollenCatcherRegion.Leganes, { x: '240', y: '324' }],
]);

@Injectable()
export class PollenCollectorService {
  private readonly baseUrl =
    'https://gestiona3.madrid.org/geoserver3/wms?SERVICE=WMS&VERSION=1.1.1&REQUEST=GetFeatureInfo&LAYERS=SPOL_V_CAPTADORES_GIS&QUERY_LAYERS=SPOL_V_CAPTADORES_GIS&STYLES=&BBOX=365560.97254%2C4415910.465472%2C495339.02746%2C4558089.534528&FEATURE_COUNT=50&HEIGHT=493&WIDTH=450&FORMAT=image%2Fpng&INFO_FORMAT=text%2Fhtml&SRS=EPSG%3A23030&X=${X}&Y=${Y}';

  constructor(private readonly http: HttpService) {}

  getPollenDataForCatcherRegion(catcher: PollenCatcherRegion) {
    const { x, y } = PollenCatcherRegionCoordinatesMap.get(catcher);
    const url = this.baseUrl.replace('${X}', x).replace('${Y}', y);
    return this.http.get(url);
  }
}
