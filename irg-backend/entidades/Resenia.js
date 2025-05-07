// servicios/Resenia.js
const pool = require('../baseDatos/db');  // Usamos el pool directamente

async function crearResenia(data) {
  const {
    id_usuario, id_plato,
    p1_satisfaccion, p2_satisfaccion, p3_satisfaccion, p4_satisfaccion, p5_satisfaccion,
    p1_texto, p2_texto, p3_texto, p4_texto, p5_texto,
  } = data;

  const total = p1_satisfaccion + p2_satisfaccion + p3_satisfaccion + p4_satisfaccion + p5_satisfaccion;
  const promedio = parseFloat((total / 5).toFixed(2));

  const query = `
    INSERT INTO resenias (
      id_usuario, id_plato,
      p1_satisfaccion, p2_satisfaccion, p3_satisfaccion, p4_satisfaccion, p5_satisfaccion,
      p1_texto, p2_texto, p3_texto, p4_texto, p5_texto,
      promedio_estrellas
    )
    VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)
    RETURNING *;
  `;

  const values = [
    id_usuario, id_plato,
    p1_satisfaccion, p2_satisfaccion, p3_satisfaccion, p4_satisfaccion, p5_satisfaccion,
    p1_texto, p2_texto, p3_texto, p4_texto, p5_texto,
    promedio
  ];

  try {
    const resultado = await pool.query(query, values);
    return resultado.rows[0];
  } catch (error) {
    throw new Error('Error al crear la reseña: ' + error.message);
  }
}

async function obtenerResenias() {
  const query = 'SELECT * FROM resenias';
  try {
    const resultado = await pool.query(query);
    return resultado.rows;
  } catch (error) {
    throw new Error('Error al obtener las reseñas: ' + error.message);
  }
}

module.exports = {
  crearResenia,
  obtenerResenias,
};
