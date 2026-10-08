/* =========================================================
   JERRY INC LIMITED
   WEBSITE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =============================================
       NAVBAR SCROLL EFFECT
    ============================================= */

    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 30) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    });


    /* =============================================
       MOBILE MENU
    ============================================= */

    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("show");

        const icon = menuBtn.querySelector("i");

        if (navLinks.classList.contains("show")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }

    });


    /* Close mobile menu when link is clicked */

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("show");

            const icon = menuBtn.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });


    /* =============================================
       ACTIVE NAVIGATION LINK
    ============================================= */

    const sections = document.querySelectorAll("section[id]");
    const links = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });

        links.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                `#${currentSection}`
            ) {
                link.classList.add("active");
            }

        });

    });


    /* =============================================
       ANIMATED COUNTERS
    ============================================= */

    const counters = document.querySelectorAll(".counter");

    const counterObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }

                const counter = entry.target;

                const target =
                    Number(counter.dataset.target);

                let current = 0;

                const duration = 1600;

                const increment =
                    target / (duration / 16);

                const updateCounter = () => {

                    current += increment;

                    if (current < target) {

                        counter.textContent =
                            Math.floor(current);

                        requestAnimationFrame(updateCounter);

                    } else {

                        counter.textContent = target;

                    }

                };

                updateCounter();

                observer.unobserve(counter);

            });

        },
        {
            threshold: 0.6
        }
    );

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });


    /* =============================================
       CONTACT FORM
    ============================================= */

    const contactForm =
        document.getElementById("contactForm");

    const formMessage =
        document.getElementById("formMessage");

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const service =
            document.getElementById("service").value;

        const message =
            document.getElementById("message").value.trim();


        if (!name || !email || !service || !message) {

            formMessage.textContent =
                "Please complete all fields.";

            formMessage.style.color = "#ff8585";

            return;
        }


        /*

           This is a front-end demonstration.

           To receive real messages, connect this form
           to a backend, Formspree, EmailJS, PHP, Node.js,
           or another form-processing service.

        */

        formMessage.textContent =
            "Thank you! Your project request has been received.";

        formMessage.style.color = "#7cf4c4";

        contactForm.reset();

    });


    /* =============================================
       CURRENT YEAR
    ============================================= */

    const year = document.getElementById("year");

    year.textContent =
        new Date().getFullYear();


    /* =============================================
       SCROLL REVEAL
    ============================================= */

    const revealElements = document.querySelectorAll(
        ".service-card, .project-card, .process-step, .contact-form, .about-box"
    );

    const revealObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(element => {

        element.style.opacity = "0";
        element.style.transform = "translateY(25px)";
        element.style.transition =
            "opacity .7s ease, transform .7s ease";

        revealObserver.observe(element);

    });

});
