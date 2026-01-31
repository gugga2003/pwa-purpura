/**
 * Script de seed para poblar la base de datos inicial
 * Uso: npx prisma db seed
 */

import prisma from '../src/lib/prisma';

async function main() {
  console.log('[v0] Iniciando seed de base de datos...');
  
  try {
    // Crear usuarios de ejemplo
    const adminUser = await prisma.user.upsert({
      where: { email: 'admin@lapurpura.com' },
      update: {},
      create: {
        email: 'admin@lapurpura.com',
        name: 'Administrador',
        role: 'ADMIN',
        territory: 'Central',
      },
    });
    
    const regularUser = await prisma.user.upsert({
      where: { email: 'usuario@lapurpura.com' },
      update: {},
      create: {
        email: 'usuario@lapurpura.com',
        name: 'Usuario Regular',
        role: 'USER',
        territory: 'Zona Norte',
      },
    });
    
    console.log('[v0] ✓ Usuarios creados:');
    console.log(`  - Admin: ${adminUser.name} (${adminUser.email})`);
    console.log(`  - User: ${regularUser.name} (${regularUser.email})`);
    
    // Crear tareas de ejemplo
    const task1 = await prisma.task.create({
      data: {
        title: 'Revisar reportes',
        description: 'Revisar los reportes semanales',
        status: 'PENDING',
        priority: 'HIGH',
        category: 'Reportes',
        territory: 'Central',
        dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        assigneeId: regularUser.id,
      },
    });
    
    console.log('[v0] ✓ Tareas creadas:');
    console.log(`  - ${task1.title} (Asignada a ${regularUser.name})`);
    
    // Crear alertas de ejemplo
    const alert1 = await prisma.alert.create({
      data: {
        title: 'Bienvenida',
        message: 'Bienvenido a La Púrpura',
        type: 'INFO',
        userId: regularUser.id,
      },
    });
    
    console.log('[v0] ✓ Alertas creadas:');
    console.log(`  - ${alert1.title}`);
    
    console.log('[v0] ✓ Seed completado exitosamente');
  } catch (error) {
    console.error('[v0] Error durante el seed:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

main();
