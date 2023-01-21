import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map, Observable, tap } from 'rxjs';
import { PollenEntry } from '../domain/pollen';
import { mapPollenDataToDomain } from './mappers';
import { PollenDto } from './persistence';

@Injectable()
export class PollenService {
  private readonly POLLEN_DATA_URL =
    'https://datos.comunidad.madrid/catalogo/dataset/7bc9d9fd-16ec-4ce9-aa21-91ca0254d06e/resource/8285490e-3e65-4617-8240-c808e37c3933/download/mediciones_polen.json';

  constructor(private readonly http: HttpService) {}

  retrievePollenData(): Observable<PollenEntry[]> {
    return this.http
      .get<PollenDto>(this.POLLEN_DATA_URL)
      .pipe(
        map((response) =>
          response.data.data.map((entry) => mapPollenDataToDomain(entry))
        )
      );
  }
}
