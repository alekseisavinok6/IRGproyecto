const mongoose = require('mongoose');

const restauranteSchema = new mongoose.Schema({
  clave_acceso: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('Restaurante', restauranteSchema);
