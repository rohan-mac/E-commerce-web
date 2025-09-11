const cartObject = JSON.parse(localStorage.getItem("cart")) || [];
console.log(cartObject);

let cartItems = document.getElementById("cart-items");

cartObject.forEach((product) => {
    let div = document.createElement("div");
    div.setAttribute("class", "carts");

    

    // Product Image
    let img = document.createElement("img");
    img.src = product.images[0]; // take first image
    img.alt = "product";

    // Description
    let description = document.createElement("p");
    description.innerText = product.description;

    // Price
    let price = document.createElement("p");
    price.innerText = `Price: $${product.price}`;

    // Remove from Cart Button
    let removeBtn = document.createElement("button");
    removeBtn.innerText = "Remove from Cart";
    removeBtn.setAttribute("class", "add-to-cart");

    // Append all elements to card
    div.appendChild(img);
    div.appendChild(description);
    div.appendChild(price);
    div.appendChild(removeBtn);

    // Add card to container
    cartItems.appendChild(div);

    // Remove functionality
    removeBtn.addEventListener("click", () => {
        let updatedCart = cartObject.filter(item => item.id !== product.id);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        div.remove();
    });
});
console.log(cartObject);
