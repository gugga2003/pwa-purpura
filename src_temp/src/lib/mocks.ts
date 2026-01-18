export type MockUser = {
  id: string;
  name: string;
  role: string;
  territory: string;
  email: string;
};

export type MockTask = {
  id: string;
  title: string;
  status: "pending" | "in_progress" | "done";
  priority: "low" | "medium" | "high";
  dueDate: string;
  category: string;
  territory: string;
  assignee: string;
  subtasksDone: number;
  subtasksTotal: number;
};

export type MockIncident = {
  id: string;
  title: string;
  status: "open" | "in_review" | "closed";
  priority: "low" | "medium" | "high" | "critical";
  territory: string;
  createdAt: string;
  description: string;
  category: string;
};

export type MockAlert = {
  id: string;
  title: string;
  message: string;
  type: "system" | "security" | "news";
  createdAt: string;
  read: boolean;
};

export type MockDraft = {
  id: string;
  title: string;
  content: string;
  updatedAt: string;
};

export type MockSurvey = {
  id: string;
  title: string;
  status: "draft" | "published" | "closed";
  questionsCount: number;
  responses: number;
  updatedAt: string;
};

export type MockOfflineItem = {
  id: string;
  type: "task" | "incident" | "draft" | "media";
  title: string;
  createdAt: string;
  status: "pending" | "syncing" | "synced";
};

export type MockNews = {
  id: string;
  title: string;
  summary: string;
  createdAt: string;
  author: string;
};

export type MockReport = {
  id: string;
  title: string;
  status: "resolved" | "pending" | "critical";
  territory: string;
  createdAt: string;
  author: string;
};

export type MockUserEntry = {
  id: string;
  name: string;
  email: string;
  role: string;
  territory: string;
};

export type MockInvite = {
  id: string;
  email: string;
  role: string;
  territory: string;
  sentAt: string;
};

export type MockKpis = {
  activeAlerts: number;
  pendingTasks: number;
  projects: number;
  coverage: number;
  incidents: number;
};

export const mockUser: MockUser = {
  id: "u-1001",
  name: "Ricardo Vega",
  role: "Administrador",
  territory: "Zona Norte",
  email: "ricardo@lapurpura.com",
};

export const mockTasks: MockTask[] = [
  {
    id: "task-001",
    title: "Relevamiento Barrio San Juan",
    status: "in_progress",
    priority: "high",
    dueDate: "2023-10-20",
    category: "Urbanizacion",
    territory: "Zona Norte",
    assignee: "Carlos G.",
    subtasksDone: 2,
    subtasksTotal: 5,
  },
  {
    id: "task-002",
    title: "Entrega de Insumos Medicos",
    status: "pending",
    priority: "high",
    dueDate: "2023-10-22",
    category: "Salud Territorial",
    territory: "Zona Central",
    assignee: "Ana P.",
    subtasksDone: 0,
    subtasksTotal: 3,
  },
  {
    id: "task-003",
    title: "Mantenimiento Plazas",
    status: "done",
    priority: "medium",
    dueDate: "2023-10-10",
    category: "Espacios Publicos",
    territory: "Zona Oeste",
    assignee: "Luis M.",
    subtasksDone: 5,
    subtasksTotal: 5,
  },
];

export const mockIncidents: MockIncident[] = [
  {
    id: "INC-2023-894",
    title: "Leak in main distribution valve",
    status: "open",
    priority: "critical",
    territory: "North Zone - Sector 4",
    createdAt: "2023-10-27T10:45:00Z",
    description:
      "Leak reported in main distribution valve. Several customers reporting low pressure in the surrounding blocks.",
    category: "Infraestructura",
  },
  {
    id: "INC-2023-891",
    title: "Street light malfunction",
    status: "in_review",
    priority: "medium",
    territory: "West Zone - Park Ave",
    createdAt: "2023-10-27T07:20:00Z",
    description:
      "Street light malfunction reported by patrol unit. Electrical box seems to have been tampered with.",
    category: "Servicios",
  },
  {
    id: "INC-2023-885",
    title: "Scheduled maintenance for transformer",
    status: "closed",
    priority: "low",
    territory: "South Zone - Industrial",
    createdAt: "2023-10-26T14:05:00Z",
    description:
      "Scheduled maintenance for transformer T-45. Standard quarterly checkup required.",
    category: "Mantenimiento",
  },
];

export const mockAlerts: MockAlert[] = [
  {
    id: "alert-001",
    title: "Inactividad Detectada",
    message: "Territorio Norte - Rama Logistica sin actividad hace 3h 12m.",
    type: "system",
    createdAt: "2023-10-12T12:00:00Z",
    read: false,
  },
  {
    id: "alert-002",
    title: "Actualizacion Pendiente",
    message: "5 referentes no actualizaron su perfil trimestral.",
    type: "security",
    createdAt: "2023-10-12T08:30:00Z",
    read: false,
  },
  {
    id: "alert-003",
    title: "Nuevo Comunicado",
    message: "Se publico un nuevo protocolo operativo.",
    type: "news",
    createdAt: "2023-10-11T18:00:00Z",
    read: true,
  },
];

export const mockDrafts: MockDraft[] = [
  {
    id: "draft-001",
    title: "Informe Territorial Octubre",
    content: "Borrador de informe con avances preliminares.",
    updatedAt: "2023-10-12T14:00:00Z",
  },
  {
    id: "draft-002",
    title: "Plan Operativo Q4",
    content: "Plan operativo para cierre de anio.",
    updatedAt: "2023-10-10T09:30:00Z",
  },
];

export const mockSurveys: MockSurvey[] = [
  {
    id: "survey-001",
    title: "Encuesta de Infraestructura",
    status: "published",
    questionsCount: 12,
    responses: 120,
    updatedAt: "2023-10-05T11:00:00Z",
  },
  {
    id: "survey-002",
    title: "Formulario Salud Territorial",
    status: "draft",
    questionsCount: 8,
    responses: 0,
    updatedAt: "2023-10-02T09:00:00Z",
  },
];

export const mockOfflineQueue: MockOfflineItem[] = [
  {
    id: "offline-001",
    type: "media",
    title: "Site Inspection Photos",
    createdAt: "2023-10-27T10:45:00Z",
    status: "pending",
  },
  {
    id: "offline-002",
    type: "task",
    title: "Maintenance Report",
    createdAt: "2023-10-27T10:30:00Z",
    status: "pending",
  },
];

export const mockNews: MockNews[] = [
  {
    id: "news-001",
    title: "Actualizacion de Protocolos de Seguridad",
    summary: "Nueva version del protocolo de seguridad territorial.",
    createdAt: "2023-10-24T12:00:00Z",
    author: "Admin Central",
  },
  {
    id: "news-002",
    title: "Capacitacion Operativa PyME",
    summary: "Se abre inscripcion para capacitaciones regionales.",
    createdAt: "2023-10-20T08:30:00Z",
    author: "Coordinacion",
  },
];

export const mockReports: MockReport[] = [
  {
    id: "REP-089",
    title: "Mantenimiento Preventivo",
    status: "resolved",
    territory: "Zona Norte - Equipo Alpha",
    createdAt: "2023-11-15T12:30:00Z",
    author: "Supervisor Central",
  },
  {
    id: "REP-088",
    title: "Falla Electrica Sector B",
    status: "critical",
    territory: "Centro Logistico",
    createdAt: "2023-11-14T08:10:00Z",
    author: "Equipo Tecnico",
  },
  {
    id: "REP-087",
    title: "Inspeccion Rutinaria",
    status: "pending",
    territory: "Sucursal Oeste",
    createdAt: "2023-11-13T16:45:00Z",
    author: "Operacion Regional",
  },
];

export const mockUsers: MockUserEntry[] = [
  {
    id: "user-001",
    name: "Juan Perez",
    email: "juan.perez@lapurpura.com",
    role: "Supervisor",
    territory: "Zona Sur",
  },
  {
    id: "user-002",
    name: "Ana Martinez",
    email: "ana.martinez@lapurpura.com",
    role: "Operador",
    territory: "Zona Norte",
  },
];

export const mockInvites: MockInvite[] = [
  {
    id: "invite-001",
    email: "maria.garcia@lapurpura.com",
    role: "Colaborador",
    territory: "Zona Centro",
    sentAt: "2023-10-12",
  },
];

export const mockKpis: MockKpis = {
  activeAlerts: 4,
  pendingTasks: 12,
  projects: 8,
  coverage: 68,
  incidents: 24,
};
