import { PollenType } from '../../domain/pollen';

const POLLEN_TYPE_MAP = new Map<string, PollenType>([
  ['Arce', PollenType.Arce],
  ['Aliso', PollenType.Aliso],
  ['Artemisia', PollenType.Artemisia],
  ['Abedul', PollenType.Abedul],
  ['Castaño', PollenType.Castaño],
  ['Compuestas', PollenType.Compuestas],
  ['Corylus', PollenType.Corylus],
  ['Cupresáceas/Taxáceas', PollenType.Cupresaceas_Taxaceas],
  ['Quenopodiáceas/Amarantáceas', PollenType.Quenopodiaceas_Amarantaceas],
  ['Ericaceas', PollenType.Ericaceas],
  ['Eucalipto', PollenType.Eucalipto],
  ['Fresno', PollenType.Fresno],
  ['Aligustre', PollenType.Aligustre],
  ['Moreras', PollenType.Moreras],
  ['Olivo', PollenType.Olivo],
  ['Pinos', PollenType.Pinos],
  ['Plantago', PollenType.Arce],
  ['Plátanos de Paseo', PollenType.PlatanoDePaseo],
  ['Gramíneas', PollenType.Arce],
  ['Populus', PollenType.Arce],
  ['Quercus', PollenType.Arce],
  ['Rumex', PollenType.Arce],
  ['Sauces', PollenType.Arce],
  ['Olmos', PollenType.Arce],
  ['Urticaceas', PollenType.Arce],
  ['Otros', PollenType.Arce],
  ['PNI (Polen No Identificado)', PollenType.PNI],
]);

export function mapPollenTypeToDomain(type: string): PollenType {
  return POLLEN_TYPE_MAP.get(type) ?? PollenType.PNI;
}
