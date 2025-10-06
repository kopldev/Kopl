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
    const coords = [
        [55.4162905, 11.7778317],
        [55.4162748, 11.7780333],
        [55.4163612, 11.7785226],
        [55.4165042, 11.7795497],
        [55.4165122, 11.7795854],
        [55.4168045, 11.7795981],
        [55.4175954, 11.7820076],
        [55.4179041, 11.7815928],
        [55.4183296, 11.7821840],
        [55.4186856, 11.7809580],
        [55.4196427, 11.7812747],
        [55.419634606, 11.781019890],
        [55.42007023, 11.78127674],
        [55.42048099, 11.78007841],
        [55.42206215, 11.77507685],
        [55.4218443, 11.7752277],
        [55.4217741, 11.7752423],
        [55.4213777, 11.7752749],
        [55.4212250, 11.7754084],
        [55.4210009, 11.7757570],
        [55.4208034, 11.7761076],
        [55.4205948, 11.7765587],
        [55.4203097, 11.7772500],
        [55.4200042, 11.7778170],
        [55.4198758, 11.7779093],
        [55.4198252, 11.7778922],
        [55.4197823, 11.7780255],
        [55.4198079, 11.7780683],
        [55.41953395, 11.77905065],
        [55.4185801, 11.7785423],
        [55.4180953, 11.7786095],
        [55.4162905, 11.7778317]  // Lukker polygonen
    ];

    // Opret polygon og tilføj til map
    const polygon = L.polygon(coords, {
        color: 'black',       // kantfarve
        fillColor: 'white', // fyldfarve
        fillOpacity: 0.4,
        dashArray: '5, 10'
    }).addTo(map);

    polygon.bindPopup("Dette er min afgrænsning.");

    polygon.bindPopup(`
  <div style="
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 13px;
    color: #333;
    padding: 8px 12px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.2);
    text-align: left;
    line-height: 1.4;
  ">
    <strong>Høm Mølle</strong><br>
    <a href="https://kopldev.github.io/Kopl/html/project.html?id=250013" 
       target="_blank" 
       style="color: #0077cc; text-decoration: none;">
       Se projekt
    </a>
  </div>
`);


    // Hvis du vil zoome kortet til polygonen
    map.fitBounds(polygon.getBounds());
}