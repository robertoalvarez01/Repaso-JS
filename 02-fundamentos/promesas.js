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

let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {

        let empleadoDB = empleados.find(empleado => empleado.id === id);

        if (!empleadoDB) {
            reject(`No existe un empleado con el id ${id}`);
        } else {
            resolve(empleadoDB);
        }


    });
}

let getSalario = (empleado) => {

    return new Promise((resolve, reject) => {
        let salarioBuscado = salarios.find(salario => salario.id === empleado.id);

        if (!salarioBuscado) {
            reject(`No hay salario para el empleado ${empleado.nombre}`);
        } else {
            resolve({ nombre: empleado.nombre, salario: salarioBuscado.salario, id: empleado.id });
        }
    });
}



getEmpleado(4).then(empleado => {

        return getSalario(empleado);

    }).then((resp) => {

        console.log(resp);

    })
    .catch(err => {
        console.log(err);
    })