/**
 * Script para verificar la conexión a Neon
 * Uso: npx ts-node scripts/verify-connection.ts
 */

import prisma from '../src/lib/prisma';

async function verifyConnection() {
  try {
    console.log('[v0] Verificando conexión a Neon...');
    
    // Intenta ejecutar una query simple
    const result = await prisma.$queryRaw`SELECT NOW() as timestamp`;
    console.log('[v0] ✓ Conexión exitosa a Neon');
    console.log('[v0] Timestamp del servidor:', result);
    
    // Verifica los usuarios
    const userCount = await prisma.user.count();
    console.log(`[v0] Total de usuarios en la base de datos: ${userCount}`);
    
    console.log('[v0] ✓ Base de datos verificada correctamente');
  } catch (error) {
    console.error('[v0] ✗ Error al conectar a Neon:');
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

verifyConnection();
