// let getNombre = async() => {

//     throw new Error('No existe un usuario');

//     return 'Roberto';
// };

let getNombre = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Roberto');
        }, 3000);
    });
};

let saludo = async() => {

    let nombre = await getNombre();


    return `Hola ${nombre}`;

}

saludo()
    .then(mensaje => console.log(mensaje));