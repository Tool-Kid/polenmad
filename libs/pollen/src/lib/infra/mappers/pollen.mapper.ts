import { PollenEntry } from '../../domain/pollen';
import { PollenEntryDto } from '../persistence/pollen.dto';
import { mapPollenTypeToDomain } from './pollen-type.mapper';

export function mapPollenDataToDomain(dto: PollenEntryDto): PollenEntry {
  return {
    catcher: dto.captador as any,
    pollenType: mapPollenTypeToDomain(dto.tipo_polinico),
    pollenGrains: {
      value: Number(dto.granos_de_polen_x_metro_cubico).valueOf(),
      units: 'CUBIC_METER',
    },
    readDate: new Date(dto.fecha_lectura),
  };
}
