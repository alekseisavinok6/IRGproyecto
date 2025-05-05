// Conectamos con base de datos

const mongoose = require('mongoose');

async function conectarDB() {
  try {
    const dbURI = process.env.MONGO_URI || 'mongodb://localhost:27017/registro_usuarios'; 
    await mongoose.connect(dbURI);
    console.log('Se conectó correctamente a MongoDB');
  } catch (error) {
    console.error('Error al conectar con MongoDB:', error);
    process.exit(1);  
  }
}

module.exports = conectarDB;
