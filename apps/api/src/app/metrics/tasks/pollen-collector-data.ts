import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { of } from 'rxjs';

import { createWriteStream, mkdirSync, rmSync } from 'fs';
import { PollenCategoryType } from '@polenmad/data-access';

export enum PollenCategory {
  Total = 'todos',
  Alnus = 'alnu',
  Acer = 'acer',
  Betula = 'betu',
  Corylus = 'cory',
  CupresaceaeTaxaceae = 'cupr',
  Fraxinus = 'frax',
  Platanus = 'plat',
  Poaceae = 'poac',
  Populus = 'popu',
  Salix = 'sali',
  Ulmus = 'ulmu',
}

export enum PollenCatcherRegion {
  AlcalaDeHenares = 'ah',
  Alcobendas = 'alco',
  Aranjuez = 'aran',
  Coslada = 'cosl',
  Getafe = 'geta',
  Leganes = 'lega',
  ColladoVillalba = 'covi',
  BarrioSalamanca = 'sala',
  Arganzuela = 'arga',
  CiudadUniversitaria = 'ciuu',
  LasRozas = 'roza',
  Total = 'todos',
}
export type PollenCatcherRegionType = `${PollenCatcherRegion}`;

export enum PollenCatcherModule {
  Alcobendas,
  Coslada,
  Getafe,
  LasRozas,
  BarrioSalamanca,
  CiudadUniversitaria,
}

interface PollenCatcherMetaEntry {
  region: PollenCatcherRegionType;
  index: number;
  modulo: number;
}

const CatcherMetaRegistry: PollenCatcherMetaEntry[] = [
  {
    region: 'alco',
    index: 15,
    modulo: 1,
  },
  {
    region: 'cosl',
    index: 16,
    modulo: 2,
  },
  {
    region: 'geta',
    index: 17,
    modulo: 3,
  },
  {
    region: 'roza',
    index: 18,
    modulo: 4,
  },
  {
    region: 'sala',
    index: 19,
    modulo: 5,
  },
  {
    region: 'ciuu',
    index: 20,
    modulo: 6,
  },
];

export interface PollenCollection {
  entries: PollenCatcherEntry[];
}

interface PollenCatcherEntry {
  date: string;
  catcher: PollenCatcherRegionType;
  value: number;
}

@Injectable()
export class PollenCollector {
  private readonly baseUrl =
    'https://www.comunidad.madrid/sites/default/files/doc/sanidad/pole/dia/$.pdf';
  private readonly tmpPath = './tmp-collector';
  private pollenCollection: PollenCollection;

  constructor(private readonly http: HttpService) {}

  async collect() {
    this.pollenCollection = { entries: [] };
    rmSync(this.tmpPath, { recursive: true, force: true });
    mkdirSync(this.tmpPath);
    this.collectPollenType('cupr');
    // for (const pollenType in PollenCategory) {
    //   const type = PollenCategory[pollenType] as string;
    //   this.collectPollenType(type);
    // }
    return of({});
  }

  private async collectPollenType(type: PollenCategoryType) {
    const pdfResponse = await this.http.axiosRef({
      url: this.baseUrl.replace('$', type),
      method: 'GET',
      responseType: 'stream',
    });

    const writer = createWriteStream(`./${this.tmpPath}/${type}.pdf`);
    pdfResponse.data.pipe(writer);

    writer.on('finish', async () => {});
  }
}
