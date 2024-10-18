let products = [];

function agregado() {
    const name = document.getElementById('Product').value;
    const cost = parseFloat(document.getElementById('Cost').value); 

    if (name && !isNaN(cost)) {
        const ID = products.length ? products[products.length - 1].id + 1 : 1; 

        const newProduct = { id: ID, name: name, price: cost };

        products.push(newProduct);

        updateProductList();
        updateTotalCost();
    } else {
        alert('Por favor, ingresa un nombre de producto y un precio válido.');
    }

    document.getElementById('Product').value = '';
    document.getElementById('Cost').value = '';
}

function removeProduct() {
    const productId = parseInt(document.getElementById('Delete').value);

    if (!isNaN(productId)) {
        products = products.filter(product => product.id !== productId);

        updateProductList();
        updateTotalCost();
    } else {
        alert('Por favor, ingresa un ID válido.');
    }

    document.getElementById('Delete').value = '';
}

function sortProducts() {
    products.sort((a, b) => a.name.localeCompare(b.name));

    updateProductList();
}

function updateProductList() {
    const productList = document.getElementById('productList');
    productList.innerHTML = ''; 

    products.forEach(product => {
        const li = document.createElement('li');
        li.textContent = `ID: ${product.id} - ${product.name} - $${product.price.toFixed(2)}`;
        productList.appendChild(li);
    });
}

function updateTotalCost() {
    const totalCost = products.reduce((total, product) => total + product.price, 0);
    document.getElementById('totalCost').textContent = totalCost.toFixed(2);
}

document.getElementById('Agregar').addEventListener('click', agregado);
document.getElementById('Eliminar').addEventListener('click', removeProduct);
document.getElementById('Ordenar').addEventListener('click', sortProducts);
