document.querySelector('.scroll-side-arrow').addEventListener('click', function (e) {
    e.preventDefault(); // Forhindrer øjeblikkelig navigation

    // Tilføj animation-klassen
    document.body.classList.add('slide-left');

    // Vent til animationen er færdig
    setTimeout(() => {
        window.location.href = this.getAttribute('href');
    }, 500); // Tidsinterval matcher CSS transition
});