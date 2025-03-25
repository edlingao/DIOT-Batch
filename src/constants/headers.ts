interface Field {
  id: string;
  description: string;
  options?: Option[];
}

export interface Option {
  value: string;
  text: string;
}

export const TipoTerceroOptions: Option[] = [
  { value: "04", text: "Nacional" },
  { value: "05", text: "Extranjero" },
  { value: "15", text: "Global" }
];

export const TipoDeOperacionOptions: Option[] = [
  { value: "02", text: "Enagenacion de Bienes" },
  { value: "03", text: "Prestacion de servicios profesionales" },
  { value: "06", text: "Uso o goce temporal de bienes" },
  { value: "85", text: "Otros" },
  { value: "87", text: "Operaciones Globales" },
]

export const EfectosFiscalesAlComprobanteOptions: Option[] = [
  { value: "01", text: "Si" },
  { value: "02", text: "No" }
]

const fields: Field[] = [
  { id: "01", description: "Tipo de tercero", options: TipoTerceroOptions },
  { id: "02", description: "Tipo de operación", options: TipoDeOperacionOptions },
  { id: "03", description: "RFC" },
  { id: "04", description: "ID Fiscal" },
  { id: "05", description: "Nombre del Extranjero" },
  { id: "06", description: "País de residencia" },
  { id: "07", description: "Jurisdicción Fiscal" },
  { id: "08", description: "Actividades pagadas RFN" },
  { id: "09", description: "Devoluciones, Descuentos y Bonificaciones RFN" },
  { id: "10", description: "Actividades pagadas RFS" },
  { id: "11", description: "Devoluciones, Descuentos y Bonificaciones RFS" },
  { id: "12", description: "Actividades pagadas Resto del país" },
  { id: "13", description: "Devoluciones, Descuentos y Bonificaciones Resto del país" },
  { id: "14", description: "Importaciones 16%" },
  { id: "15", description: "Devoluciones, Descuentos y Bonificaciones en Importaciones" },
  { id: "16", description: "Importaciones Intangibles 16%" },
  { id: "17", description: "Devoluciones, Descuentos y Bonificaciones en Importaciones Intangibles" },
  { id: "18", description: "IVA Acreditable Pagado Frontera Norte" },
  { id: "19", description: "Proporción de actividades pagadas Frontera Norte" },
  { id: "20", description: "IVA Acreditable Pagado Frontera Sur" },
  { id: "21", description: "Proporción de actividades pagadas Frontera Sur" },
  { id: "22", description: "IVA Acreditable Pagado Resto del País" },
  { id: "23", description: "Proporción de actividades pagadas Resto del País" },
  { id: "24", description: "IVA Acreditable Pagado Importación Tangibles" },
  { id: "25", description: "Proporción de actividades pagadas Importación Tangibles" },
  { id: "26", description: "IVA Acreditable Pagado Importación Intangibles" },
  { id: "27", description: "Proporción de actividades pagadas Importación Intangibles" },
  { id: "28", description: "IVA no acreditable - Proporción de actividades pagadas 16% RFN" },
  { id: "29", description: "IVA No Acreditable - Actividades que no cumplen requisitos fiscales RFN" },
  { id: "30", description: "IVA No Acreditable - Actividades Exentas RFN" },
  { id: "31", description: "IVA No Acreditable - Actividades No Objeto RFN" },
  { id: "32", description: "IVA no acreditable - Proporción de actividades pagadas 16% RFS" },
  { id: "33", description: "IVA No Acreditable - Actividades que no cumplen requisitos fiscales RFS" },
  { id: "34", description: "IVA No Acreditable - Actividades Exentas RFS" },
  { id: "35", description: "IVA No Acreditable - Actividades No Objeto RFS" },
  { id: "36", description: "IVA no acreditable - Proporción de actividades pagadas 16% Resto del país" },
  { id: "37", description: "IVA No Acreditable - Actividades que no cumplen requisitos fiscales Resto del país" },
  { id: "38", description: "IVA No Acreditable - Actividades Exentas Resto del país" },
  { id: "39", description: "IVA No Acreditable - Actividades No Objeto Resto del país" },
  { id: "40", description: "IVA no acreditable - Proporción de actividades pagadas 16% Importación Tangibles" },
  { id: "41", description: "IVA No Acreditable - Actividades que no cumplen requisitos fiscales Importación Tangibles" },
  { id: "42", description: "IVA No Acreditable - Actividades Exentas Importación Tangibles" },
  { id: "43", description: "IVA No Acreditable - Actividades No Objeto Importación Tangibles" },
  { id: "44", description: "IVA no acreditable - Proporción de actividades pagadas 16% Importación Intangibles" },
  { id: "45", description: "IVA No Acreditable - Actividades que no cumplen requisitos fiscales Importación Intangibles" },
  { id: "46", description: "IVA No Acreditable - Actividades Exentas Importación Intangibles" },
  { id: "47", description: "IVA No Acreditable - Actividades No Objeto Importación Intangibles" },
  { id: "48", description: "IVA Retenido POR el contribuyente" },
  { id: "49", description: "Valor de los actos o actividades en la importación exentos" },
  { id: "50", description: "Valor de actos o actividades exentos" },
  { id: "51", description: "Valor de actos o actividades 0%" },
  { id: "52", description: "Valor de actos o actividades no objeto en territorio nacional" },
  { id: "53", description: "Valor de actos o actividades no objeto sin establecimiento en territorio nacional" },
  { id: "54", description: "Efectos fiscales a los comprobantes de operaciones realizadas con el proveedor", options: EfectosFiscalesAlComprobanteOptions },
];

export default fields;
