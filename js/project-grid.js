const gridButton = document.getElementById("veiwSelectorgridButton");
const mapButton = document.getElementById("veiwSelectorMapButton")

gridButton.addEventListener("click", () => {
    const projectsGrid = document.getElementById("projectsGrid");
    const projectsMap = document.getElementById("map");

    projectsMap.style.display = "none";
    projectsGrid.style.display = "grid";

});

mapButton.addEventListener("click", () => {
    const projectsGrid = document.getElementById("projectsGrid");
    const projectsMap = document.getElementById("map");

    projectsGrid.style.display = "none";
    projectsMap.style.display = "block";

    let map = L.map("map").setView([56.2639, 9.5018], 6); // Danmark midtpunkt

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map);

});
