# ⚡ Comandos Rápidos - PWA Púrpura

Referencia rápida de los comandos más usados.

---

## 🚀 Primeras Veces (Setup Inicial)

```bash
# 1. Limpiar e instalar
rm -rf node_modules package-lock.json .next
npm install

# 2. Crear base de datos (después de configurar .env.local)
npx prisma db push

# 3. Agregar datos de ejemplo (opcional)
npm run db:seed

# 4. Verificar conexión
npm run db:verify

# 5. Iniciar desarrollo
npm run dev
```

---

## 💻 Desarrollo Diario

```bash
# Iniciar servidor
npm run dev

# Build para producción
npm run build

# Iniciar servidor de producción
npm start

# Linting
npm run lint
```

---

## 🗄️ Base de Datos

```bash
# Sincronizar schema actual con BD
npm run db:push

# Crear migración nueva
npm run db:migrate

# Llenar datos de ejemplo
npm run db:seed

# Verificar conexión a Neon
npm run db:verify

# Explorador visual (Prisma Studio)
npx prisma studio

# Reset completo de BD (⚠️ borra todo)
npx prisma migrate reset
```

---

## 🔧 Mantenimiento

```bash
# Limpiar caché de Next.js
rm -rf .next

# Regenerar cliente Prisma
npx prisma generate

# Verificar tipos TypeScript
npx tsc --noEmit

# Ver logs de Prisma (debug)
DEBUG=prisma* npm run dev
```

---

## 📊 Información

```bash
# Ver tipos del schema
npx prisma introspect

# Validar schema
npx prisma validate

# Ver status de migraciones
npx prisma migrate status
```

---

## 🚨 Emergencias

```bash
# Si hay error de módulos
npm install

# Si webpack cache falla
rm -rf .next node_modules
npm install
npm run dev

# Si la BD está corrupta
npx prisma migrate reset  # ⚠️ BORRA TODO

# Si Prisma no funciona
npm install @prisma/client@latest
npx prisma generate
```

---

## 📝 Configuración Rápida

```bash
# Crear .env.local si falta
cp .env.example .env.local

# Abrir editor de variables
nano .env.local  # o vim, code, etc.

# Listar todas las migraciones
npx prisma migrate status
```

---

## 🎯 Workflows Completos

### Setup Inicial (Primera vez)
```bash
rm -rf node_modules package-lock.json .next
npm install
# Editar .env.local con tu DATABASE_URL
npx prisma db push
npm run db:seed
npm run db:verify
npm run dev
```

### Agregar Nueva Tabla
```bash
# 1. Editar prisma/schema.prisma
# 2. Crear migración
npx prisma migrate dev --name nombre_tabla

# 3. Usar en código
# 4. Verificar
npx prisma studio
```

### Hacer Deploy
```bash
git add .
git commit -m "cambios"
git push  # Vercel hace deploy automático
```

### Depuración
```bash
# Ver queries SQL
DEBUG=prisma* npm run dev

# Ver errores detallados
npm run db:verify

# Explorar datos
npx prisma studio
```

---

## 💡 Atajos Útiles

```bash
# Ver ayuda de prisma
npx prisma --help

# Ver versión
npm list @prisma/client
npm list prisma

# Limpiar todo e instalar
npm ci

# Audit de seguridad
npm audit

# Actualizar dependencias
npm update
```

---

## 📖 Documentos de Referencia

| Comando | Ver también |
|---------|------------|
| `npm install` | [QUICK_START.md](./QUICK_START.md) - Paso 1 |
| `npx prisma db push` | [NEON_SETUP.md](./NEON_SETUP.md) - Paso 5 |
| `npm run dev` | [QUICK_START.md](./QUICK_START.md) - Paso 6 |
| Prisma queries | [PRISMA_GUIDE.md](./PRISMA_GUIDE.md) |
| Database schema | [PRISMA_GUIDE.md](./PRISMA_GUIDE.md) - Modelos |

---

## ⏰ Tiempos Aproximados

| Comando | Tiempo |
|---------|--------|
| `npm install` | 2-3 min |
| `npx prisma db push` | 1-2 min |
| `npm run db:seed` | 30 seg |
| `npm run db:verify` | 30 seg |
| `npm run dev` (primera vez) | 1-2 min |
| `npm run build` | 1-3 min |
| `npx prisma migrate dev` | 1-2 min |

---

## 🆘 Mensajes de Error Comunes

### "Module not found: '@swc/helpers'"
```bash
npm install
```

### "Error: Can't reach database server"
- Verifica DATABASE_URL en `.env.local`
- Verifica conexión a internet
- Verifica que proyecto en Neon está activo

### "relation 'User' does not exist"
```bash
npx prisma db push
```

### "TypeError: Cannot find module 'ts-node'"
```bash
npm install ts-node --save-dev
```

### Webpack cache error
```bash
rm -rf .next node_modules
npm install
npm run dev
```

---

## 🔒 Seguridad

**NUNCA hacer commit de:**
```bash
.env.local          # Nunca! Contiene credenciales
node_modules/       # Nunca! Se reinstala con npm install
.next/              # Nunca! Se genera con npm run build
```

**SIEMPRE hacer commit de:**
```bash
.env.example        # Sí, como referencia
package.json        # Sí, versiones de dependencias
prisma/schema.prisma # Sí, estructura de BD
```

---

## 📱 Pro Tips

1. **Hot Reload**: El cambios en `.tsx` se actualizan automáticamente en el navegador
2. **Prisma Studio**: Abre `http://localhost:5555` para explorar BD visualmente
3. **Debug Mode**: `DEBUG=prisma* npm run dev` muestra todas las queries SQL
4. **TypeScript**: `npx tsc --noEmit` valida tipos sin compilar
5. **Git Hook**: Instala `husky` para ejecutar linting antes de commits

---

## 🚀 Productividad

```bash
# Terminal dividida (recomendado)
# Terminal 1: npm run dev
# Terminal 2: npx prisma studio

# O en una sola terminal con &
npm run dev &
npx prisma studio
```

---

**Más detalles**: Ver [QUICK_START.md](./QUICK_START.md) o [PRISMA_GUIDE.md](./PRISMA_GUIDE.md)
