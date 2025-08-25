let title = document.getElementById("project-title");
let year = document.getElementById("project-detail-value-year");
let projectLocation = document.getElementById("project-detail-value-location");
let services = document.getElementById("project-detail-value-services");
let heroImage = document.getElementById("hero-image");
let projectDescription = document.getElementById("overview-desc");
let galleryImageOne = document.getElementById("gallery-image-one");
let galleryImagetwo = document.getElementById("gallery-image-two");
let galleryImagethree = document.getElementById("gallery-image-three");
let galleryImagefour = document.getElementById("gallery-image-four");


const projectId = new URLSearchParams(window.location.search).get('id');

const project = projects.find(p => p.id === projectId);

const contactsContainer = document.getElementById("contacts-container");



if (project) {
    populateProject(project);
} else {
    document.getElementById('project-detail').innerHTML = '<p>Project not found.</p>';
}

function populateProject(project) {

    title.textContent = project.title;
    year.textContent = project.year;
    projectLocation.textContent = project.location;
    services.textContent = project.services.join(", ");
    heroImage.src = project.heroImage;
    projectDescription.textContent = project.description;
    galleryImageOne.src = project.images[0];
    galleryImagetwo.src = project.images[1];
    galleryImagethree.src = project.images[2];
    galleryImagefour.src = project.images[3];

    const projectContacts = contacts.filter(c => project.contact.includes(c.id));


    if (Array.isArray(projectContacts)) {
        contactsContainer.innerHTML = "";

        projectContacts.forEach(contact => {
            const card = document.createElement("div");
            card.classList.add("project-lead-card");
            card.innerHTML = `
            <div class="lead-image">
                <img src="${contact.image}" alt="${contact.name}">
            </div>
            <div class="lead-info">
                <div class="lead-name-title">
                    <h3>${contact.name}</h3>
                    <p class="title">${contact.title}</p>
                </div>
                <div class="lead-contact">
                    <p>${contact.phone}</p>
                    <p>${contact.email}</p>
                </div>
            </div>
        `;
            contactsContainer.appendChild(card);
        });
    } else {
        console.warn("projectContacts er ikke et array!");
    }

}

