export interface PollenCollectDto {
  data: PollenEntryDto[];
}

export interface PollenEntryDto {
  captador: string;
  fecha_lectura: string;
  tipo_polinico: string;
  granos_de_polen_x_metro_cubico: string;
}
