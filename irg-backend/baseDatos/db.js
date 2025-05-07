// baseDatos/db.js
const { Pool } = require('pg');

const dbURI = process.env.PG_URI || 'postgresql://usuario:contraseña@localhost:5432/registro_usuarios';

// Crear pool global
const pool = new Pool({
  connectionString: dbURI,
});

// Función para obtener un cliente del pool
async function conectarDB() {
  try {
    const client = await pool.connect();
    return client;
  } catch (error) {
    console.error('Error al obtener cliente de PostgreSQL:', error.message);
    throw error;
  }
}

module.exports = conectarDB;
