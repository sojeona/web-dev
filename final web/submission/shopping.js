
//shopping calculator

//let openShopping=document.getElementsByClassName('chekcout');
//let closeShopping= document.querySelector('.closeShopping');
//let total=document.querySelector('total');

/*
openShopping.addEventListener('click',()=>{
    body.classList.add('show');
})
closeShopping.addEventListener('click',()=>{
    body.classList.remove('show');

})

let product=[
    {
        id:1,
        name:'',
        image
    }
]
 */


//shopping practice

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

let productsT = '{"Products":['+
    '{"id":1,"name":"product1","price":50,"image":"/Users/ksj1317/Desktop/web-dev/final web/submission/shoppingimg/apple.png"},'+
    '{"id":2, "name":"product1","price":1,"image":"/Users/ksj1317/Desktop/web-dev/final web/submission/shoppingimg/headphone.jpg"},'+
    '{"id":3,"name":"product1","price":20,"image":"/Users/ksj1317/Desktop/web-dev/final web/submission/shoppingimg/headphone.jpg"},'+
    '{"id":4,"name":"product1","price":15,"image":"/Users/ksj1317/Desktop/web-dev/final web/submission/shoppingimg/eaten.jpg"},'+
    '{"id":5,"name":"service1","price":10,"image":"/Users/ksj1317/Desktop/web-dev/final web/submission/shoppingimg/greenapple.png"},'+
    '{"id":6,"name":"drawing","price":5,"image":"/Users/ksj1317/Desktop/web-dev/final web/submission/shoppingimg/drawing.jpg"}]}';

const listProducts= JSON.parse(productsT);

const addDataToHTML =() =>{
    listProductHTML.innerHTML = '';
    if(listProducts.length > 0){
        listProducts.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('card');
            newProduct.innerHTML = `
                <div class="image"><img src="${products.image}" alt=""></div>
                <div class="name">${products.name}</div>
                <div class="price">$${products.price}</div>
            
            `
        })
    }
}
