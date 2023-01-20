export interface GetPollenCatchersDto {
  data: PollenCatcherDto[];
}

export interface PollenCatcherDto {
  descripcion: string;
  codigo: string;
  url_infoweb: string;
  direccion_localidad: string;
  zbs_geocodigo: number;
  y_epsg25830: number;
  direccion_ubicacion: string;
  url_calendario_polinico: string;
  nombre: string;
  x_epsg25830: number;
  direccion_codigo_postal: number;
  zbs_nombre: string;
  red_esp_aerobiologia: string;
  numero_tipos_de_polen_registrados: number;
  departamento_responsable: string;
  long_epsg4258: number;
  lat_epsg4258: number;
  altitud: number;
  fecha_inicio_mediciones: string;
  tipos_de_polen_registrados: string;
  altura_del_captador: number;
  contacto_email: string;
  tipo_titularidad: string;
  edificio: string;
}
