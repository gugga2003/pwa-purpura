# Guía de Uso de Prisma - PWA Púrpura

## Introducción

Este proyecto usa **Prisma** como ORM para interactuar con la base de datos **Neon (PostgreSQL)**. Prisma proporciona un cliente TypeScript type-safe para hacer queries.

---

## 1. Estructura del Código

### Cliente Prisma
**Archivo**: `/src/lib/prisma.ts`

```typescript
import { PrismaClient } from '@prisma/client';

const prismaClientSingleton = () => {
    return new PrismaClient();
};

const prisma = globalForPrisma.prisma ?? prismaClientSingleton();
export default prisma;
```

**Patrón**: Singleton para evitar múltiples conexiones

---

## 2. Modelos Disponibles

### User (Usuarios)
```typescript
model User {
  id        String   @id @default(uuid())
  name      String
  email     String   @unique
  role      Role     @default(USER)      // USER | ADMIN
  territory String?
  avatar    String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  tasks     Task[]
  incidents Incident[]
  alerts    Alert[]
}
```

### Task (Tareas)
```typescript
model Task {
  id            String     @id @default(uuid())
  title         String
  description   String?
  status        TaskStatus @default(PENDING)  // PENDING | IN_PROGRESS | DONE
  priority      Priority   @default(MEDIUM)   // LOW | MEDIUM | HIGH | CRITICAL
  category      String?
  territory     String?
  dueDate       DateTime?
  subtasksDone  Int        @default(0)
  subtasksTotal Int        @default(0)
  
  assignee   User? @relation(fields: [assigneeId], references: [id])
  assigneeId String?
}
```

### Incident (Incidentes)
```typescript
model Incident {
  id          String         @id @default(uuid())
  title       String
  description String?
  severity    Priority       @default(LOW)
  status      IncidentStatus @default(OPEN)  // OPEN | RESOLVED | IN_REVIEW
  location    String?
  territory   String?
  images      String[]
  
  reporter   User? @relation(fields: [reporterId], references: [id])
  reporterId String?
}
```

### Alert (Alertas)
```typescript
model Alert {
  id        String    @id @default(uuid())
  title     String
  message   String?
  type      AlertType @default(INFO)  // WARNING | INFO | ERROR | SYSTEM | SECURITY | NEWS
  isRead    Boolean   @default(false)
  createdAt DateTime  @default(now())
  
  user   User? @relation(fields: [userId], references: [id])
  userId String?
}
```

### Project (Proyectos)
```typescript
model Project {
  id           String        @id @default(uuid())
  title        String
  status       ProjectStatus @default(PLANNING)  // PLANNING | IN_PROGRESS | ON_HOLD | COMPLETED
  deadline     DateTime?
  completedKpis Int           @default(0)
  totalKpis    Int           @default(0)
  description  String?
}
```

### Draft (Borradores)
```typescript
model Draft {
  id           String   @id @default(uuid())
  title        String
  type         String
  progress     Int      @default(0)
  content      Json?
  lastModified DateTime @updatedAt
  
  user   User? @relation(fields: [userId], references: [id])
  userId String?
}
```

---

## 3. Ejemplos de Uso

### En Server Components (Pages/Layouts)
```typescript
// src/app/(app)/users/page.tsx
import prisma from '@/lib/prisma';

export default async function UsersPage() {
  // Obtener todos los usuarios
  const users = await prisma.user.findMany({
    include: {
      tasks: true,
      incidents: true,
      alerts: true,
    },
  });

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}
```

### En Route Handlers (API)
```typescript
// src/app/api/users/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  const data = await request.json();
  const user = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      role: data.role || 'USER',
    },
  });
  return NextResponse.json(user);
}
```

### En Server Actions
```typescript
// src/app/(app)/tasks/actions.ts
'use server';

import prisma from '@/lib/prisma';

export async function createTask(formData: FormData) {
  const title = formData.get('title') as string;
  const assigneeId = formData.get('assigneeId') as string;
  
  const task = await prisma.task.create({
    data: {
      title,
      assigneeId,
      status: 'PENDING',
      priority: 'MEDIUM',
    },
  });
  
  return task;
}

export async function updateTask(id: string, data: any) {
  return await prisma.task.update({
    where: { id },
    data,
  });
}

export async function deleteTask(id: string) {
  return await prisma.task.delete({
    where: { id },
  });
}
```

---

## 4. Operaciones Comunes

### Crear Registro
```typescript
const user = await prisma.user.create({
  data: {
    name: 'Juan Pérez',
    email: 'juan@example.com',
    role: 'USER',
    territory: 'Zona Norte',
  },
});
```

### Leer Registros
```typescript
// Uno por ID
const user = await prisma.user.findUnique({
  where: { id: 'user-123' },
});

// Uno que cumpla condición
const user = await prisma.user.findFirst({
  where: { email: 'juan@example.com' },
});

// Todos
const users = await prisma.user.findMany();

// Con filtros
const tasks = await prisma.task.findMany({
  where: {
    status: 'PENDING',
    priority: 'HIGH',
  },
});
```

### Actualizar Registro
```typescript
const updatedUser = await prisma.user.update({
  where: { id: 'user-123' },
  data: {
    name: 'Juan Pedro Pérez',
    territory: 'Zona Sur',
  },
});

// Actualizar o crear si no existe
const user = await prisma.user.upsert({
  where: { email: 'juan@example.com' },
  update: { name: 'Nuevo nombre' },
  create: {
    email: 'juan@example.com',
    name: 'Juan Pérez',
  },
});
```

### Eliminar Registro
```typescript
await prisma.task.delete({
  where: { id: 'task-123' },
});

// Eliminar múltiples
await prisma.task.deleteMany({
  where: {
    status: 'DONE',
    createdAt: {
      lt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // Hace más de 30 días
    },
  },
});
```

---

## 5. Relaciones

### Include (Incluir Datos Relacionados)
```typescript
// Obtener usuario con todas sus tareas
const user = await prisma.user.findUnique({
  where: { id: 'user-123' },
  include: {
    tasks: true,
    incidents: true,
    alerts: true,
  },
});

// Solo tareas PENDING
const user = await prisma.user.findUnique({
  where: { id: 'user-123' },
  include: {
    tasks: {
      where: { status: 'PENDING' },
      orderBy: { dueDate: 'asc' },
    },
  },
});
```

### Select (Seleccionar Campos Específicos)
```typescript
const tasks = await prisma.task.findMany({
  select: {
    id: true,
    title: true,
    priority: true,
    assignee: {
      select: {
        name: true,
        email: true,
      },
    },
  },
});
```

---

## 6. Operaciones Avanzadas

### Ordenar Resultados
```typescript
const tasks = await prisma.task.findMany({
  orderBy: [
    { priority: 'desc' },    // Alto a bajo
    { dueDate: 'asc' },      // Próximas primero
  ],
});
```

### Paginación
```typescript
const page = 1;
const pageSize = 10;

const tasks = await prisma.task.findMany({
  skip: (page - 1) * pageSize,
  take: pageSize,
  orderBy: { createdAt: 'desc' },
});

const total = await prisma.task.count();
```

### Agregaciones
```typescript
// Contar
const taskCount = await prisma.task.count({
  where: { status: 'PENDING' },
});

// Estadísticas
const stats = await prisma.task.aggregate({
  _count: true,
  _avg: { subtasksDone: true },
});
```

### Transacciones
```typescript
const [newUser, newTask] = await prisma.$transaction([
  prisma.user.create({
    data: { name: 'Juan', email: 'juan@example.com' },
  }),
  prisma.task.create({
    data: { title: 'Nueva tarea', assigneeId: userId },
  }),
]);
```

---

## 7. Raw Queries (SQL Directo)

Cuando Prisma no es suficiente, puedes usar SQL directo:

```typescript
// Parametrizado (seguro contra SQL injection)
const users = await prisma.$queryRaw`
  SELECT * FROM "User" WHERE territory = ${territory}
`;

// Raw SQL
const result = await prisma.$executeRaw`
  UPDATE "Task" SET status = 'DONE' WHERE "dueDate" < NOW()
`;
```

---

## 8. Manejo de Errores

```typescript
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

try {
  const user = await prisma.user.create({
    data: { name: 'Juan', email: 'juan@example.com' },
  });
} catch (error) {
  if (error instanceof PrismaClientKnownRequestError) {
    if (error.code === 'P2002') {
      // Violación de unique constraint (email duplicado)
      console.error('Email ya existe');
    } else if (error.code === 'P2025') {
      // Registro no encontrado
      console.error('Usuario no encontrado');
    }
  }
  throw error;
}
```

---

## 9. Actualizar Datos en Migraciones

Si necesitas cambiar el schema:

```bash
# Editar schema.prisma
# Luego ejecutar:
npx prisma migrate dev --name nombre-cambio
```

El nombre describe los cambios (ej: `add-user-phone`)

---

## 10. Información Útil

- **Prisma Studio** (explorador visual):
  ```bash
  npx prisma studio
  ```

- **Ver queries ejecutadas** (modo debug):
  ```bash
  DEBUG=prisma* npm run dev
  ```

- **Reset base de datos** (borrar todo):
  ```bash
  npx prisma migrate reset
  ```

---

## Checklist

- ✅ Prisma cliente configurado
- ✅ Schema en `/prisma/schema.prisma`
- ✅ Base de datos creada con `npx prisma db push`
- ✅ Listo para usar en la app

---

**Para más información**: [Documentación oficial de Prisma](https://www.prisma.io/docs/)
