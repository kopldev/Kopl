let title = document.getElementById("project-title");
let year = document.getElementById("project-detail-value-year");
let projectLocation = document.getElementById("project-detail-value-location");
let services = document.getElementById("project-detail-value-services");
let heroImage = document.getElementById("hero-image");
let projectDescription = document.getElementById("overview-desc");

const projectId = new URLSearchParams(window.location.search).get('id');
const project = projects.find(p => p.id === projectId);
const contactsContainer = document.getElementById("contacts-container");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const lightboxClose = document.querySelector(".lightbox .close");


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
    projectDescription.textContent = project.description;
    heroImage.src = project.heroImage;



    const galleryImages = document.getElementById("gallery-scroll");
    galleryImages.innerHTML = "";

    if (project.images && project.images.length > 0) {
        project.images.forEach((imgSrc, index) => {
            const img = document.createElement("img");
            img.src = imgSrc;
            img.classList.add("gallery-image");
            img.id = `gallery-image-${index}`;
            galleryImages.appendChild(img);

            img.addEventListener('click', () => {
                lightbox.style.display = "flex";
                lightboxImg.src = img.src;
            });
        });
    } else {
        document.getElementById("image-gallery").style.display = "none";
    }


    lightboxClose.addEventListener('click', () => {
        lightbox.style.display = "none";
    });


    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });


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
                    <p><a href="tel:${contact.phone}">${contact.phone}</a></p>
                    <p><a href="mailto:${contact.email}">${contact.email}</a></p>
                </div>
            </div>
        `;
            contactsContainer.appendChild(card);
        });
    } else {
        console.warn("projectContacts er ikke et array!");
    }
}

