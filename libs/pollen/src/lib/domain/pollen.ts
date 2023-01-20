export interface PollenEntry {
  catcher: string;
  readDate: Date;
  pollenType: string;
  pollenGrains: {
    value: number;
    units: 'CUBIC_METER';
  };
}
