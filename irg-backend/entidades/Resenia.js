const mongoose = require('mongoose');

const reseniaSchema = new mongoose.Schema({
  id_usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  },
  id_plato: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Plato',
    required: true
  },

  // Satisfacción (1–5)
  p1_satisfaccion: { type: Number, min: 1, max: 5, required: true },
  p2_satisfaccion: { type: Number, min: 1, max: 5, required: true },
  p3_satisfaccion: { type: Number, min: 1, max: 5, required: true },
  p4_satisfaccion: { type: Number, min: 1, max: 5, required: true },
  p5_satisfaccion: { type: Number, min: 1, max: 5, required: true },

  // Comentarios
  p1_texto: { type: String, required: true },
  p2_texto: { type: String, required: true },
  p3_texto: { type: String, required: true },
  p4_texto: { type: String, required: true },
  p5_texto: { type: String, required: true },

  // Promedio calculado
  promedio_estrellas: { type: Number },
}, {
  timestamps: true
});

// Calcula promedio antes de guardar
reseniaSchema.pre('save', function (next) {
  const total =
    this.p1_satisfaccion +
    this.p2_satisfaccion +
    this.p3_satisfaccion +
    this.p4_satisfaccion +
    this.p5_satisfaccion;

  this.promedio_estrellas = parseFloat((total / 5).toFixed(2));
  next();
});

module.exports = mongoose.model('Resenia', reseniaSchema);
