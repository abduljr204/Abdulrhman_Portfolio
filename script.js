// MOBILE NAVIGATION

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// CLOSE MOBILE MENU AFTER CLICKING A LINK

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});


// SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                revealObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12
    }
);

revealElements.forEach(element => {
    revealObserver.observe(element);
});


// NAVBAR SHADOW WHEN SCROLLING

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        header.style.boxShadow =
            "0 10px 40px rgba(0,0,0,0.05)";

    } else {

        header.style.boxShadow = "none";

    }

});

// NAME TYPEWRITER EFFECT

const firstNameElement = document.getElementById("firstName");
const lastNameElement = document.getElementById("lastName");

const firstNameText = "Abdulrhman";
const lastNameText = "BenHassan.";

let firstIndex = 0;
let lastIndex = 0;

function typeFirstName() {
    if (firstIndex < firstNameText.length) {
        firstNameElement.textContent += firstNameText.charAt(firstIndex);
        firstIndex++;

        setTimeout(typeFirstName, 90);
    } else {
        setTimeout(typeLastName, 250);
    }
}

function typeLastName() {

    if (lastIndex < lastNameText.length) {

        lastNameElement.textContent +=
            lastNameText.charAt(lastIndex);

        lastIndex++;

        setTimeout(typeLastName, 90);

    } else {

        setTimeout(() => {

            document.querySelector(".typing-cursor")
                .style.display = "none";

        }, 1200);

    }

}