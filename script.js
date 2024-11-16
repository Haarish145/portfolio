// Smooth Scrolling
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact Form Submission Handler
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        // This is where you would normally send the form data to a server
        // For this example, we will just log the data to the console
        console.log('Form Submitted');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

        // Clear the form
        document.getElementById('contact-form').reset();

        // Show a success message (you could improve this with better UI)
        alert('Thank you for your message!');
    } else {
        alert('Please fill in all fields.');
    }
});

// Toggle About Me Details
function toggleAboutMe() {
    const details = document.getElementById("about-me-details");
    if (details.style.display === "none") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}

// Toggle Project Details Visibility
function toggleProjectDetails(projectId) {
    const details = document.getElementById(projectId);
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}
function toggleProjectDetails(projectId) {
    const details = document.getElementById(projectId);
    if (details) {
        details.style.display = details.style.display === "block" ? "none" : "block";
    } else {
        console.error(`Element with ID ${projectId} not found.`);
    }
}
function toggleProjectDetails(projectId) {
    var projectDetails = document.getElementById(projectId);
    if (projectDetails.style.display === "none") {
        projectDetails.style.display = "block";
    } else {
        projectDetails.style.display = "none";
    }
}
function toggleProjectDetails(projectId) {
    var projectDetails = document.getElementById(projectId);
    if (projectDetails.style.display === "none") {
        projectDetails.style.display = "block";
    } else {
        projectDetails.style.display = "none";
    }
}
// Toggle the 'More About Me' details
function toggleAboutMe() {
    const details = document.getElementById('about-me-details');
    details.style.display = details.style.display === 'none' ? 'block' : 'none';
}

// Toggle project details
function toggleProjectDetails(projectId) {
    const project = document.getElementById(projectId);
    project.style.display = project.style.display === 'none' ? 'block' : 'none';
}
function toggleProjectDetails(projectId) {
    // Get all project details sections
    const projectDetails = document.querySelectorAll('.project-details');
    
    // Hide all project details sections first
    projectDetails.forEach(project => {
        if (project.id !== projectId) {
            project.style.display = 'none';
        }
    });
    
    // Toggle the visibility of the clicked project section
    const selectedProject = document.getElementById(projectId);
    if (selectedProject.style.display === 'none' || selectedProject.style.display === '') {
        selectedProject.style.display = 'block';
    } else {
        selectedProject.style.display = 'none';
    }
}


