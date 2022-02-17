export const POLLEN_PROCESSOR_COMPLETED__EVENT = 'pollen_processsor.completed';
export class PollenCollected {
  constructor(public readonly data: any) {}
}

export function pollenCollectedEvent(data: any) {
  return {
    type: POLLEN_PROCESSOR_COMPLETED__EVENT,
    data: new PollenCollected(data),
  };
}
