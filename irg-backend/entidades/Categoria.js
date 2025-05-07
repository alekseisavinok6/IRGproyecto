// servicios/Categoria.js
const pool = require('../baseDatos/db');

async function crearCategoria(nombre_categoria) {
  const query = 'INSERT INTO categorias (nombre_categoria) VALUES ($1) RETURNING *';
  const values = [nombre_categoria];

  const resultado = await pool.query(query, values);
  return resultado.rows[0];
}

async function obtenerCategorias() {
  const query = 'SELECT * FROM categorias';

  const resultado = await pool.query(query);
  return resultado.rows;
}

module.exports = {
  crearCategoria,
  obtenerCategorias,
};
