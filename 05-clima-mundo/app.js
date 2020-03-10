const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

// lugar.getLatLng(argv.direccion)
//     .then((mensaje) => {
//         console.log(mensaje);
//     })

// clima.getClima(-34.610001, -58.369999)
//     .then(temp => console.log(temp))
//     .catch(err => console.log(err));

const getInfo = async(direccion) => {

    try {
        coords = await lugar.getLatLng(direccion);
        temp = await clima.getClima(coords.lat, coords.lng);
        return `La temperatura en ${coords.lugar} es de ${temp}`;
    } catch (e) {
        return `No se pudo determinar la temperatura de ${direccion}`
    }

}

getInfo(argv.direccion)
    .then(resp => console.log(resp))