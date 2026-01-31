# Guía Rápida - PWA Púrpura con Neon

## ✅ Checklist de Configuración

### Paso 1: Limpiar e Instalar Dependencias
```bash
rm -rf node_modules package-lock.json .next
npm install
```
**Tiempo estimado**: 2-3 minutos

---

### Paso 2: Configurar Neon (Base de Datos)

#### 2.1 Crear Proyecto en Neon
1. Ve a **[console.neon.tech](https://console.neon.tech)**
2. **Registrarse o Iniciar sesión**
3. Haz clic en **"New Project"**
4. Elige tu región más cercana
5. Haz clic en **"Create Project"**

#### 2.2 Obtener Connection String
1. En la consola de Neon, ve a **"Connection String"**
2. Asegúrate de que **"Driver"** esté en **"psycopg"** o **"postgresql"**
3. Copia la cadena completa (debería verse así):
   ```
   postgresql://user:password@region.neon.tech/dbname
   ```

#### 2.3 Configurar Variable de Entorno
1. Abre `.env.local` en tu editor
2. Reemplaza el `DATABASE_URL` vacío con el que copiaste:
   ```env
   DATABASE_URL="postgresql://user:password@region.neon.tech/dbname"
   ```
3. **Guarda el archivo**

**Archivos relacionados**:
- ✅ `.env.local` - Variables de entorno (local)
- ✅ `.env.example` - Referencia de variables (sin valores)

---

### Paso 3: Crear Estructura de Base de Datos

```bash
# Opción A: Push directo del schema (recomendado para primera vez)
npx prisma db push

# Opción B: Usar migraciones
npx prisma migrate dev --name init
```

**Qué hace**:
- ✅ Crea todas las tablas en Neon
- ✅ Configura relaciones entre tablas
- ✅ Genera cliente Prisma actualizado

---

### Paso 4: Llenar Base de Datos con Datos de Ejemplo (Opcional)

```bash
npm run db:seed
```

**Qué hace**:
- ✅ Crea usuario admin (`admin@lapurpura.com`)
- ✅ Crea usuario regular (`usuario@lapurpura.com`)
- ✅ Agrega tareas y alertas de ejemplo

**Nota**: El seed solo agrega datos si no existen

---

### Paso 5: Verificar Conexión

```bash
npm run db:verify
```

**Resultado esperado**:
```
[v0] Verificando conexión a Neon...
[v0] ✓ Conexión exitosa a Neon
[v0] Timestamp del servidor: 2026-01-31T...
[v0] Total de usuarios en la base de datos: 2
[v0] ✓ Base de datos verificada correctamente
```

---

### Paso 6: Iniciar Servidor de Desarrollo

```bash
npm run dev
```

**Acceso**:
- URL: `http://localhost:3000`
- La aplicación debería cargar sin errores

---

## 📋 Resumen de Errores Corregidos

| Error | Causa | Estado |
|-------|-------|--------|
| `@swc/helpers` faltante | Dependencia no instalada | ✅ CORREGIDO |
| Prisma desactualizado | Versión 5.14.0 → 6.0.0 | ✅ ACTUALIZADO |
| Webpack cache errors | Incompatibilidad de versiones | ✅ RESUELTO |

---

## 🚀 Comandos Útiles

```bash
# Desarrollar
npm run dev

# Construir para producción
npm run build
npm start

# Base de datos
npm run db:push          # Sincronizar schema
npm run db:migrate       # Crear migración
npm run db:seed          # Llenar datos de ejemplo
npm run db:verify        # Verificar conexión
npx prisma studio       # Explorador visual de BD

# Linting
npm run lint

# Limpiar caché
rm -rf .next
```

---

## 🔒 Seguridad

### .env.local
- ❌ **NUNCA** hagas commit de `.env.local`
- ✅ Ya está en `.gitignore`
- ⚠️ Contiene credenciales sensibles

### Para Producción (Vercel)
1. Conecta tu repositorio a Vercel
2. En **Settings → Environment Variables**, agrega:
   ```
   DATABASE_URL: tu-neon-url-aqui
   ```
3. Vercel hace deploy automáticamente

---

## 🐛 Troubleshooting

### "Cannot find module '@swc/helpers'"
```bash
rm -rf node_modules
npm install
```

### "Error: P1000 Can't reach database server"
- ✅ Verifica `DATABASE_URL` en `.env.local`
- ✅ Asegúrate de que el proyecto en Neon está activo
- ✅ Verifica que tienes conexión a internet

### "Error: relation 'User' does not exist"
```bash
npx prisma db push
```

### No tengo datos en la base de datos
```bash
npm run db:seed
```

---

## 📚 Documentación Completa

- **[NEON_SETUP.md](./NEON_SETUP.md)** - Configuración detallada de Neon
- **[ERRORES_CORREGIDOS.md](./ERRORES_CORREGIDOS.md)** - Detalle técnico de correcciones
- **[Documentación Prisma](https://www.prisma.io/docs/)**
- **[Documentación Neon](https://neon.tech/docs/)**

---

## ✅ Validación Final

Una vez completados todos los pasos, deberías ver:

```
✅ npm install - Sin errores
✅ npx prisma db push - Tablas creadas
✅ npm run db:verify - Conexión exitosa
✅ npm run dev - Servidor escuchando
✅ http://localhost:3000 - Página cargando
```

---

**¡Listo para desarrollar!** 🚀
