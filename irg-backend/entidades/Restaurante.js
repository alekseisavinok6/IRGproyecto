// servicios/Restaurante.js
const pool = require('../baseDatos/db');  // Usamos el pool directamente

async function crearRestaurante(clave_acceso) {
  const query = `
    INSERT INTO restaurantes (clave_acceso)
    VALUES ($1)
    RETURNING *;
  `;
  
  try {
    const resultado = await pool.query(query, [clave_acceso]);
    return resultado.rows[0];
  } catch (error) {
    throw new Error('Error al crear el restaurante: ' + error.message);
  }
}

async function obtenerRestaurantes() {
  const query = 'SELECT * FROM restaurantes';
  
  try {
    const resultado = await pool.query(query);
    return resultado.rows;
  } catch (error) {
    throw new Error('Error al obtener los restaurantes: ' + error.message);
  }
}

module.exports = {
  crearRestaurante,
  obtenerRestaurantes,
};
