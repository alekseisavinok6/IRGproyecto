// servicios/usuarioService.js

const Usuario = require('../entidades/Usuario');

// Registrar un nuevo usuario
async function registrarUsuario(data) {
  // Validación de los datos
  if (!data.nombre || !data.apellidos || !data.telefono || !data.ciudad) {
    throw new Error('Todos los campos son requeridos: nombre, apellidos, telefono y ciudad');
  }

  // Crear un nuevo usuario con los datos proporcionados
  const nuevoUsuario = new Usuario({
    nombre: data.nombre,
    apellidos: data.apellidos,
    telefono: data.telefono,
    ciudad: data.ciudad,
  });

  try {
    
    return await nuevoUsuario.save();
  } catch (error) {
    
    throw new Error('Error al guardar el usuario: ' + error.message);
  }
}


async function obtenerUsuarios() {
  try {

    return await Usuario.find();
  } catch (error) {
    
    throw new Error('Error al obtener usuarios: ' + error.message);
  }
}

module.exports = {
  registrarUsuario,
  obtenerUsuarios,
};
