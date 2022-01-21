var data = [
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/viper-green_720x.png?v=1642405569 width : 500px",
        reviews: 580,
        name: "BOAT Airdopes 131 - Wireless Earbuds",
        price: "899.00",
        features: [
            "Lightweight for Portability",
            "Uninturupted listening for 3 hours",
            "Truly wireless at a truly awesome price",
        ],
    },

    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img-R333_720x.png?v=1641801662",
        reviews: "8 reviews",
        name: "boAt Rockerz 333",
        price: "1299.00",
        features: [
            "Colour variants for every style",
            "Fast charge in just 15 minutes",
            "Ace your workouts with IPX5 rating",
        ],
    },

    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Mercury-1_300x.png?v=1639400857",
        reviews: "2 reviews",
        name: "boAt Watch Mercury",
        price: "2299.00",
        features: [
            "1.54 inch display",
            "Tempreture monitoring",
            "100+ cloud watch faces",
        ],
    },
];

let container = document.getElementById("container");

function showProducts() {
    console.log(data)
    data.forEach(function (product) {

        let productDiv = document.createElement("div");
        productDiv.setAttribute("class", "productDiv");
        productDiv.addEventListener("click", toProduct)

        let img = document.createElement("img");
        img.src = product.img;

        let name = document.createElement("h3");
        name.innerHTML = product.name;

        let price = document.createElement("p");
        price.innerHTML = `Rs ${product.price}`;

        let features = document.createElement("p");
        features.innerHTML = product.features;

        let addCartBtn = document.createElement("button");
        addCartBtn.innerHTML = "Add to Cart";

        productDiv.append(img, name, price, features,addCartBtn);
         
        container.append(productDiv)

    })
};

function toProduct() {
    window.location.href = ('./HTML/Product.html')
}

showProducts()