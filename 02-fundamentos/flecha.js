// function sumar(a, b) {
//     return a + b;
// }

// let sumar = (a, b) => a + b;

// console.log(sumar(10, 20));

// function saludar() {
//     return 'Hola Mundo';
// }

// let saludar = () => 'Hola mundo';

// function saludar(nombre) {
//     return `Hola ${nombre}`;
// }

// let saludar = (nombre) => `Hola ${nombre}`;

// console.log(saludar('Roberto'));

let deadpool = {
    nombre: 'Wade',
    apellido: 'Apellido',
    poder: 'Volar',
    getNombre() {
        return `${this.nombre} ${this.apellido} - Poder ${this.poder}`;
    }
}


console.log(deadpool.getNombre());