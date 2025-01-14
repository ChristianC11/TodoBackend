
import pkg from 'pg'; // Importación por defecto del módulo 'pg'

const { Pool } = pkg;

// Configuración de conexión
export const pool = new Pool({
    user: process.env.DB_USER || 'postgres',         // Usuario de la base de datos
    host: process.env.DB_HOST || 'localhost',         // Host de la base de datos
    database: process.env.DB_NAME || 'ToDoPenta', // Nombre de la base de datos
    password: process.env.DB_PASSWORD || '123456', // Contraseña del usuario
    port: process.env.DB_PORT || 5432,                // Puerto de conexión
    max: 10,                                          // Máximo número de conexiones
    idleTimeoutMillis: 30000,                         // Tiempo de inactividad antes de cerrar conexión (ms)
    connectionTimeoutMillis: 2000,                    // Tiempo para conectar (ms)
});


pool.on('error', (err, client) => {
    console.error('Error inesperado en la conexión de la base de datos', err);
    process.exit(-1);
});

export default pool;