export interface PollenCatcher {
  id: string;
  name: string;
  description: string;
  ownership: PollenCatcherOwnsership;
  height: number;
  geo: {
    street: string;
    ZIP: number;
    zbs: {
      code: number;
      name: string;
    };
    building: string;
  };
  reportedPollenTypes: string[];
}

export type PollenCatcherOwnsership = 'public' | 'private';
