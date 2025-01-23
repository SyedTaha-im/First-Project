document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.card-btn');  // Now targeting the 'cart' class
 
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.card');
            const productId = card.getAttribute('data-product-id');
            const productName = card.getAttribute('data-product-name');
            const productPrice = parseFloat(card.getAttribute('data-product-price'));

            // Create a cart item
            const cartItem = {
                id: productId,
                name: productName,
                price: productPrice,
                quantity: 1 // Default quantity
            };

            // Retrieve cart from local storage or initialize an empty array
            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            // Check if item already exists in the cart
            const existingItemIndex = cart.findIndex(item => item.id === productId);
            if (existingItemIndex > -1) {
                // Update quantity if item already exists
                cart[existingItemIndex].quantity += 1;
            } else {
                // Add new item to the cart
                cart.push(cartItem);
            }

            // Save updated cart to local storage
            localStorage.setItem('cart', JSON.stringify(cart));

            // Optional: Alert or provide user feedback
            alert('Product added to cart!');
        });
    });
});
