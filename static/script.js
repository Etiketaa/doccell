document.addEventListener('DOMContentLoaded', function() {
    const catFoodSelect = document.getElementById('cat-food-select');
    const selectedProducts = document.getElementById('selected-products');
    const cartBtn = document.getElementById('cart-btn');
    const searchBtn = document.getElementById('search-btn');

    let products = [];
    let cart = [];

    // Fetch products from the server
    fetch('/api/products')
        .then(response => response.json())
        .then(data => {
            products = data.cat_food;
            populateSelect();
        });

    function populateSelect() {
        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.id;
            option.textContent = `${product.name} - $${product.price}`;
            catFoodSelect.appendChild(option);
        });
    }

    catFoodSelect.addEventListener('change', function() {
        const selectedId = parseInt(this.value);
        if (selectedId) {
            const product = products.find(p => p.id === selectedId);
            addToCart(product);
            updateSelectedProducts();
        }
    });

    function addToCart(product) {
        const existingItem = cart.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({...product, quantity: 1});
        }
    }

    function updateSelectedProducts() {
        selectedProducts.innerHTML = '';
        cart.forEach(item => {
            const div = document.createElement('div');
            div.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
            selectedProducts.appendChild(div);
        });
    }

    cartBtn.addEventListener('click', function() {
        alert('Contenido del carrito:\n' + cart.map(item => `${item.name} x ${item.quantity}`).join('\n'));
    });

    searchBtn.addEventListener('click', function() {
        const searchTerm = prompt('Ingrese el término de búsqueda:');
        if (searchTerm) {
            const results = products.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
            alert('Resultados de la búsqueda:\n' + results.map(item => item.name).join('\n'));
        }
    });
});