let deadpool = {
    nombre: 'Wade',
    apellido: 'Apellido',
    poder: 'Volar',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - Poder ${this.poder}`;
    }
}

// console.log(deadpool.getNombre());

let { nombre: primerNombre, apellido, poder } = deadpool;

console.log(primerNombre, apellido, poder);