const popupContainer = document.querySelector('.div-cart-popup-container');
const contentPopup = document.querySelectorAll('.a-price');
const cartIcon = document.querySelector('.cart')

contentPopup.forEach(item => {
    
    item.addEventListener('click', () => {
        item.preventDefault();
        popupContainer.classList.toggle('show');
    });
})

cartIcon.addEventListener('click', () => {
    popupContainer.classList.toggle('show');
});




