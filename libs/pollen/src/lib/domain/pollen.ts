import { PollenCatcherId } from './pollen-catcher';

export interface PollenEntry {
  catcher: PollenCatcherId;
  readDate: Date;
  pollenType: PollenType;
  pollenGrains: {
    value: number;
    units: 'CUBIC_METER';
  };
}

export enum PollenType {
  Arce = 'Arce',
  Aliso = 'Aliso',
  Artemisia = 'Artemisia',
  Abedul = 'Abedul',
  Castaño = 'Castaño',
  Compuestas = 'Compuestas',
  Corylus = 'Corylus',
  Cupresaceas_Taxaceas = 'Cupresáceas/Taxáceas',
  Quenopodiaceas_Amarantaceas = 'Quenopodiáceas/Amarantáceas',
  Ericaceas = 'Ericaceas',
  Eucalipto = 'Eucalipto',
  Fresno = 'Fresno',
  Aligustre = 'Aligustre',
  Moreras = 'Moreras',
  Olivo = 'Olivo',
  Pinos = 'Pinos',
  Plantago = 'Plantago',
  PlatanoDePaseo = 'Plátanos de Paseo',
  Gramíneas = 'Gramíneas',
  Populus = 'Populus',
  Quercus = 'Quercus',
  Rumex = 'Rumex',
  Sauces = 'Sauces',
  Olmos = 'Olmos',
  Urticaceas = 'Urticaceas',
  Otros = 'Otros',
  PNI = 'PNI (Polen No Identificado)',
}
