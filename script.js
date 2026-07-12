// ===============================
// SOCIAL HUB JAVASCRIPT
// ===============================

// Theme Button
const themeBtn = document.getElementById("theme-btn");

// Search Input
const searchInput = document.querySelector(".search-box input");

// All Cards
const cards = document.querySelectorAll(".card");

// ===============================
// DARK MODE
// ===============================

let darkMode = true;

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    darkMode = !darkMode;

    if (darkMode) {

        themeBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`;

    } else {

        themeBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;

    }

});

// ===============================
// SEARCH FILTER
// ===============================

searchInput.addEventListener("keyup", () => {

    let value = searchInput.value.toLowerCase();

    cards.forEach((card) => {

        let text = card.innerText.toLowerCase();

        if (text.includes(value)) {

            card.style.display = "flex";

        } else {

            card.style.display = "none";

        }

    });

});

// ===============================
// CARD HOVER EFFECT
// ===============================

cards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.setProperty("--x", x + "px");
        card.style.setProperty("--y", y + "px");

    });

});

// ===============================
// SCROLL ANIMATION
// ===============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

cards.forEach((card) => observer.observe(card));

const profile = document.querySelector(".profile-card");

observer.observe(profile);

// ===============================
// HEADER SHADOW
// ===============================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 30) {

        header.style.background = "rgba(10,10,20,.55)";
        header.style.backdropFilter = "blur(20px)";
        header.style.padding = "15px 20px";
        header.style.borderRadius = "20px";

    } else {

        header.style.background = "transparent";
        header.style.padding = "0";
        header.style.backdropFilter = "none";

    }

});

// ===============================
// PROFILE IMAGE ANIMATION
// ===============================

const profileImage = document.querySelector(".profile-card img");

profileImage.addEventListener("mouseenter", () => {

    profileImage.style.transform = "scale(1.08) rotate(4deg)";

});

profileImage.addEventListener("mouseleave", () => {

    profileImage.style.transform = "scale(1) rotate(0deg)";

});

// ===============================
// SOCIAL LINK CLICK ANIMATION
// ===============================

cards.forEach((card) => {

    card.addEventListener("click", () => {

        card.style.transform = "scale(.95)";

        setTimeout(() => {

            card.style.transform = "";

        }, 150);

    });

});

// ===============================
// PAGE LOADER EFFECT
// ===============================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

// ===============================
// CONSOLE
// ===============================

console.log("🚀 Social Hub Loaded Successfully");