// servicios/Plato.js
const pool = require('../baseDatos/db');

async function crearPlato({ nombre_plato, tipo, id_categoria, id_restaurante }) {
  const query = `
    INSERT INTO platos (nombre_plato, tipo, id_categoria, id_restaurante)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `;
  const values = [nombre_plato, tipo, id_categoria, id_restaurante];
  const resultado = await pool.query(query, values);
  return resultado.rows[0];
}

async function obtenerPlatos() {
  const query = 'SELECT * FROM platos';
  const resultado = await pool.query(query);
  return resultado.rows;
}

module.exports = {
  crearPlato,
  obtenerPlatos,
};
