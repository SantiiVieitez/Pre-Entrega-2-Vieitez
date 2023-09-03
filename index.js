class Alumno {
    constructor(nombre, notas) {
        this.nombre = nombre;
        this.notas = notas;
    }

    promedio() {
        if (this.notas.length === 0) {
            return 0;
        }

        const suma = this.notas.reduce((total, nota) => total + nota, 0);
        return suma / this.notas.length;
    }
}

let alumnos = [];

let opcion = 0;
do {
    opcion = prompt("1. Agregar Alumno\n2. Mostrar Alumnos\n3. Calcular Promedio\n4. Salir");
    switch (opcion) {
        case "1":
            let nombre = prompt("Ingrese nombre");
            let notas = prompt("Ingrese notas separadas por coma").split(",").map(Number);
            let alumno = new Alumno(nombre, notas);
            alumnos.push(alumno);
            break;
        case "2":
            console.log("Lista de Alumnos:");
            for (let i = 0; i < alumnos.length; i++) {
                console.log(`Nombre: ${alumnos[i].nombre}, Notas: ${alumnos[i].notas}`);
            }
            break;
        case "3":
            let suma = 0;
            let totalNotas = 0;
            for (let i = 0; i < alumnos.length; i++) {
                suma += alumnos[i].promedio();
                totalNotas++;
            }
            if (totalNotas > 0) {
                console.log(`Promedio: ${suma / totalNotas}`);
            } else {
                console.log("No hay notas registradas.");
            }
            break;
        case "4":
            break;
        default:
            console.log("Opción inválida");
            break;
    }

} while (opcion !== "4");


