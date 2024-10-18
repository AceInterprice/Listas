let products = [];
let removedCount = 0; // Contador de productos retirados
let wordsByLetter = {};
let listCount = 1; // Contador para las listas

function getRandomPrice() {
    return (Math.random() * 100).toFixed(2); // Precio aleatorio entre 0 y 100
}

function getRandomQuantity() {
    return Math.floor(Math.random() * 20) + 1; // Cantidad aleatoria entre 1 y 20
}

function addProduct() {
    const productName = `Producto${products.length + 1}`;
    const quantity = getRandomQuantity();
    const price = getRandomPrice();
    
    products.push({ name: productName, quantity, price });
    displayProducts();
}

function removeProduct() {
    if (products.length > 0) {
        products.pop(); // Retira el último producto
        removedCount++; // Incrementar contador de productos retirados
        displayProducts();
    } else {
        alert("No hay productos para retirar.");
    }
}

function displayProducts() {
    const productList = document.getElementById("productList");
    productList.innerHTML = "<h3>Productos:</h3>";
    products.forEach(product => {
        productList.innerHTML += `<p>${product.name} - Cantidad: ${product.quantity} - Precio: $${product.price}</p>`;
    });

    // Mostrar cantidad de productos agregados y retirados
    productList.innerHTML += `<p><strong>Total de productos agregados: ${products.length}</strong></p>`;
    productList.innerHTML += `<p><strong>Total de productos retirados: ${removedCount}</strong></p>`;
}

function showSection(sectionId) {
    document.querySelectorAll('main > section').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

function addWords() {
    const input = document.getElementById("wordInput").value;
    const words = input.split(',').map(word => word.trim());
    
    words.forEach(word => {
        const firstLetter = word.charAt(0).toUpperCase();
        if (!wordsByLetter[firstLetter]) {
            wordsByLetter[firstLetter] = [];
        }
        wordsByLetter[firstLetter].push(word);
    });

    displayWords();
}

function displayWords() {
    const wordLists = document.getElementById("wordLists");
    wordLists.innerHTML = "";

    let listNumber = 1; // Contador para las listas

    for (const letter in wordsByLetter) {
        wordLists.innerHTML += `<h4>Lista ${listNumber}:</h4><p>${wordsByLetter[letter].join(', ')}</p>`;
        wordLists.innerHTML += `<button onclick="removeList('${letter}')">Eliminar Lista ${listNumber}</button>`;
        listNumber++; // Incrementar contador para la siguiente lista
    }
}

function removeList(letter) {
    delete wordsByLetter[letter]; // Eliminar la lista correspondiente
    displayWords(); // Volver a mostrar las listas
}
