import { HttpService } from '@nestjs/axios';
import { map, Observable } from 'rxjs';
import { PollenCatcher } from '../domain';
import { GetPollenCatchersDto } from './persistence/pollen-catcher.dto';
import { mapPollenCatcherToDomain } from './mappers/pollen-catcher.mapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PollenCatcherService {
  private readonly GET_POLLEN_CATCHERS_URL =
    'https://datos.comunidad.madrid/catalogo/dataset/0ac857b5-b747-4d4a-904f-7b6b4f275ead/resource/7a672aac-791c-48e8-afa6-e6b6d3a6b657/download/captadores_polen.json';

  constructor(private readonly http: HttpService) {}

  retrievePollenCatchers(): Observable<PollenCatcher[]> {
    return this.http
      .get<GetPollenCatchersDto>(this.GET_POLLEN_CATCHERS_URL)
      .pipe(
        map(({ data }) =>
          data.data.map((pollenCatcher) =>
            mapPollenCatcherToDomain(pollenCatcher)
          )
        )
      );
  }
}
