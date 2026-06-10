const translations = {
    en: {
        "nav.about":        "About Me",
        "nav.skills":       "Hard Skills",
        "nav.projects":     "Projects",
        "nav.socials":      "Socials",
        "nav.email":        "EMAIL",

        "hero.tag":         "INTRODUCING",
        "hero.description": "Passionate about technology and Red Hot Chili Peppers.",
        "hero.btn1":        "Documents >",
        "hero.btn2":        "Get Started >",

        "about.label":      "01 — About Me",
        "about.title":      "Computer Science student,<br><span class='accent'>design dropout.</span>",
        "about.p1":         "Hi! My name is João Pedro and I'm in my first semester studying Computer Science at Cesar School. I'm transitioning from a Design degree and right now my goal is to explore different areas, but so far I've been most drawn to Cybersecurity and fields related to Artificial Intelligence.",
        "about.p2":         "",
        "about.stat1":      "Semester of college",
        "about.stat2":      "Technologies learned",
        "about.stat3":      "Curiosity",

        "skills.label":     "02 — Hard Skills",
        "skills.title":     "Tech Stack",
        "skills.cyber.title": "Cybersecurity",

        "projects.label":   "03 — Projects",
        "projects.title":   "Selected Work",
        "projects.p1.title": "Simom Silly Adventure",
        "projects.p1.desc":  "A short narrative game built with Bitsy — a tiny editor for tiny worlds. Pixel art, dialogue and heart.",
        "projects.p2.title": "HyroxPlanner",
        "projects.p2.desc":  "CLI system in Python for managing HYROX training and competitions — with CRUD, countdown to events and an AI agent powered by Groq.",
        "projects.p3.title": "Bloom",
        "projects.p3.desc":  "A course management system for Instituto Solidare — a social impact NGO. Built with a multidisciplinary team of CS and Design students at Cesar School.",
        "projects.p4.title": "This Portfolio",
        "projects.p4.desc":  "Personal portfolio built from scratch with HTML, CSS and vanilla JavaScript — featuring animations, i18n and a Spline 3D scene.",

        "socials.label":    "04 — Socials",
        "socials.title":    "Let's connect.",
        "socials.sub":      "Find me across the web or drop me a message.",

        "footer.role":      "Data Engineer",
        "footer.cv_en":     "Download CV — EN",
        "footer.cv_pt":     "Download CV — PT",
    },
    pt: {
        "nav.about":        "Sobre Mim",
        "nav.skills":       "Habilidades",
        "nav.projects":     "Projetos",
        "nav.socials":      "Redes Sociais",
        "nav.email":        "EMAIL",

        "hero.tag":         "APRESENTANDO",
        "hero.description": "Apaixonado por tecnologia e Red Hot Chili Peppers.",
        "hero.btn1":        "Documentos >",
        "hero.btn2":        "Começar >",

        "about.label":      "01 — Sobre Mim",
        "about.title":      "Estudante de Ciências da Computação,<br><span class='accent'>ex-estudante de Design.</span>",
        "about.p1":         "Prazer! Me chamo João Pedro e estou no primeiro período do curso de Ciências da Computação na faculdade Cesar School. Estou migrando do curso de Design e no momento meu objetivo é conhecer melhor diferentes áreas, mas até o momento estou mais interessado em Segurança Cibernética e áreas relacionadas à Inteligência Artificial.",
        "about.p2":         "",
        "about.stat1":      "Período da faculdade",
        "about.stat2":      "Tecnologias aprendidas",
        "about.stat3":      "Curiosidade",

        "skills.label":     "02 — Habilidades",
        "skills.title":     "Tecnologias",
        "skills.cyber.title": "Segurança Cibernética",

        "projects.label":   "03 — Projetos",
        "projects.title":   "Trabalhos Selecionados",
        "projects.p1.title": "Simom Silly Adventure",
        "projects.p1.desc":  "Um jogo narrativo curto feito com Bitsy — um editor minúsculo para mundos minúsculos. Pixel art, diálogo e coração.",
        "projects.p2.title": "HyroxPlanner",
        "projects.p2.desc":  "Sistema CLI em Python para gerenciar treinos e competições HYROX — com CRUD, contagem regressiva para eventos e agente de IA com Groq.",
        "projects.p3.title": "Bloom",
        "projects.p3.desc":  "Sistema de gestão de cursos para o Instituto Solidare — uma ONG de impacto social. Desenvolvido em equipe multidisciplinar de alunos de CC e Design da Cesar School.",
        "projects.p4.title": "Este Portfólio",
        "projects.p4.desc":  "Portfólio pessoal construído do zero com HTML, CSS e JavaScript puro — com animações, i18n e uma cena 3D no Spline.",

        "socials.label":    "04 — Redes Sociais",
        "socials.title":    "Vamos nos conectar.",
        "socials.sub":      "Me encontre na web ou manda uma mensagem.",

        "footer.role":      "Engenheiro de Dados",
        "footer.cv_en":     "Baixar CV — EN",
        "footer.cv_pt":     "Baixar CV — PT",
    }
};

let currentLang = "en";

function applyTranslations(lang) {
    const t = translations[lang];

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (t[key] !== undefined) el.textContent = t[key];
    });

    document.querySelectorAll("[data-i18n-html]").forEach(el => {
        const key = el.getAttribute("data-i18n-html");
        if (t[key] !== undefined) el.innerHTML = t[key];
    });

    document.documentElement.lang = lang;
}

const langToggle = document.getElementById("langToggle");

langToggle.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "pt" : "en";
    langToggle.textContent = currentLang === "en" ? "PT" : "EN";
    applyTranslations(currentLang);
});

const typingTexts = {
    en: "João Pedro Mourinha",
    pt: "João Pedro Mourinha"
};

const typing = document.querySelector(".typing");
let typeIndex = 0;
let typeTimeout = null;

function startTyping(lang) {
    clearTimeout(typeTimeout);
    typeIndex = 0;
    typing.textContent = "";
    const word = typingTexts[lang];

    function type() {
        if (typeIndex < word.length) {
            typing.textContent += word.charAt(typeIndex);
            typeIndex++;
            typeTimeout = setTimeout(type, 90);
        }
    }
    type();
}

langToggle.addEventListener("click", () => {
    startTyping(currentLang);
});

startTyping(currentLang);

const header = document.querySelector("header");
let lastScroll = 0;

window.addEventListener("scroll", () => {
    const current = window.scrollY;
    if (current > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
    lastScroll = current;
});

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            
            if (entry.target.classList.contains("projects-list")) {
                entry.target.querySelectorAll(".project-item").forEach((item, i) => {
                    setTimeout(() => item.classList.add("visible"), i * 120);
                });
            }
            
            if (entry.target.classList.contains("about-right")) {
                entry.target.querySelectorAll(".about-stat").forEach((stat, i) => {
                    setTimeout(() => stat.classList.add("visible"), i * 130);
                });
            }
            
            if (entry.target.classList.contains("socials-grid")) {
                entry.target.querySelectorAll(".social-card").forEach((card, i) => {
                    setTimeout(() => card.classList.add("visible"), i * 100);
                });
            }
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-stagger, .projects-list, .about-right, .socials-grid"
).forEach(el => revealObserver.observe(el));

const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("show");
    });
}, { threshold: 0.1 });

document.querySelectorAll(".content, .buttons, section").forEach(el => {
    heroObserver.observe(el);
});

const links = document.querySelectorAll("nav a");
const sections = [...document.querySelectorAll("section[id]")];

links.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        if (target) target.scrollIntoView({ behavior: "smooth" });
    });
});

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        if (scrollY >= section.offsetTop - 200) current = section.id;
    });
    links.forEach(a => {
        a.classList.remove("active");
        if (a.getAttribute("href") === `#${current}`) a.classList.add("active");
    });
});

const topBtn = document.createElement("button");
topBtn.textContent = "↑";
topBtn.classList.add("top-btn");
document.body.appendChild(topBtn);

topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 400 ? "block" : "none";
});

const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.zIndex = "-1";
canvas.style.opacity = "0.4";
canvas.style.pointerEvents = "none";

let particles = [];

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

for (let i = 0; i < 60; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        r: Math.random() * 2
    });
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
    }
    requestAnimationFrame(animate);
}
animate();

const music = document.getElementById("bg-music");
music.volume = 0.3;

const musicBtn = document.createElement("button");
musicBtn.textContent = "♪";
musicBtn.classList.add("music-btn");
document.body.appendChild(musicBtn);

let playing = false;
musicBtn.addEventListener("click", () => {
    if (playing) {
        music.pause();
        musicBtn.textContent = "♪";
    } else {
        music.play();
        musicBtn.textContent = "♬";
    }
    playing = !playing;
});

const themeToggle = document.getElementById("themeToggle");
let lightMode = false;

themeToggle.addEventListener("click", () => {
    lightMode = !lightMode;
    document.body.classList.toggle("light", lightMode);
    themeToggle.textContent = lightMode ? "☾" : "☀";
});

if (window.innerWidth <= 768) {
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", () => {
            window.scrollTo({
                top: document.querySelector(link.getAttribute("href")).offsetTop,
                behavior: "smooth"
            });
        });
    });
}