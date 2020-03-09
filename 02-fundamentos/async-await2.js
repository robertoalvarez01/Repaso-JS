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

let getEmpleado = async(id) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        throw new Error(`No existe un empleado con el id ${id}`);
    } else {
        return empleadoDB;
    }

}

let getSalario = async(empleado) => {

    let salarioBuscado = salarios.find(salario => salario.id === empleado.id);

    if (!salarioBuscado) {
        throw new Error(`No hay salario para el empleado ${empleado.nombre}`);
    } else {
        return ({ nombre: empleado.nombre, salario: salarioBuscado.salario, id: empleado.id });
    }
}

let getInformacion = async(id) => {

    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);

    return resp;
}

getInformacion(1)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));