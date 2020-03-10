let descripcion = {
    alias: 'd',
    demand: true,
    desc: "Descripcion de una tarea por hacer"
};

let completado = {
    alias: 'c',
    default: true,
    desc: 'Se activa cuando la tarea esta realizada'
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Elimina un elemento de la lista de cosas por hacer', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}