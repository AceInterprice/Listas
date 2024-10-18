function generarNumeros() {
    const cantidadNumeros = 10; // Total de números a generar
    const limiteInferior = 5;
    const limiteSuperior = 100;
    const numerosAleatorios = [];
    const pares = [];
    const impares = [];

    // Generar números aleatorios
    while (numerosAleatorios.length < cantidadNumeros) {
        const numero = Math.floor(Math.random() * (limiteSuperior - limiteInferior + 1)) + limiteInferior;
        numerosAleatorios.push(numero);
        if (numero % 2 === 0) {
            pares.push(numero);
        } else {
            impares.push(numero);
        }
    }

    // Asegurarse de que la cantidad de pares e impares sea la misma
    while (pares.length > cantidadNumeros / 2) {
        pares.pop(); // Eliminar el último par si hay exceso
    }
    while (impares.length > cantidadNumeros / 2) {
        impares.pop(); // Eliminar el último impar si hay exceso
    }

    // Combinar pares e impares en la lista de números
    const numerosFinales = [...pares, ...impares];

    // Mostrar resultados
    document.getElementById("pares").innerText = pares.join(", ");
    document.getElementById("impares").innerText = impares.join(", ");
}
