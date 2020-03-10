const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Ingrese la direccion de una ciudad para saber el Clima',
        demand: true
    }
}).argv;

module.exports = {
    argv
}