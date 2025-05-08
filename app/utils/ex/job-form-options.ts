export interface Option {
  value: string;
  label: string;
}

export const educOptions: Option[] = [
  { value: "Primaria", label: "Primaria" },
  { value: "Secundaria", label: "Secundaria" },
  { value: "Preparatoria", label: "Preparatoria" },
  { value: "Licenciatura", label: "Licenciatura" },
  { value: "Maestría", label: "Maestría" },
  { value: "Doctorado", label: "Doctorado" },
];

export const expOptions: Option[] = [
  { value: "0-1 año", label: "0-1 año" },
  { value: "1-2 años", label: "1-2 años" },
  { value: "2-5 años", label: "2-5 años" },
  { value: "5+ años", label: "Más de 5 años" },
];

export const statusOptions: Option[] = [
  { value: "Abierta", label: "Abierta" },
  { value: "Cerrada", label: "Cerrada" },
  { value: "En proceso", label: "En proceso" },
];

export const ciudadOptions: Option[] = [
  { value: "CDMX", label: "CDMX" },
  { value: "Guadalajara", label: "Guadalajara" },
  { value: "Monterrey", label: "Monterrey" },
  { value: "Otra", label: "Otra" },
];

export const modalidadOptions: Option[] = [
  { value: "presencial", label: "Presencial" },
  { value: "hibrido", label: "Híbrido" },
  { value: "remoto", label: "Remoto" },
];

export const empleoOptions: Option[] = [
  { value: "Tiempo completo", label: "Tiempo completo" },
  { value: "Medio tiempo", label: "Medio tiempo" },
];

export const dispoOptions: Option[] = [
  { value: "Inmediata", label: "Inmediata" },
  { value: "1 semana", label: "1 semana" },
  { value: "15 días", label: "15 días" },
  { value: "1 mes", label: "1 mes" },
];

export const generoOptions: Option[] = [
  { value: "Femenino", label: "Femenino" },
  { value: "Masculino", label: "Masculino" },
  { value: "Indistinto", label: "Indistinto" },
];

export const estadoCivilOptions: Option[] = [
  { value: "Soltero(a)", label: "Soltero(a)" },
  { value: "Casado(a)", label: "Casado(a)" },
  { value: "Indistinto", label: "Indistinto" },
];

export const dependientesOptions: Option[] = [
  { value: "0", label: "0" },
  { value: "1-2", label: "1-2" },
  { value: "3-4", label: "3-4" },
  { value: "5+", label: "Más de 5" },
];

export const transporteOptions: Option[] = [
  { value: "Auto propio", label: "Auto propio" },
  { value: "Transporte público", label: "Transporte público" },
  { value: "Indistinto", label: "Indistinto" },
];

export const siNoOptions: Option[] = [
  { value: "Sí", label: "Sí" },
  { value: "No", label: "No" },
];
