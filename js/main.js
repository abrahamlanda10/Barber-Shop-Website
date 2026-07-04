// ==========================
// File: js/main.js
// Vintage Barbershop Project
// ==========================
// ----- DOM Elements -----

const yearEl = document.getElementById("year");
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const ctaBtn = document.getElementById("ctaBtn");
const callBtn = document.getElementById("callBtn");
const phoneLink = document.getElementById("phoneLink");
const heading = document.getElementById("heroHeading");
const featureGrid = document.getElementById("featureGrid");
const nav = document.getElementById("nav");
const siteHeader = document.querySelector(".site-header");
// ----- Service Data (Array of Objects) -----

const services = [
    {
        title: "Classic Haircut",
        text: "Timeless cuts with modern precision tailored to your side.",
        image: "assets/images/feature-1.jpg"
    },
    {
        title: "Beard Trim",
        text: "Shape and line-up your beard for a clean, sharp finish",
        image: "assets/images/feature-2.jpg"
    },
    {
        title: "Straight Razor Shave",
        text: "Hot towel treatment with a smooth traditional shave.",
        image: "assets/images/feature-3.jpg"
    }
];

const navLinks = [
    {label:"Home", href:"#hero"},
    {label: "Services", href: "#features"},
    {label: "Book", href: "#cta"},
    {label: "Contact", href: "#footer"}
];

// ----- Render Navigation Using map() -----
const renderNavigation = () => {
    // Desktop Nav
    if (nav) {
        const navHTML = navLinks.map(link => {
            return `
            <a href="${link.href}" class="nav-link">
            ${link.label}
            </a>
            `;
        }).join("");

        nav.innerHTML = navHTML;
    };
    //Mobile Nav
if (mobileMenu) {
    const mobileHTML = navLinks.map(link => {
        return `
        <a href="${link.href}" class="mobile-link">
        ${link.label}
        </a>
        `;
    }).join("");

    mobileMenu.innerHTML = mobileHTML;
};
};



// ----- Render Feature using forEach -----
// const renderFeatures = () => {
//     if (!featureGrid) return;

//     services.forEach(service => {
//         const card = document.createElement("article");
//         card.classList.add("feature-card");

//         card.innerHTML = `
//             <img src="${service.image}" alt="${service.title}" class="feature-img"/>
//             <h3 class="feature-title">${service.title}</h3>
//             <p class="feature-text">${service.text}</p>
//             `;

//             featureGrid.appendChild(card);
//     });
// };

// ----- Render Feature using map() and join() -----
const renderFeaturesMap = () => {
    const cardsHTML = services.map(service => {
        return `
        <article class="feature-card">
        <img src="${service.image}" alt="${service.title}"class="feature-img"/>
        <h3 class="feature-title">${service.text}</h3>
        <p class="feature-text">${service.text}</p>
        </article>
        `;
    }).join("")

    featureGrid.innerHTML = cardsHTML;
};

// ----- Helpers / Functions -----
// Update footer year automatically
function setCurrentYear() {
    const now = new Date();
    yearEl.textContent = now.getFullYear();
};

const handleHeaderOnScroll = () => {
    if(!siteHeader) return;

    if(window.scrollY > 10) {
        siteHeader.classList.add("is-scrolled")
    } else {
        siteHeader.classList.remove("is-scrolled")
    };
};

// Toggle mobile menu open/close
let isMenuOpen = false;
const toggleMobileMenu = () => {
    if (!mobileMenu) return;
    if (isMenuOpen === false) {
        mobileMenu.classList .add("is-open");
        isMenuOpen =true;
    } else {
        mobileMenu.classList.remove("is-open");
        isMenuOpen = false;
    }
};

// Close mobile menu (used when a link is clicked)
const closeMobileMenu = () => {
    if(!mobileMenu) return;
    mobileMenu.classList.remove("is-open");
    isMenuOpen = false;
};

//Reusable function with parameters (practice pattern)
const updateHeadingText = (newText) => {
    if (!heading) return;
    heading.textContent = newText;
};

// ----- Event Listeners -----

// 1) Set Year on page load
setCurrentYear();
// renderFeatures();
renderFeaturesMap();
renderNavigation();
window.addEventListener("scroll", handleHeaderOnScroll);
handleHeaderOnScroll();// Run once on page load in case user refreshes mid-scroll


// 2) Hamburger menu toggle
if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        toggleMobileMenu()
    });
};

// 3) Close mobile menu when a mobile link is clicked (event delegation)
if (mobileMenu) {
    mobileMenu.addEventListener("click", (event) => {
        // If they clicked an <a> inside the menu, close it
        if (event.target.tagName ==="A") {
            closeMobileMenu()
        }
    });
};

// 4) CTA Button: "Book Now" (placeholder behavior)
if (ctaBtn) {
    ctaBtn.addEventListener("click", () => {
        updateHeadingText("Booking coming next - Great Choice!");
    });
};

// 5) Call Button: try to use the phone number
if (callBtn) {
    callBtn.addEventListener("click", () => {
        // If you later set phoneLink href to tel:, this will work perfectly.
        // For now, this is a begginer-friendly placeholder.
        if (phoneLink) {
            updateHeadingText("Call us at " + phoneLink.textContent);
        } else {
            updateHeadingText("Call feature Coming Soon!");
        };
    });
};
