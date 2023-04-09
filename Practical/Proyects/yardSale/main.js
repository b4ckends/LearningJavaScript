const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconCarMenu = document.querySelector('.navbar-shopping-cart');
const iconMobileMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
iconMobileMenu.addEventListener('click', toggleMobileMenu);
iconCarMenu.addEventListener('click', toggleShoppingCart);

function toggleDesktopMenu() {
    const isShoppingCartClosed = shoppingCart.classList.contains('inactive');

    if (!isShoppingCartClosed) {
        shoppingCart.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
};

function toggleMobileMenu() {
    const isShoppingCartClosed = shoppingCart.classList.contains('inactive');

    if (!isShoppingCartClosed) {
        // if the shoppingCart it's open we have to close it to open the mobileMenu
        shoppingCart.classList.add('inactive');
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

    shoppingCart.classList.toggle('inactive');
}