const mongoose = require('mongoose');

const platoSchema = new mongoose.Schema({
  nombre_plato: { type: String, required: true },
  tipo: {
    type: String,
    enum: ['comida', 'bebida'],
    required: true
  },
  id_categoria: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Categoria',
    required: true
  },
  id_restaurante: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurante',
    required: true
  },
});

module.exports = mongoose.model('Plato', platoSchema);
