//Iniciamos servidor 
//Conectamos con MongoDB y rutas
//Configuracion rutas

const express = require('express');
const conectarDB = require('./baseDatos/db');
const clienteRoutes = require('./routes/clienteRoutes');

const app = express();
app.use(express.json());

// Conectar a la base de datos
conectarDB();

// Rutas
app.use('/clientes', clienteRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en puerto ${PORT}`);
});
