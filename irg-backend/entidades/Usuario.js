// servicios/Usuario.js
const pool = require('../baseDatos/db');

async function registrarUsuario({ nombre, apellidos, telefono, ciudad }) {
  const query = `
    INSERT INTO usuarios (nombre, apellidos, telefono, ciudad)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `;
  const values = [nombre, apellidos, telefono, ciudad];
  const resultado = await pool.query(query, values);
  return resultado.rows[0];
}

async function obtenerUsuarios() {
  const query = 'SELECT * FROM usuarios';
  const resultado = await pool.query(query);
  return resultado.rows;
}

module.exports = {
  registrarUsuario,
  obtenerUsuarios,
};
