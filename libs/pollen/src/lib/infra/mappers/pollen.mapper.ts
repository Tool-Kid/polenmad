import { PollenEntry } from '../../domain/pollen';
import { PollenEntryDto } from '../persistence/pollen.dto';
import { mapPollenCatcherIdToDomain } from './pollen-catcher-id.mapper';
import { mapPollenTypeToDomain } from './pollen-type.mapper';

export function mapPollenDataToDomain(dto: PollenEntryDto): PollenEntry {
  return {
    catcher: mapPollenCatcherIdToDomain(dto.captador),
    pollenType: mapPollenTypeToDomain(dto.tipo_polinico),
    pollenGrains: {
      value: Number(dto.granos_de_polen_x_metro_cubico).valueOf(),
      units: 'CUBIC_METER',
    },
    readDate: new Date(dto.fecha_lectura),
  };
}
