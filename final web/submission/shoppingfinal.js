        //filter function
        function filterthings(c){
            var  x,i;
            x=document.getElementsByClassName("card");
            if(c=="all")  c= " ";
            
            for (i=0; i < x.length;i++){
                addClass(x[i],"hidden");
                if(x[i].className.indexOf(c)>-1){
                    removeClass(x[i],"hidden");

                }  
            }

        }

        function addClass(element, name) {
            var i, arr1, arr2;
            arr1 = element.className.split(" ");
            arr2 = name.split(" ");
            for (i = 0; i < arr2.length; i++) {
                if (arr1.indexOf(arr2[i]) == -1) {
                    element.className += " " + arr2[i];
                }
            }
        }

        function removeClass(element, name) {
            var i, arr1, arr2;
            arr1 = element.className.split(" ");
            arr2 = name.split(" ");
            for (i = 0; i < arr2.length; i++) {
                while (arr1.indexOf(arr2[i]) > -1) {
                    arr1.splice(arr1.indexOf(arr2[i]), 1);
                }
            }
            element.className = arr1.join(" ");
        }


        filterthings("all"); 

//shopping cart

let opencart = document.querySelector('.checkout');
let closecart = document.querySelector('.close');
let body=document.querySelector('body');
let cart=document.querySelector('.cart');


opencart.addEventListener('click',()=>{
    cart.classList.remove('hidden')
    cart.classList.add('show')
})
closecart.addEventListener('click',()=>{
    cart.classList.remove('show')
    cart.classList.add('hidden')
})

let listProductHTML = document.querySelector('.product');

let productsT ='{"Products":['+
    '{"id":1,"type":"2nd-hand","name":"product1","price":50,"image":"/Users/ksj1317/Desktop/web-dev/final web/submission/shoppingimg/apple.png"},'+
    '{"id":2, "type":"2nd-hand","name":"product2","price":1,"image":"/Users/ksj1317/Desktop/web-dev/final web/submission/shoppingimg/headphone.jpg"},'+
    '{"id":3,"type":"2nd-hand","name":"product3","price":20,"image":"/Users/ksj1317/Desktop/web-dev/final web/submission/shoppingimg/APPLE.jpg"},'+
    '{"id":4,"type":"etc","name":"food","price":15,"image":"/Users/ksj1317/Desktop/web-dev/final web/submission/shoppingimg/eaten.jpg"},'+
    '{"id":5,"type":"service","name":"service1","price":10,"image":"/Users/ksj1317/Desktop/web-dev/final web/submission/shoppingimg/greenapple.png"},'+
    '{"id":6,"type":"service","name":"drawing","price":5,"image":"/Users/ksj1317/Desktop/web-dev/final web/submission/shoppingimg/drawing.jpg"}]}';

const listProducts= JSON.parse(productsT);
let listProduct = document.querySelector('.product');


const addDataToHTML = () => {
    listProductHTML.innerHTML = '';
    for (let i = 0; i < listProducts.Products.length; i++) {
        const product = listProducts.Products[i];
        let newProduct = document.createElement('div');
        newProduct.classList.add('card');
        newProduct.classList.add(product.type);

        newProduct.dataset.id=product.id;

        newProduct.innerHTML = `
            <div class="tag">${product.type}</div>
            <div class="image"><img src="${product.image}" alt=""></div>
            <div class="box">
                <div class="title">${product.name}</div>
                <div class="price">$${product.price}</div>
                <button class="btn" onclick='changeLabel(this)'>add</button>
            </div>
        `;
        listProductHTML.appendChild(newProduct);
    }
}

addDataToHTML(); 


function addToCart(productId) {
    const index = cartitem.indexOf(productId);
    if (index === -1) {
        cartitem.push(productId);
    } else {
        cartitem.splice(index, 1);
    }
    console.log("Updated Cart:", cartitem);
    addinCart();
}

listProductHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    while (positionClick && !positionClick.classList.contains('card')) {
        positionClick = positionClick.parentElement;
    }
    if (positionClick && positionClick.dataset.id) {
        let productId = positionClick.dataset.id;
        addToCart(productId); 
        
    }
    
});



let cartitem = [];
let totalPrice = 0;
let listCartHTML= document.querySelector('.listCart');




 
const addinCart = () => {
    listCartHTML.innerHTML = '';
    totalPrice = 0; 
    for (let i = 0; i < cartitem.length; i++) {
        const addedproduct = listProducts.Products[cartitem[i]-1];
        let newCartProduct = document.createElement('div');
        newCartProduct.classList.add('item');
        newCartProduct.innerHTML = `
            <div class="image"><img src="${addedproduct.image}" alt="product1"></div>
            <div class="name">${addedproduct.name}</div>
            <div class="price">$${addedproduct.price}</div>
        `;
        totalPrice += addedproduct.price; // Increment total price with each added product's price
        listCartHTML.appendChild(newCartProduct); // Append the new product to listCartHTML
    }
    showtheprice();

}
function showtheprice() {
    let finalPriceDiv = document.querySelector('.finalprice');
    
    if (!finalPriceDiv) {
        finalPriceDiv = document.createElement('div');
        finalPriceDiv.classList.add('finalprice');
        listCartHTML.appendChild(finalPriceDiv);
    }
    
  
    finalPriceDiv.innerHTML = `<p>Total: $${totalPrice.toFixed(2)}</p>`;
}

addinCart();

function changeLabel(button) {
        if (button.innerHTML === "add") {
            button.innerHTML = "added";
        } else {
            button.innerHTML = "add";
        }
}





