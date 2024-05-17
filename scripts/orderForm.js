/*** Set Product Details ***/

function initializeOrderForm() {
    // Extract the flavour name from the path
    const params = new URLSearchParams(window.location.search);
    const productKey = params.get('product');

    // Fill in form details
    const productData = ProductEnum[productKey];

    // Check if product data exists
    if (!productData) {
        console.error('Product data not found for key: ', productKey);
        return;
    }

    // Configure product image container
    const productImageContainer = document.querySelector('.product-image-container');
    productImageContainer.querySelector('.product-image').src = productData.imgSrc;

    // Configure product details
    const productDetailsContainer = document.querySelector('.product-details-container');
    productDetailsContainer.querySelector('.product-name').textContent = productData.name;
    productDetailsContainer.querySelector('.product-price').textContent = productData.price;
    productDetailsContainer.querySelector('.product-description').innerHTML = productData.description;
}


/*** Window Actions ***/

window.onload = initializeOrderForm;