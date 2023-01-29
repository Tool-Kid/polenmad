export interface PollenCatcher {
  id: string;
  name: string;
  description: string;
  ownership: PollenCatcherOwnsership;
  height: number;
  geo: PollenCatcherGeo;
  reportedPollenTypes: string[];
}

export interface PollenCatcherGeo {
  street: string;
  ZIP: number;
  latitude: number;
  longitude: number;
  building: string;
};

export type PollenCatcherOwnsership = 'public' | 'private';
