
//declarcion de variables
const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHanIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

const shoppingCartCointainer = document.querySelector('#shoppingCartCointainer');
const productDetailcontainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container')

//Eventos
navEmail.addEventListener('click',toggleDesktopMenu);
menuHanIcon.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCaritoAside);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside);
function toggleDesktopMenu(){
    
    const isAsideClosed = shoppingCartCointainer.classList.contains('inactive');
    if(!isAsideClosed){
        shoppingCartCointainer.classList.add('inactive');
    }
    
    desktopMenu.classList.toggle('inactive');

    
}

function toggleMobileMenu (){
    const isAsideClosed = shoppingCartCointainer.classList.contains('inactive');
    if(!isAsideClosed){
        shoppingCartCointainer.classList.add('inactive');
    }


    closeProductDetailAside();
    mobileMenu.classList.toggle('inactive');

}

function toggleCaritoAside (){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    //const isAsideClosed = mobile.classList.contains('inactive');
    //console.log('hola')
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    const isProductDetailClosed = productDetailcontainer.classList.contains('inactive');
    //const isAsideClosed = mobile.classList.contains('inactive');
    console.log('hola')
    if(!isProductDetailClosed){
        productDetailcontainer.classList.add('inactive');
    }

    shoppingCartCointainer.classList.toggle('inactive');
}

function openProductDetailAsise(){
    
    
    shoppingCartCointainer.classList.add('inactive');
    productDetailcontainer.classList.remove('inactive');

    
}

function closeProductDetailAside(){
    productDetailcontainer.classList.add('inactive');
}
const productList = [];
productList.push({
    name: 'bike',
    price: 120,
    img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Pantalla',
    price: 220,
    img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Teclado',
    price: 110,
    img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Teclado',
    price: 110,
    img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});



/* <div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div> 
 */
function renderProducts(arr){
    for (producto of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src',producto.img);
        productImg.addEventListener('click',openProductDetailAsise);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = "$" + producto.price
        const productName= document.createElement('p');
        productName.innerText = producto.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFIgure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src','./icons/bt_add_to_cart.svg');

        productInfoFIgure.appendChild(productImgCard);

        productInfoFIgure.appendChild(productImgCard);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFIgure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
}


renderProducts(productList);
