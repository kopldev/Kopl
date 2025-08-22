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
let contactImage = document.getElementById("contact-image");
let contactName = document.getElementById("contact-name");
let contactTitle = document.getElementById("contact-title");
let contactNumber = document.getElementById("contact-number");
let contactEmail = document.getElementById("contact-email");


const projectId = new URLSearchParams(window.location.search).get('id');

const project = projects.find(p => p.id === projectId);

const contact = contacts.find(c => c.id === project.contact)

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
    contactImage.src = contact.image
    contactName.textContent = contact.name;
    contactTitle.textContent = contact.title;
    contactNumber.textContent = contact.phone;
    contactEmail.textContent = contact.email;
}

