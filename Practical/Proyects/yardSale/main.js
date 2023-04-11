const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconCarMenu = document.querySelector('.navbar-shopping-cart');
const iconMobileMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
iconMobileMenu.addEventListener('click', toggleMobileMenu);
iconCarMenu.addEventListener('click', toggleShoppingCart);

function toggleDesktopMenu() {
    const isShoppingCartClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isShoppingCartClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
};

function toggleMobileMenu() {
    const isShoppingCartClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isShoppingCartClosed) {
        // if the shoppingCart it's open we have to close it to open the mobileMenu
        shoppingCartContainer.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
};

function toggleShoppingCart() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        // if the mobileMenu it's open we have to close it to open the shoppingCart
        mobileMenu.classList.add('inactive');
    } 

    else if (!isDesktopMenuClosed) {
        // if the desktopMenu it's open we have to close it to open the shoppingCart AND can open again the desktopMenu if we need to open it because if it's not closed before we open de shoppingCart it's just going to toggle himself with the desktopMenu open or closed
        desktopMenu.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'PC for Streamer imported from Africa Apple Somali Edition',
    price: 21459,
    image: 'https://i.pinimg.com/originals/4c/2b/cd/4c2bcd6faf26ec4e96299659f5cbdfda.jpg'
})
productList.push({
    name: 'Consola Xbox Series X 1TB Ssd 4k Version Shrek Con Lector Discos',
    price: 29703,
    image: 'https://i.redd.it/8q59bzybfv871.jpg'
})
productList.push({
  name: 'Pou 2 Edition PS5'  ,
  price: 10,
  image: 'https://assets.epuzzle.info/puzzle/075/910/original.jpg'
})
productList.push({
    name: 'PlayStation 360 SSD50MB 13MB RAM',
    price: 679,
    image: 'https://as01.epimg.net/meristation/imagenes/2014/03/31/reportaje/1396245600_573377_1532547880_sumario_normal.jpg'
})
productList.push({
    name: 'Capitan Mexico: El soldado del tianguis',
    price: 50,
    image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0d289213-d0be-4c42-b5b5-e54b479accc6/d5209o4-98653924-9701-4971-9da6-c69b469852c8.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBkMjg5MjEzLWQwYmUtNGM0Mi1iNWI1LWU1NGI0NzlhY2NjNlwvZDUyMDlvNC05ODY1MzkyNC05NzAxLTQ5NzEtOWRhNi1jNjliNDY5ODUyYzguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.NhRCa1TONF3_RA4Wyqyf3KQfxXul5VO-BczN4_BCwyM'
})
productList.push({
    name: 'Pou 2 Xbox Premium Edition',
    price: 83,
    image: 'https://preview.redd.it/0v0u8xcmmto61.jpg?width=592&format=pjpg&auto=webp&s=412dd896acab7330c823c0cf167b46f6bdae2016'
})
productList.push({
    name: 'Twins Monkeys',
    price: 79585,
    image: 'https://images.pexels.com/photos/234054/pexels-photo-234054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push({
    name: 'Avengers Original Playera Marvel Utilizada Por Stan Lee',
    price: 570.99,
    image: 'https://purosarcasmo.com/wp-content/uploads/2021/04/Productos-20.jpg'
})
productList.push({
    name: 'Backpack Shrek 4',
    price: 34,
    image: 'https://www.paredro.com/wp-content/uploads/2014/10/shrekhulk.jpg'
})
productList.push({
    name: 'Backpack Harry Potter Obama Edition',
    price: 422,
    image: 'https://www.recreoviral.com/wp-content/uploads/2015/08/30-Marcas-piratas-de-los-chinos-5.jpg'
})



/*
<div class="product-card">
    <img src="https://images.pexels.com/photos/34006/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" class="product-img">
    <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>Motorcycle</p>
        </div>
        <figure>
            <img src="./Icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div>
*/

for (product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    // product = {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image)

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');
    
    const productPrice = document.createElement('p');
    productPrice.innerText = '$ ' + product.price + ' MXN'; 
    const productName = document.createElement('p');
    productName.innerText = product.name;
    
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCard = document.createElement('img');
    productImgCard.setAttribute('src', './Icons/bt_add_to_cart.svg');
    
    productInfoFigure.appendChild(productImgCard);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
}