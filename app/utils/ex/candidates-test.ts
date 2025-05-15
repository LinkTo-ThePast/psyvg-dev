interface WorkExperienceApplicantModel {
  company_name?: string;
  job_title?: string;
  start_date?: string;
  end_date?: string;
  currently_working?: boolean;
}

interface ProfileModel {
  name?: string;
  last_grade?: "primaria" | "secundaria" | "preparatoria" | "Licenciatura";
  affinity?: number;
}

interface UserModel {
  id: string;
  email?: string;
  phone?: string;
  skills?: string;
  experience?: string;
  profile?: ProfileModel;
  work_experience?: WorkExperienceApplicantModel[];
}

const candidates: UserModel[] = [
  {
    id: "candidate001",
    email: "juan.mendoza@email.com",
    phone: "+52 55 1234 5678",
    skills:
      "Manejo de camiones de carga, logística básica, mantenimiento preventivo",
    experience: "5 años como chofer de ruta larga",
    profile: {
      name: "Juan Mendoza López",
      last_grade: "secundaria",
      affinity: 78,
    },
    work_experience: [
      {
        company_name: "Transportes ABC",
        job_title: "Chofer de tractocamión",
        start_date: "2018/03/15",
        end_date: "2022/08/20",
        currently_working: false,
      },
    ],
  },
  {
    id: "candidate002",
    email: "maria.sanchez@email.com",
    phone: "+52 55 2345 6789",
    skills:
      "Manejo de montacargas, control de inventario, seguridad industrial",
    experience: "3 años como operadora de almacén",
    profile: {
      name: "María Sánchez García",
      last_grade: "preparatoria",
      affinity: 85,
    },
    work_experience: [
      {
        company_name: "Almacenes La Esperanza",
        job_title: "Operadora de montacargas",
        start_date: "2020/06/10",
        end_date: "2023/01/15",
        currently_working: false,
      },
    ],
  },
  {
    id: "candidate003",
    email: "carlos.rodriguez@email.com",
    phone: "+52 55 3456 7890",
    skills:
      "Manejo de maquinaria pesada, lectura de planos, seguridad en construcción",
    experience: "6 años como operador de maquinaria",
    profile: {
      name: "Carlos Rodríguez Pérez",
      last_grade: "secundaria",
      affinity: 92,
    },
    work_experience: [
      {
        company_name: "Constructora VISE",
        job_title: "Operador de retroexcavadora",
        start_date: "2017/05/12",
        end_date: "2021/11/30",
        currently_working: false,
      },
    ],
  },
  {
    id: "candidate004",
    email: "luis.garcia@email.com",
    phone: "+52 55 4567 8901",
    skills:
      "Conocimiento de rutas urbanas, manejo defensivo, atención al cliente",
    experience: "4 años como chofer de transporte público",
    profile: {
      name: "Luis García Martínez",
      last_grade: "primaria",
      affinity: 65,
    },
    work_experience: [
      {
        company_name: "Metrobús CDMX",
        job_title: "Operador de autobús articulado",
        start_date: "2019/04/05",
        end_date: "2022/08/15",
        currently_working: false,
      },
    ],
  },
  {
    id: "candidate005",
    email: "ana.torres@email.com",
    phone: "+52 55 5678 9012",
    skills: "Manejo de autobuses escolares, primeros auxilios, trato con niños",
    experience: "3 años como chofer escolar",
    profile: {
      name: "Ana Torres Hernández",
      last_grade: "preparatoria",
      affinity: 88,
    },
    work_experience: [
      {
        company_name: "Colegio Oxford",
        job_title: "Chofer escolar",
        start_date: "2020/08/20",
        end_date: "2023/06/30",
        currently_working: false,
      },
    ],
  },
];

export default candidates;
