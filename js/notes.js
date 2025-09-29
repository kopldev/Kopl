const notesDiv = document.getElementById("notesDiv");

// Render alle noter
notesAndRulings.forEach(note => {
    createRulingOrNoteElement(note);
});

function createRulingOrNoteElement(notes) {
    const div = document.createElement("div");
    div.classList.add("note");

    if (notes.services && notes.services.length > 0) {
        div.dataset.services = notes.services.join(",");
    }

    const a = document.createElement("a");
    a.href = notes.file;

    const image = document.createElement("img");
    image.classList.add("note-image");
    image.src = notes.image;
    image.alt = notes.title;

    a.appendChild(image);
    div.appendChild(a);
    notesDiv.appendChild(div);
}

// Dropdown
const dropdown = document.getElementById("service-dropdown");
const trigger = dropdown.querySelector(".custom-select-trigger");
const optionsContainer = dropdown.querySelector(".custom-options");

// Åbn/luk dropdown
trigger.addEventListener("click", () => {
    dropdown.classList.toggle("opened");
});

// Luk dropdown ved klik udenfor
document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("opened");
    }
});

// Udtræk alle unikke services
const allServices = [...new Set(notesAndRulings.flatMap(n => n.services))];

// Tilføj "Alle ydelser"
optionsContainer.innerHTML = `<span class="custom-option" data-value="">Alle ydelser</span>`;

// Generér hver service som option
allServices.forEach(service => {
    const span = document.createElement("span");
    span.classList.add("custom-option");
    span.dataset.value = service;
    span.textContent = service;
    optionsContainer.appendChild(span);
});

// Nu kan vi fange alle .custom-option efter de er genereret
const options = optionsContainer.querySelectorAll(".custom-option");

// Tilføj eventlisteners
options.forEach(option => {
    option.addEventListener("click", () => {
        trigger.textContent = option.textContent;
        dropdown.classList.remove("opened");
        filterProjectsByService(option.dataset.value);
    });
});

// Filterfunktion
function filterProjectsByService(service) {
    const notes = document.querySelectorAll(".note");

    notes.forEach(note => {
        const services = note.dataset.services ? note.dataset.services.split(",") : [];

        if (!service || services.includes(service)) {
            note.style.display = "";
        } else {
            note.style.display = "none";
        }
    });
}
