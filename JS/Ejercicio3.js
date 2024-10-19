// Lista para almacenar los alumnos
let alumnos = [];
let aprobados = [];
let reprobados = [];

function agregarAlumno() {
    const nombre = document.getElementById("nombre").value;
    const calificacion = parseFloat(document.getElementById("calificacion").value);

    if (nombre && !isNaN(calificacion)) {
        // Agregar el alumno a la lista
        alumnos.push({ nombre, calificacion });

        // Limpiar los campos de entrada
        document.getElementById("nombre").value = "";
        document.getElementById("calificacion").value = "";

        alert("Alumno agregado correctamente.");
    } else {
        alert("Por favor, ingresa un nombre y una calificación válida.");
    }
}

function clasificarAlumnos() {
    // Limpiar listas de aprobados y reprobados
    aprobados = [];
    reprobados = [];

    // Clasificar alumnos según su calificación
    alumnos.forEach(alumno => {
        if (alumno.calificacion >= 80) {
            aprobados.push(alumno);
        } else {
            reprobados.push(alumno);
        }
    });
}

function mostrarResultados() {
    clasificarAlumnos();

    // Mostrar aprobados
    const listaAprobados = document.getElementById("listaAprobados");
    listaAprobados.innerHTML = ""; // Limpiar la lista antes de agregar elementos
    aprobados.forEach(alumno => {
        const li = document.createElement("li");
        li.textContent = `${alumno.nombre}: ${alumno.calificacion}`;
        listaAprobados.appendChild(li);
    });

    // Mostrar reprobados
    const listaReprobados = document.getElementById("listaReprobados");
    listaReprobados.innerHTML = ""; // Limpiar la lista antes de agregar elementos
    reprobados.forEach(alumno => {
        const li = document.createElement("li");
        li.textContent = `${alumno.nombre}: ${alumno.calificacion}`;
        listaReprobados.appendChild(li);
    });
}
