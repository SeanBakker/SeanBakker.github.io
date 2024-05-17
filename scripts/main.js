/*** Set Product Details ***/

function initializeFlavours() {
    var productFigures = document.querySelectorAll('.flavour-section figure');

    // Set details for each product
    productFigures.forEach(figure => {
        const productKey = figure.getAttribute('data-product');
        const productData = ProductEnum[productKey];

        // Check if product data exists
        if (!productData) {
            console.error('Product data not found for key: ', productKey);
            return;
        }

        // Set image source and caption
        figure.querySelector('.product-image').src = productData.imgSrc;
        figure.querySelector('.sub-text').innerHTML = `${productData.name}<br>${productData.price}`;

        figure.onclick = function() {
            // Redirect to Product Order Form
            const redirectUrl = 'pages/orderForm.html';

            // Set query params for product
            const queryParams = `?product=${encodeURIComponent(productKey)}`;
            window.location.href = redirectUrl + queryParams;
        }
    });
}


/*** Window Actions ***/

window.onload = initializeFlavours;
