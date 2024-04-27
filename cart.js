

const products = [
    {
        id: 0,
        image: 'images/7.jpg',
        title: 'Onera',
        price: 14999
    },
    {
        id: 1,
        image: 'images/9.jpg',
        title: 'Cenegenics',
        price: 24999
    },
    {
        id: 2,
        image: 'images/12.webp',
        title: 'Empatica',
        price: 10499
    },
    {
        id: 3,
        image: 'images/11.jpg',
        title: 'Acurable',
        price: 20499
    },
    {
        id: 4,
        image: 'images/18.jpg',
        title: 'Spectricity',
        price: 899
    },
    {
        id: 5,
        image: 'images/8.webp',
        title: 'Spectricity',
        price: 20499
    },
    {
        id: 6,
        image: 'images/13.webp',
        title: 'Origin Wireless',
        price: 15499
    },
    {
        id: 7,
        image: 'images/16.jpg',
        title: 'Nyumi',
        price: 849
    },
    {
        id: 8,
        image: 'images/19.jpg',
        title: 'Apex',
        price: 349
    },
    {
        id: 9,
        image: 'images/20.jpg',
        title: 'Sleepiz',
        price: 749
    },
];

let cart = [];
let total = 0;

function addtocart(id) {
    const product = products.find(item => item.id === id);
    cart.push({...product});
    displaycart();
}

function delElement(index) {
    cart.splice(index, 1);
    displaycart();
}

function displaycart() {
    total = 0;
    const cartItems = document.getElementById("cartItem");
    const countElement = document.getElementById("count");
    const totalElement = document.getElementById("total");

    countElement.innerHTML = cart.length;

    if (cart.length === 0) {
        cartItems.innerHTML = "Your cart is empty";
        totalElement.innerHTML = "RS 0.00";
    } else {
        cartItems.innerHTML = cart.map((item, index) => {
            total += item.price;
            return `
            <div class ='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src='${item.image}'>
                </div>
                <p style='font-size:15px;'>${item.title}</p>
                <h2 style='font-size: 15px;'>RS ${item.price}.00</h2>
                <i class='fa-solid fa-trash' onclick='delElement(${index})'></i>
            </div>`;
        }).join('');
        totalElement.innerHTML = "RS " + total.toFixed(2);
    }
}

// Populate products in the root div
document.getElementById('root').innerHTML = products.map(product => {
    return `
    <div class='box'>
        <div class='img-box'>
            <img class='images' src='${product.image}'></img>
        </div>
        <div class='bottom'>
            <p>${product.title}</p>
            <h2>RS ${product.price}.00</h2>
            <button onclick='addtocart(${product.id})'>Add to cart</button>
        </div>
    </div>`;
}).join('');

// Function to handle the Buy Now button click event
function handleBuyNowClick() {
    // Simulate a payment process or redirect to a payment gateway
    // You can customize this part based on your payment integration
    alert("Thank you for your purchase! Please proceed to payment.");

    // Example: Redirect to a payment gateway
    window.location.href = "payment.html";
}

// Add event listener to the Buy Now button
document.addEventListener("DOMContentLoaded", function() {
    const buyNowButton = document.querySelector(".buy-now-button");
    buyNowButton.addEventListener("click", handleBuyNowClick);
});


