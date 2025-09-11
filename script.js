        // get all the importent elements
        let Cart = document.getElementById("Cart")
        let products = document.getElementsByClassName("products")[0]
        let headerInner = document.getElementsByClassName("header-inner")[0]
        let canegaries = []
        let categorywiseproduct = []
        let cartObject = []

        // function for display all product
async function getdata() {
    try {
        let data = await fetch("https://dummyjson.com/products?limit=200");
        let response = await data.json();
        let array = response.products;

        array.forEach(product => {
            if (!canegaries.includes(product.category)) {
                canegaries.push(product.category);
            }


            // Product card
            let div = document.createElement("div");
            div.setAttribute("class", "carts");
            div.innerHTML = `<img src="${product.images[0]}" alt="product">`;

            // Description
            let discription = document.createElement("p");
            discription.innerText = `${product.description}`;

            // Price
            let price = document.createElement("p");
            price.innerText = `Price: ₹${product.price}`;

            // Rating + Category
            let rating = document.createElement("p");
            rating.innerText = `⭐ ${product.rating} | Category: ${product.category}`;

            // Add to Cart button
            let addBtn = document.createElement("button");
            addBtn.innerText = "Add to Cart";
            addBtn.setAttribute("class", "add-to-cart");

            addBtn.addEventListener("click", (event) => {
                event.preventDefault();
                event.stopPropagation();
                // console.log(`Added to cart: ${product.description}`);
                // alert(`✅ ${product.description} added to cart!`);
                addProductToCart(product);
            });

            // Append all elements
            products.appendChild(div);
            div.appendChild(discription);
            div.appendChild(price);
            div.appendChild(rating);
            div.appendChild(addBtn);
        });

        // Create category options after rendering products
        creatoptions(canegaries, array);

    } catch (error) {
        console.log(error);
    }
}

        getdata()

        function creatoptions(canegaries, array) {
            let select = document.createElement("select");
            select.id = "categorySelector";
            headerInner.appendChild(select);
            for (let i = 0; i < canegaries.length; i++) {
                let option = document.createElement("option");
                option.value = canegaries[i];
                option.innerText = canegaries[i];
                select.appendChild(option);
            }

            select.addEventListener("change", function() {
                let selectedValue = select.value;
                console.log(selectedValue);
                catdisplay(selectedValue, array)
            });
        }

        function catdisplay(selectedoption, array) {
            categorywiseproduct = []
            array.filter((element, index, array) => {

                if (element.category == selectedoption) {
                    // displayproducts(array)

                    console.log(element);
                    categorywiseproduct.push(element)
                    displayproducts(categorywiseproduct)
                }


            })
            console.log(categorywiseproduct);

        }
function displayproducts(categorywiseproduct) {
    products.innerHTML = "";
    categorywiseproduct.forEach(product => {
        if (!canegaries.includes(product.category)) {
            canegaries.push(product.category);
        }

        let div = document.createElement("div");
        div.setAttribute("class", "carts");

        // Product image
        div.innerHTML = `<img src="${product.images[0]}" alt="product">`;

        // Description
        let discription = document.createElement("p");
        discription.innerText = `${product.description}`;

        // Price
        let price = document.createElement("p");
        price.innerText = `Price: ₹${product.price}`;

        // Rating + Category
        let rating = document.createElement("p");
        rating.innerText = `⭐ ${product.rating} | Category: ${product.category}`;

        // Add to Cart button
        let addBtn = document.createElement("button");
        addBtn.innerText = "Add to Cart";
        addBtn.setAttribute("class", "add-to-cart");

        // Example click event for Add to Cart
        addBtn.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();
            // console.log(`Added to cart: ${product.description}`);
            // alert(`✅ ${product.description} added to cart!`);
            addProductToCart(product);
        });

        // Append everything
        products.appendChild(div);
        div.appendChild(discription);
        div.appendChild(price);
        div.appendChild(rating);
        div.appendChild(addBtn);
    });
}
       function addProductToCart(product) {
            cartObject.push(product);
            console.log(cartObject);
            localStorage.setItem("cart", JSON.stringify(cartObject));
        }

        // console.log(cartObject);
     Cart.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
         window.location.href = "cart.html"
     })   
