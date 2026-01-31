# Configuración de Neon para PWA Púrpura

Este proyecto está configurado para usar **Neon** como base de datos PostgreSQL serverless con **Prisma** como ORM.

## Pasos para Configurar Neon

### 1. Crear una Cuenta en Neon
- Ve a [https://console.neon.tech](https://console.neon.tech)
- Crea una nueva cuenta o inicia sesión
- Crea un nuevo proyecto

### 2. Obtener la Cadena de Conexión
1. En la consola de Neon, ve a **Connection String**
2. Copia la cadena de conexión (DATABASE_URL)
3. Elige el protocolo **postgresql** (no pgbouncer)

### 3. Configurar las Variables de Entorno
1. Copia el archivo `.env.example` a `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
2. Pega tu `DATABASE_URL` en el archivo `.env.local`:
   ```
   DATABASE_URL="postgresql://user:password@region.neon.tech/dbname"
   ```

### 4. Instalar Dependencias
```bash
npm install
```

### 5. Crear la Base de Datos
Ejecuta las migraciones de Prisma:
```bash
npx prisma migrate dev --name init
```

Esta acción:
- Ejecutará las migraciones de Prisma
- Actualizará el cliente Prisma
- Creará todas las tablas en Neon

### 6. Verificar la Conexión
```bash
npx prisma db push
```

## Estructura del Proyecto

- **Prisma Schema**: `/prisma/schema.prisma`
  - Define los modelos de datos
  - Mapea con la base de datos Neon

- **Cliente Prisma**: `/src/lib/prisma.ts`
  - Maneja la conexión con Neon
  - Proporciona acceso a Prisma en toda la app

- **Rutas API**: `/src/app/api/`
  - Endpoints que interactúan con Neon vía Prisma

## Modelos Disponibles

- **User** - Usuarios del sistema
- **Task** - Tareas/Actividades
- **Incident** - Incidentes reportados
- **Alert** - Alertas del sistema
- **Project** - Proyectos
- **Draft** - Borradores de datos

## Desarrollo Local

Para desarrollar localmente con Neon:

```bash
npm run dev
```

El servidor estará disponible en `http://localhost:3000`

## Problemas Comunes

### Error: "Cannot find module 'next/dist/compiled'"
**Solución**: Ejecuta `npm install` nuevamente

### Error: "Cannot find module '@swc/helpers'"
**Solución**: Ya está incluido en `package.json`. Ejecuta `npm install`

### Error de conexión a Neon
- Verifica que `DATABASE_URL` está correctamente configurada en `.env.local`
- Verifica que tienes acceso a Neon desde tu IP
- Verifica que el proyecto en Neon está activo

## Despliegue a Vercel

1. Conecta tu repositorio GitHub a Vercel
2. Agrega la variable de entorno `DATABASE_URL` en **Settings > Environment Variables**
3. Deploya: Vercel construirá automáticamente el proyecto
4. Las migraciones se ejecutarán automáticamente post-despliegue (si las configuraste)

## Referencia de Prisma

- [Documentación de Prisma](https://www.prisma.io/docs/)
- [Guía de Neon con Prisma](https://neon.tech/docs/guides/prisma)
