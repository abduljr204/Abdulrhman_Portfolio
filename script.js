const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("active");
        menuBtn.setAttribute("aria-expanded", String(isOpen));
        menuBtn.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            menuBtn.setAttribute("aria-expanded", "false");
            menuBtn.setAttribute("aria-label", "Open navigation menu");
        });
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape" && navLinks.classList.contains("active")) {
            navLinks.classList.remove("active");
            menuBtn.setAttribute("aria-expanded", "false");
            menuBtn.setAttribute("aria-label", "Open navigation menu");
            menuBtn.focus();
        }
    });
}

const header = document.querySelector(".header");

if (header) {
    window.addEventListener("scroll", () => {
        header.style.boxShadow = window.scrollY > 30
            ? "0 10px 40px rgba(0,0,0,0.05)"
            : "none";
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll(".reveal");
    const revealImmediately = () => {
        revealElements.forEach(element => element.classList.add("active"));
    };

    if ("IntersectionObserver" in window) {
        const revealObserver = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                        revealObserver.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12 }
        );

        revealElements.forEach(element => revealObserver.observe(element));
    } else {
        revealImmediately();
    }

    const firstNameElement = document.getElementById("firstName");
    const lastNameElement = document.getElementById("lastName");
    const cursor = document.querySelector(".typing-cursor");

    if (!firstNameElement || !lastNameElement || !cursor) {
        return;
    }

    // The name is already in the HTML, so it shows without JS or animation.
    const firstName = firstNameElement.textContent.trim();
    const lastName = lastNameElement.textContent.trim();

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        cursor.style.opacity = "0";
        return;
    }

    firstNameElement.textContent = "";
    lastNameElement.textContent = "";

    let firstIndex = 0;
    let lastIndex = 0;

    function typeLastName() {
        if (lastIndex < lastName.length) {
            lastNameElement.textContent += lastName[lastIndex];
            lastIndex++;
            setTimeout(typeLastName, 90);
        } else {
            setTimeout(() => {
                cursor.style.opacity = "0";
            }, 1500);
        }
    }

    function typeFirstName() {
        if (firstIndex < firstName.length) {
            firstNameElement.textContent += firstName[firstIndex];
            firstIndex++;
            setTimeout(typeFirstName, 90);
        } else {
            setTimeout(typeLastName, 250);
        }
    }

    setTimeout(typeFirstName, 500);
});

