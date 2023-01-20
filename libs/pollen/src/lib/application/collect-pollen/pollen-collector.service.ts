import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';
import { PollenEntry } from '../../domain';
import { PollenEntryDto } from '../../infra';
import { mapPollenDataToDomain } from '../../infra/mappers/pollen.mapper';

@Injectable()
export class PollenCollectorService {
  private readonly POLLEN_DATA_URL =
    'https://datos.comunidad.madrid/catalogo/dataset/7bc9d9fd-16ec-4ce9-aa21-91ca0254d06e/resource/8285490e-3e65-4617-8240-c808e37c3933/download/mediciones_polen.json';

  constructor(private readonly http: HttpService) {}

  async getPollenData(): Promise<PollenEntry> {
    return lastValueFrom(
      this.http
        .get<PollenEntryDto>(this.POLLEN_DATA_URL)
        .pipe(map((response) => mapPollenDataToDomain(response.data)))
    );
  }
}
