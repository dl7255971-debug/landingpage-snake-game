// ========================================
// MENU MOBILE
// ========================================

const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
}

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        if (menu) {
            menu.classList.remove("active");
        }

    });

});

// ========================================
// CONTADOR ANIMADO
// ========================================

const counter = document.getElementById("counter");

let counterStarted = false;

function startCounter() {

    if (!counter || counterStarted) return;

    counterStarted = true;

    let current = 0;
    const target = 10000;
    const increment = 100;

    const interval = setInterval(() => {

        current += increment;

        counter.textContent =
            current.toLocaleString("pt-BR");

        if (current >= target) {

            counter.textContent =
                target.toLocaleString("pt-BR");

            clearInterval(interval);

        }

    }, 20);

}

// ========================================
// OBSERVER DAS SEÇÕES
// ========================================

const sections =
    document.querySelectorAll("section");

const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    if (
                        entry.target.classList.contains("contador")
                    ) {
                        startCounter();
                    }

                }

            });

        },

        {
            threshold: 0.2
        }

    );

sections.forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});

// ========================================
// MODAL DA GALERIA
// ========================================

const modal =
    document.getElementById("modal");

const modalImg =
    document.getElementById("modal-img");

const closeBtn =
    document.getElementById("close");

const galleryImages =
    document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        modal.style.display = "flex";

        modalImg.src = img.src;

        modalImg.alt = img.alt;

    });

});

if (closeBtn) {

    closeBtn.addEventListener("click", () => {

        modal.style.display = "none";

    });

}

if (modal) {

    modal.addEventListener("click", (e) => {

        if (e.target === modal) {

            modal.style.display = "none";

        }

    });

}

// ========================================
// FECHAR MODAL COM ESC
// ========================================

document.addEventListener("keydown", (e) => {

    if (
        e.key === "Escape" &&
        modal.style.display === "flex"
    ) {

        modal.style.display = "none";

    }

});

// ========================================
// BOTÃO VOLTAR AO TOPO
// ========================================

const topBtn =
    document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 500) {

        topBtn.style.display = "flex";

    }

    else {

        topBtn.style.display = "none";

    }

});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

// ========================================
// SCROLL SUAVE
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});

// ========================================
// EFEITO PARALLAX HERO
// ========================================

const hero =
    document.querySelector(".hero");

window.addEventListener("mousemove", (e) => {

    if (!hero) return;

    const x =
        (window.innerWidth / 2 - e.clientX) / 80;

    const y =
        (window.innerHeight / 2 - e.clientY) / 80;

    hero.style.backgroundPosition =
        `calc(50% + ${x}px) calc(50% + ${y}px)`;

});

// ========================================
// HEADER DINÂMICO
// ========================================

const header =
    document.querySelector("header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 100) {

        header.classList.add("header-scroll");

    }

    else {

        header.classList.remove("header-scroll");

    }

});

// ========================================
// PRELOAD DAS IMAGENS
// ========================================

[
    "images/hero.png",
    "images/gameplay.png",
    "images/concept.png"
].forEach(src => {

    const img = new Image();

    img.src = src;

});

// ========================================
// LOG
// ========================================

console.log(
    "%c🐍 Snake Reborn carregado com sucesso!",
    "color:#39ff14;font-size:16px;font-weight:bold;"
);