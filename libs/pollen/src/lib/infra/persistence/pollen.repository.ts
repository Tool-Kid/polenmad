import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { PollenEntry } from '../../domain/pollen';
import { PollenRepository as PollenRepository } from '../../domain/pollen.repository';
import { PollenCollectDto } from './pollen.dto';
import { mapPollenDataToDomain } from '../mappers/pollen.mapper';

@Injectable()
export class PollenHttpRepository implements PollenRepository {
  private readonly POLLEN_DATA_URL =
    'https://datos.comunidad.madrid/catalogo/dataset/7bc9d9fd-16ec-4ce9-aa21-91ca0254d06e/resource/8285490e-3e65-4617-8240-c808e37c3933/download/mediciones_polen.json';

  constructor(private readonly http: HttpService) {}

  getPollen(): Observable<PollenEntry[]> {
    return this.http
      .get<PollenCollectDto>(this.POLLEN_DATA_URL)
      .pipe(
        map(({ data }) =>
          data.data.map((entry) => mapPollenDataToDomain(entry))
        )
      );
  }
}
