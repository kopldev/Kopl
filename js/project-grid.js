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

    let map = L.map("map").setView([56.2639, 9.5018], 7.5);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map);

    populateMap(map);

    testingPolygon(map); //only for test purpose
});


function populateMap(map) {


    // Only populates map if the project has coordinates - check ProjectData.js for coordinates
    const projectWithCoordinates = projects.filter(project => project.coordinates.latitude !== null && project.coordinates.longitude !== null);
    console.log(projectWithCoordinates);



    projectWithCoordinates.forEach(project => {
        let koplIcon = L.icon({
            iconUrl: 'https://kopl.dk/onewebmedia/logo%20sort.png',
            iconSize: [25, 15],
            iconAnchor: [12, 15],
            popupAnchor: [0, -41]
        });

        let marker = L.marker([project.coordinates.latitude, project.coordinates.longitude], { icon: koplIcon }).addTo(map);

        marker.bindPopup(`<div style="min-width:200px">
            <h3 style="margin:0; font-size:1.1rem;">${project.title}</h3>
            <a style="text-decoration: none;" href="project.html?id=${project.id}">Se projektet</a>
        </div>`);
    });
}

function testingPolygon(map) {
     const polygonCoords = [
      [54.774, 11.880],
      [54.774, 11.890],
      [54.765, 11.890],
      [54.765, 11.880],
      [54.774, 11.880] // luk polygonen
  ];

  L.polygon(polygonCoords, {
      color: 'green',       // kantfarve
      fillColor: 'green',   // fyldfarve
      fillOpacity: 0.3
  }).addTo(map)
    .bindPopup('Eksempel på grøn polygon: Nykøbing Falster');
}