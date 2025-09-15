// Scroll arrow
const scrollArrow = document.querySelector('.scroll-side-arrow');
if (scrollArrow) {
    scrollArrow.addEventListener('click', function (e) {
        e.preventDefault();
        document.body.classList.add('slide-left');
        setTimeout(() => {
            window.location.href = this.getAttribute('href');
        }, 500);
    });
}

// Burger menu logo
const burgerMenuLogo = document.getElementById('koplBurgerMenuLogo');
if (burgerMenuLogo) {
    burgerMenuLogo.addEventListener('click', (event) => {
        const path = window.location.pathname;
        if (path.endsWith("index.html") || path === "/") {
            window.location.href = "index.html";
        } else {
            window.location.href = "../index.html";
        }
    });
}
