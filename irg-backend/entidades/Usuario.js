// Estructura cliente
const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellidos: { type: String, required: true },
  telefono: { type: String, required: true },
  ciudad: { type: String, required: true },
}, {
  timestamps: true
});

module.exports = mongoose.model('Usuario', clienteSchema);
