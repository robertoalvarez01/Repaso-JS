const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')
const colors = require('colors');

let comando = argv._[0]

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(err => console.log(err));
        break;

    default:
        console.log('El comando que ingresaste no se ha reconocido');
        break;

}
// let argv = process.argv;
// let base = argv[2].split('=')[1];