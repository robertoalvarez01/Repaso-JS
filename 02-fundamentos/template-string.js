let nombre = 'Roberto';
let real = 'Nombre Real';

// console.log(`${ nombre } ${ real }`);

function getNombre() {
    return `${nombre} ${real}`;
}

console.log(`El nombre es: ${getNombre()}`);