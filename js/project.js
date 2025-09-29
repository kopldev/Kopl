let title = document.getElementById("project-title");
let year = document.getElementById("project-detail-value-year");
let projectLocation = document.getElementById("project-detail-value-location");
let services = document.getElementById("project-detail-value-services");
let heroImage = document.getElementById("hero-image");
let projectDescription = document.getElementById("overview-desc");
let notesAndRulingsGrid = document.getElementById("notesAndRulings");

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
    projectDescription.textContent = project.description;


    let images = [project.heroImage];
    if (Array.isArray(project.images) && project.images.length > 0) {
        images = [project.heroImage, ...project.images.filter(img => img !== project.heroImage)];
    }
    let currentImageIndex = 0;

    const paginationContainer = document.querySelector('.pagination-dots');
    paginationContainer.innerHTML = '';

    images.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            const forward = index > currentImageIndex;
            currentImageIndex = index - 1; // Subtract 1 because showNextImage will increment
            showNextImage(forward);
        });
        paginationContainer.appendChild(dot);
    });


    function showHeroImage() {
        heroImage.src = images[currentImageIndex];
    }

    function showNextImage(forward = true) {
        const oldImage = heroImage.cloneNode(true);
        oldImage.style.position = 'absolute';
        oldImage.style.top = '0';
        oldImage.style.left = '0';
        heroImage.parentNode.appendChild(oldImage);

        if (forward) {
            currentImageIndex++;
            if (currentImageIndex >= images.length) currentImageIndex = 0;
            oldImage.classList.add('slide-out-left');
            heroImage.classList.add('slide-in-left');
        } else {
            currentImageIndex--;
            if (currentImageIndex < 0) currentImageIndex = images.length - 1;
            oldImage.classList.add('slide-out-right');
            heroImage.classList.add('slide-in-right');
        }

        document.querySelectorAll('.dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentImageIndex);
        });
        heroImage.src = images[currentImageIndex];

        setTimeout(() => {
            heroImage.classList.remove('slide-in-left', 'slide-in-right');
            if (oldImage.parentNode) {
                oldImage.parentNode.removeChild(oldImage);
            }
        }, 500);
    }

    const arrows = document.querySelectorAll(".arrow");
    arrows[0].addEventListener('click', () => {
        console.log(currentImageIndex);
        showNextImage(false);
    });
    arrows[1].addEventListener('click', () => {
        showNextImage(true);
        console.log("clicked");

    });

    showHeroImage();


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


    if (project.notesAndRulings && project.notesAndRulings.length > 0) {
        project.notesAndRulings.forEach(notesAndRulings => {
            createRulingOrNoteElement(notesAndRulings);
        });

        function createRulingOrNoteElement(notesAndRulings) {
            const div = document.createElement("div");
            div.classList.add("note");

            const a = document.createElement("a");
            a.href = notesAndRulings.file;

            const image = document.createElement("img");
            image.classList.add("note-image");
            image.src = notesAndRulings.image;

            a.appendChild(image);
            div.appendChild(a);
            notesAndRulingsGrid.appendChild(div);
        }
    }
}




