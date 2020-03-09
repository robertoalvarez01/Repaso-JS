let empleados = [{
    id: 1,
    nombre: 'Roberto'
}, {
    id: 2,
    nombre: 'Fernando'
}, {
    id: 3,
    nombre: 'Franco'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];


let getEmpleado = (id, callback) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        callback(`No existe un empleado con el id ${id}`);
    } else {
        callback(null, empleadoDB);
    }
}

// let getSalario = (id, callback) => {

//     let empleadoBuscado = empleados.find(empleado => empleado.id === id);
//     let salarioBuscado = salarios.find(salario => salario.id === id);

//     if (!empleadoBuscado) {
//         callback(`El empleado con id ${id} no existe en la DB`);
//     } else {
//         if (!salarioBuscado) {
//             callback(`No hay salario para el empleado ${empleadoBuscado.nombre}`);
//         } else {
//             callback(null, { nombre: empleadoBuscado.nombre, salario: salarioBuscado.salario });
//         }
//     }
// }

let getSalario = (empleado, callback) => {

    let salarioBuscado = salarios.find(salario => salario.id === empleado.id);

    if (!salarioBuscado) {
        callback(`No hay salario para el empleado ${empleado.nombre}`);
    } else {
        callback(null, { nombre: empleado.nombre, salario: salarioBuscado.salario, id: empleado.id });
    }
}


getEmpleado(1, (err, empleado) => {

    if (err) {
        console.log(err);
    } else {
        getSalario(empleado, (err, res) => {
            if (err) {
                console.log(err);
            } else {
                console.log(res);
            }
        })
    }

});

// getSalario(4, (err, salario) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(salario);
//     }
// })