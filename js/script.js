// ============================
// MENU MOBILE
// ============================

const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// Fecha o menu ao clicar em um link

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

    });

});

// ============================
// CONTADOR ANIMADO
// ============================

const counter = document.getElementById("counter");

let currentNumber = 0;
let targetNumber = 10000;

let started = false;

function startCounter() {

    if (started) return;

    started = true;

    const interval = setInterval(() => {

        currentNumber += 100;

        counter.textContent =
            currentNumber.toLocaleString("pt-BR");

        if (currentNumber >= targetNumber) {

            counter.textContent =
                targetNumber.toLocaleString("pt-BR");

            clearInterval(interval);

        }

    }, 20);

}

const counterSection =
    document.querySelector(".contador");

window.addEventListener("scroll", () => {

    const sectionTop =
        counterSection.offsetTop - 400;

    if (window.scrollY > sectionTop) {

        startCounter();

    }

});

// ============================
// MODAL DE IMAGENS
// ============================

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

    });

});

closeBtn.addEventListener("click", () => {

    modal.style.display = "none";

});

modal.addEventListener("click", (event) => {

    if (event.target === modal) {

        modal.style.display = "none";

    }

});

// ============================
// BOTÃO VOLTAR AO TOPO
// ============================

const topBtn =
    document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    }

    else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ============================
// ANIMAÇÃO AO ROLAR
// ============================

const sections =
    document.querySelectorAll("section");

const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.15
        }

    );

sections.forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});

// ============================
// EFEITO PARALLAX HERO
// ============================

const heroImage =
    document.querySelector(".hero-image img");

window.addEventListener("mousemove", (e) => {

    const x =
        (window.innerWidth / 2 - e.pageX) / 50;

    const y =
        (window.innerHeight / 2 - e.pageY) / 50;

    heroImage.style.transform =
        `translate(${x}px, ${y}px)`;

});

// ============================
// ANO AUTOMÁTICO NO FOOTER
// ============================

const footerDate =
    document.querySelector("footer p:last-child");

if (footerDate) {

    footerDate.textContent =
        new Date().getFullYear();

}