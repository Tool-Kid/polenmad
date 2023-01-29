import { PollenCatcherDto } from '../persistence/pollen-catcher.dto';
import {
  PollenCatcher,
  PollenCatcherOwnsership,
} from '../../domain/pollen-catcher';

export function mapPollenCatcherToDomain(
  pollenCatcher: PollenCatcherDto
): PollenCatcher {
  return {
    id: pollenCatcher.codigo,
    name: pollenCatcher.nombre,
    description: pollenCatcher.descripcion,
    height: pollenCatcher.altura_del_captador,
    ownership: pollenCatcher.tipo_titularidad as PollenCatcherOwnsership,
    reportedPollenTypes: pollenCatcher.tipos_de_polen_registrados.split(', '),
    geo: {
      building: pollenCatcher.edificio,
      street: pollenCatcher.direccion_ubicacion,
      latitude: pollenCatcher.lat_epsg4258,
      longitude: pollenCatcher.long_epsg4258,
      ZIP: pollenCatcher.direccion_codigo_postal,
    },
  };
}
