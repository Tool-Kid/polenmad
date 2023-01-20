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
    reportedPollenTypes: pollenCatcher.tipos_de_polen_registrados.split(','),
    geo: {
      building: pollenCatcher.edificio,
      street: pollenCatcher.direccion_ubicacion,
      zbs: {
        code: pollenCatcher.zbs_geocodigo,
        name: pollenCatcher.zbs_nombre,
      },
      ZIP: pollenCatcher.direccion_codigo_postal,
    },
  };
}
