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

const scrollArrows = document.querySelectorAll('.scroll-down-arrow');

scrollArrows.forEach(arrow => {
  arrow.addEventListener('click', e => {
    e.preventDefault();

    const targetId = arrow.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    console.log(targetElement);
    

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest'
      });
    }
  });
});

window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

// Nav bar logic
const navToggle = document.getElementById('koplNavToggle');
        const mobileMenu = document.getElementById('koplMobileMenu');
        const mobileClose = document.getElementById('koplMobileClose');
        const mobileOverlay = document.getElementById('koplMobileOverlay');
        navToggle.addEventListener('click', function () {
            mobileMenu.classList.add('open');
            mobileOverlay.classList.add('open');
        });
        mobileClose.addEventListener('click', function () {
            mobileMenu.classList.remove('open');
            mobileOverlay.classList.remove('open');
        });
        mobileOverlay.addEventListener('click', function () {
            mobileMenu.classList.remove('open');
            mobileOverlay.classList.remove('open');
        });


