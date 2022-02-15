import { Injectable } from '@nestjs/common';
import { firstValueFrom, of } from 'rxjs';
import * as cheerio from 'cheerio';
import { PollenCollectorService } from './pollen-collector.service';
import { writeFileSync } from 'fs';

export enum PollenCategory {
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

export interface PollenCollection {
  entries: PollenCatcherEntry[];
}

interface PollenCatcherEntry {
  date: string;
  catcher: PollenCatcherRegion;
  pollen: PollenCategory;
  value: number;
}

export const PollenCategoryNamesMap = new Map<string, PollenCategory>([
  ['Artemisia', PollenCategory.Acer],
  ['Cupresáceas/Taxáceas', PollenCategory.CupresaceaeTaxaceae],
  ['Quenopodiáceas/Amarantáceas', PollenCategory.Acer],
  ['Fresno', PollenCategory.Fraxinus],
  ['Aligustre', PollenCategory.Acer],
  ['Olivo', PollenCategory.],
  ['Aliso', PollenCategory.Alnus],
  ['Plantago', PollenCategory.Acer],
  ['Plátano de paseo', PollenCategory.Platanus],
  ['Gramíneas', PollenCategory.Poaceae],
  ['Urticaceae (Ortigas)', PollenCategory.Acer],
])

@Injectable()
export class PollenDataProcessorService {
  private readonly baseUrl =
    'https://www.comunidad.madrid/sites/default/files/doc/sanidad/pole/dia/$.pdf';
  private readonly tmpPath = './tmp-collector';
  private pollenCollection: PollenCollection;
  foo = new Set();

  constructor(private readonly pollenCollector: PollenCollectorService) {}

  async collect() {
    this.pollenCollection = { entries: [] };
    const keys: string[] = Object.keys(PollenCatcherRegion);
    const values: PollenCatcherRegion[] = keys.map(
      (k) => PollenCatcherRegion[k] as PollenCatcherRegion
    );

    for (const catcher of values) {
      await this.collectPollenCatcherRegion(catcher);
    }
    await this.collectPollenCatcherRegion(
      PollenCatcherRegion.CiudadUniversitaria
    );
    console.log(this.foo);
    writeFileSync(`./report.json`, JSON.stringify(this.pollenCollection));
    writeFileSync(`./foo.json`, JSON.stringify(this.foo.keys()));
  }

  private async collectPollenCatcherRegion(catcher: PollenCatcherRegion) {
    const report = await firstValueFrom(
      this.pollenCollector.getPollenDataForCatcherRegion(catcher)
    );
    const html = cheerio.load(report.data);
    const date = html('body > div > div > div:nth-child(3) > label.valor')
      .text()
      .trim();

    const categories = Object.values(PollenCategory);
    let categoryIndex = 0;
    for (const i of [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]) {
      this.foo.add(
        html(
          `body > div > div > div:nth-child(${i}) > div:nth-child(1) > label`
        )
          .text()
          .trim()
      );
      this.pollenCollection.entries.push({
        date,
        catcher,
        pollen: categories[categoryIndex],
        value: +html(
          `body > div > div > div:nth-child(${i}) > div:nth-child(2) > label`
        )
          .text()
          .trim(),
      });
      categoryIndex++;
    }
  }
}
