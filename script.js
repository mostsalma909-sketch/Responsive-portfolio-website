
/* =================================
   1. Typing Animation
================================= */

const words = [
    "Web Developer",
    "Frontend Developer",
    "Full Stack Developer",
    "Python Developer",
    "Freelancer"
];

const typing = document.getElementById("typing");

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typing) return;

    const currentWord = words[wordIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typing.textContent = currentWord.substring(0, charIndex);

    let speed = deleting ? 50 : 100;

    if (!deleting && charIndex === currentWord.length) {
        speed = 1500;
        deleting = true;
    }

    else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 500;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


/* =================================
   2. Dynamic Services
================================= */

const services = [
    {
        icon: "fa-code",
        title: "Web Development",
        description: "Creating modern and responsive websites using HTML, CSS, JavaScript and modern technologies."
    },

    {
        icon: "fa-palette",
        title: "UI/UX Design",
        description: "Designing beautiful, creative and user-friendly website interfaces."
    },

    {
        icon: "fa-mobile-screen",
        title: "Responsive Design",
        description: "Building websites that work smoothly on mobile, tablet and desktop devices."
    },

    {
        icon: "fa-database",
        title: "Backend Development",
        description: "Developing backend applications using Python, Django and database technologies."
    },

    {
        icon: "fa-magnifying-glass",
        title: "SEO Optimization",
        description: "Improving website visibility and search engine performance."
    },

    {
        icon: "fa-laptop-code",
        title: "Frontend Development",
        description: "Building interactive interfaces using JavaScript, React, HTML and CSS."
    }
];

const serviceContainer =
    document.getElementById("service-container");

if (serviceContainer) {

    serviceContainer.innerHTML = services.map(service => {

        return `
            <div class="service-card">

                <i class="fa-solid ${service.icon}"></i>

                <h3>${service.title}</h3>

                <p>${service.description}</p>

            </div>
        `;

    }).join("");

}


/* =================================
   3. Navigation Active Link
================================= */

const navLinks = document.querySelectorAll(".nav-link");

const sections = document.querySelectorAll("section[id]");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");

        document.getElementById("menu-toggle").checked = false;

    });

});


/* =================================
   4. Scroll Navigation
================================= */

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }

    });

});


/* =================================
   5. Contact Form Demo
================================= */

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", (e) => {

        e.preventDefault();

        alert("Thank you! Your message form is ready.");

        contactForm.reset();

    });

}
