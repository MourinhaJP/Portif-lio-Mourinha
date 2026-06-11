const translations = {
    en: {
        "nav.about":        "About Me",
        "nav.skills":       "Hard Skills",
        "nav.projects":     "Projects",
        "nav.socials":      "Socials",
        "nav.email":        "EMAIL",
        "nav.interests":    "Interests",
        "nav.teachers":     "Teachers",

        "hero.tag":         "INTRODUCING",
        "hero.description": "Passionate about technology and Red Hot Chili Peppers.",
        "hero.btn1":        "Documents >",
        "hero.btn2":        "Get Started >",

        "about.label":      "01 About Me",
        "about.title":      "Computer Science student,<br><span class='accent'>design dropout.</span>",
        "about.p1":         "Hi! My name is João Pedro and I'm in my first semester studying Computer Science at Cesar School. I'm transitioning from a Design degree and right now my goal is to explore different areas, but so far I've been most drawn to Cybersecurity and fields related to Artificial Intelligence.",
        "about.p2":         "",
        "about.stat1":      "Semester of college",
        "about.stat2":      "Technologies learned",
        "about.stat3":      "Curiosity",

        "skills.label":     "02 Hard Skills",
        "skills.title":     "Tech Stack",
        "skills.cyber.title": "Cybersecurity",

        "projects.label":   "03 Projects",
        "projects.title":   "Selected Work",
        "projects.p1.title": "Simom Silly Adventure",
        "projects.p1.desc":  "A short narrative game built with Bitsy a tiny editor for tiny worlds. Pixel art, dialogue and heart.",
        "projects.p2.title": "HyroxPlanner",
        "projects.p2.desc":  "CLI system in Python for managing HYROX training and competitions with CRUD, countdown to events and an AI agent powered by Groq.",
        "projects.p3.title": "Bloom",
        "projects.p3.desc":  "A course management system for Instituto Solidare a social impact NGO. Built with a multidisciplinary team of CS and Design students at Cesar School.",
        "projects.p4.title": "This Portfolio",
        "projects.p4.desc":  "Personal portfolio built from scratch with HTML, CSS and vanilla JavaScript featuring animations, i18n and a Spline 3D scene.",

        "socials.label":    "04 Socials",
        "socials.title":    "Let's connect.",
        "socials.sub":      "Find me across the web or drop me a message.",

        "projects.view":    "View on GitHub →",
        "projects.view_site": "View Site →",
        "about.repos":      "Repositories",
        "about.semester":   "Semester",
        "about.since":      "Since",

        "footer.role":      "Data Engineer",
        "footer.cv_en":     "Download CV EN",
        "footer.cv_pt":     "Download CV PT",

        "interests.label":  "Areas of Interest",
        "interests.title":  "What drives me.",
        "interests.subtitle": "The fields I'm most curious about and actively exploring.",
        "interests.cyber.title": "Cybersecurity",
        "interests.cyber.desc":  "My biggest passion right now. I've been learning on my own through CTF challenges, studying Linux security, networks and vulnerability analysis. The adversarial nature of the field fascinates me it's a constant game of attack and defense.",
        "interests.ai.title": "Artificial Intelligence",
        "interests.ai.desc":  "AI is reshaping every field I care about from security to data. I'm interested in understanding how models work, how they can be applied to real problems, and where they're heading. Already used AI tools like Groq in personal projects.",
        "interests.data.title": "Data Engineering",
        "interests.data.desc":  "The long-term goal. I want to build the infrastructure that makes data useful pipelines, warehouses, orchestration. The intersection of engineering rigor and real business impact is what draws me to this field.",
        "interests.design.title": "Design & Technology",
        "interests.design.desc":  "Coming from a Design background, I bring a visual sensibility to everything I build. I care about how interfaces feel, how information is structured and how aesthetics and function can coexist this portfolio is proof of that.",

        "teachers.label":   "Inspiring Teachers",
        "teachers.title":   "People who shaped my path.",
        "teachers.subtitle": "Professors at Cesar School whose classes left a mark on how I think and build.",
        "teachers.t1.subject": "Introduction to Computing",
        "teachers.t1.desc":    "The first class that showed me what Computer Science actually is. Erick has a way of making abstract concepts click. I first had him in Design for Digital Systems, and I was genuinely thrilled to find out I'd have him again in Computer Science. His approach to the history and foundations of computing gave me the context I needed to understand where everything else fits.",
        "teachers.t2.subject": "Fundamentals of Programming",
        "teachers.t2.desc":    "The class where Python started making sense. Ana Carolina's patient, structured teaching helped me build a real foundation in programming logic the kind that transfers to any language or problem you face later.",
        "teachers.t3.subject": "Mathematics for Computing / Calculus 1",
        "teachers.t3.desc":    "Math for CS hit different when Felipe connected every concept to real applications in technology. He made me appreciate the mathematical backbone behind the things I want to build from algorithms to machine learning models.",
        "teachers.t4.subject": "Editorial Design",
        "teachers.t4.desc":    "From my time in Design, Christiano's class completely changed how I see layout, typography and visual hierarchy. That sensibility now lives in every interface I build including this portfolio. Design isn't decoration; it's structure.",
    },
    pt: {
        "nav.about":        "Sobre Mim",
        "nav.skills":       "Habilidades",
        "nav.projects":     "Projetos",
        "nav.socials":      "Redes Sociais",
        "nav.email":        "EMAIL",
        "nav.interests":    "Interesses",
        "nav.teachers":     "Professores",

        "hero.tag":         "APRESENTANDO",
        "hero.description": "Apaixonado por tecnologia e Red Hot Chili Peppers.",
        "hero.btn1":        "Documentos >",
        "hero.btn2":        "Começar >",

        "about.label":      "01 Sobre Mim",
        "about.title":      "Estudante de Ciências da Computação,<br><span class='accent'>ex-estudante de Design.</span>",
        "about.p1":         "Prazer! Me chamo João Pedro e estou no primeiro período do curso de Ciências da Computação na faculdade Cesar School. Estou migrando do curso de Design e no momento meu objetivo é conhecer melhor diferentes áreas, mas até o momento estou mais interessado em Segurança Cibernética e áreas relacionadas à Inteligência Artificial.",
        "about.p2":         "",
        "about.stat1":      "Período da faculdade",
        "about.stat2":      "Tecnologias aprendidas",
        "about.stat3":      "Curiosidade",

        "skills.label":     "02 Habilidades",
        "skills.title":     "Tecnologias",
        "skills.cyber.title": "Segurança Cibernética",

        "projects.label":   "03 Projetos",
        "projects.title":   "Trabalhos Selecionados",
        "projects.p1.title": "Simom Silly Adventure",
        "projects.p1.desc":  "Um jogo narrativo curto feito com Bitsy um editor minúsculo para mundos minúsculos. Pixel art, diálogo e coração.",
        "projects.p2.title": "HyroxPlanner",
        "projects.p2.desc":  "Sistema CLI em Python para gerenciar treinos e competições HYROX com CRUD, contagem regressiva para eventos e agente de IA com Groq.",
        "projects.p3.title": "Bloom",
        "projects.p3.desc":  "Sistema de gestão de cursos para o Instituto Solidare uma ONG de impacto social. Desenvolvido em equipe multidisciplinar de alunos de CC e Design da Cesar School.",
        "projects.p4.title": "Este Portfólio",
        "projects.p4.desc":  "Portfólio pessoal construído do zero com HTML, CSS e JavaScript puro com animações, i18n e uma cena 3D no Spline.",

        "socials.label":    "04 Redes Sociais",
        "socials.title":    "Vamos nos conectar.",
        "socials.sub":      "Me encontre na web ou manda uma mensagem.",

        "projects.view":    "Ver no GitHub →",
        "projects.view_site": "Ver Site →",
        "about.repos":      "Repositórios",
        "about.semester":   "Período",
        "about.since":      "Desde",

        "footer.role":      "Engenheiro de Dados",
        "footer.cv_en":     "Baixar CV EN",
        "footer.cv_pt":     "Baixar CV PT",

        "interests.label":  "Áreas de Interesse",
        "interests.title":  "O que me move.",
        "interests.subtitle": "Os campos que mais me intrigam e que estou explorando ativamente.",
        "interests.cyber.title": "Cibersegurança",
        "interests.cyber.desc":  "Minha maior paixão no momento. Venho aprendendo por conta própria através de desafios CTF, estudando segurança Linux, redes e análise de vulnerabilidades. A natureza adversarial da área me fascina é um jogo constante de ataque e defesa.",
        "interests.ai.title": "Inteligência Artificial",
        "interests.ai.desc":  "A IA está reformulando todas as áreas que me interessam de segurança a dados. Quero entender como os modelos funcionam, como podem ser aplicados a problemas reais e para onde estão indo. Já usei ferramentas de IA como Groq em projetos pessoais.",
        "interests.data.title": "Engenharia de Dados",
        "interests.data.desc":  "O objetivo de longo prazo. Quero construir a infraestrutura que torna os dados úteis pipelines, warehouses, orquestração. A interseção entre rigor de engenharia e impacto real nos negócios é o que me atrai nessa área.",
        "interests.design.title": "Design e Tecnologia",
        "interests.design.desc":  "Vindo de uma formação em Design, trago uma sensibilidade visual para tudo que construo. Me importo com como as interfaces se comportam, como a informação é estruturada e como estética e função podem coexistir este portfólio é prova disso.",

        "teachers.label":   "Professores Inspiradores",
        "teachers.title":   "Pessoas que moldaram meu caminho.",
        "teachers.subtitle": "Professores da Cesar School cujas aulas marcaram a forma como penso e construo.",
        "teachers.t1.subject": "Introdução à Computação",
        "teachers.t1.desc":    "A primeira aula que me mostrou o que é Ciência da Computação de verdade. Erick tem uma forma de fazer conceitos abstratos fazerem sentido. Tive ele no Design na cadeira de Sistemas Digitais e fiquei muito feliz quando descobri que teria aula com ele de novo em Ciências da Computação. Sua abordagem sobre a história e os fundamentos da computação me deu o contexto que precisava para entender onde tudo se encaixa.",
        "teachers.t2.subject": "Fundamentos de Programação",
        "teachers.t2.desc":    "A aula onde Python começou a fazer sentido. O ensino paciente e estruturado da Ana Carolina me ajudou a construir uma base sólida em lógica de programação o tipo que se transfere para qualquer linguagem ou problema que você enfrenta depois.",
        "teachers.t3.subject": "Matemática para Computação / Cálculo 1",
        "teachers.t3.desc":    "Matemática para CC ficou diferente quando Felipe conectou cada conceito a aplicações reais em tecnologia. Ele me fez apreciar a espinha dorsal matemática por trás das coisas que quero construir de algoritmos a modelos de machine learning.",
        "teachers.t4.subject": "Design Editorial",
        "teachers.t4.desc":    "Da minha época no Design, a aula do Christiano mudou completamente como vejo layout, tipografia e hierarquia visual. Essa sensibilidade agora vive em cada interface que construo incluindo este portfólio. Design não é decoração; é estrutura.",
    }
};

let currentLang = localStorage.getItem("mourinha_lang") || "en";

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

langToggle.textContent = currentLang === "en" ? "PT" : "EN";
applyTranslations(currentLang);

langToggle.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "pt" : "en";
    langToggle.textContent = currentLang === "en" ? "PT" : "EN";
    localStorage.setItem("mourinha_lang", currentLang);
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
    if (!typing) return;
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
        const href = link.getAttribute("href");
        if (href && href.startsWith("#")) {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth" });
            }
        }
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
        ctx.fillStyle = "rgba(0, 229, 255, 0.6)";
        ctx.fill();
    }
    requestAnimationFrame(animate);
}
animate();

const music = document.getElementById("bg-music");

const spotifyPlayBtn = document.getElementById("spotifyPlayBtn");
const spotifyBarFill = document.getElementById("spotifyBarFill");
const spotifyEq      = document.getElementById("spotifyEq");

const rhcpTracks = [
    "Californication",
    "Under the Bridge",
    "Scar Tissue",
    "Can't Stop",
    "Otherside",
    "By the Way",
    "Give It Away",
    "Soul to Squeeze"
];

let spotifyPlaying = false;
let barProgress = 32; 
let barInterval = null;

function setSpotifyPlaying(play) {
    spotifyPlaying = play;
    localStorage.setItem("mourinha_music", play ? "playing" : "paused");
    if (spotifyPlayBtn) {
        spotifyPlayBtn.textContent = play ? "⏸" : "▶";
        spotifyPlayBtn.style.paddingLeft = play ? "0" : "2px";
    }
    if (spotifyEq) {
        if (play) spotifyEq.classList.remove("paused");
        else       spotifyEq.classList.add("paused");
    }
    if (play) {
        barInterval = setInterval(() => {
            barProgress = Math.min(barProgress + 0.08, 100);
            if (spotifyBarFill) spotifyBarFill.style.width = barProgress + "%";
            if (barProgress >= 100) {
                barProgress = 0;
                nextTrack();
            }
        }, 100);
    } else {
        clearInterval(barInterval);
    }
}

function nextTrack() {
    const trackEl = document.querySelector(".spotify-track");
    if (!trackEl) return;
    const current = trackEl.textContent;
    const others = rhcpTracks.filter(t => t !== current);
    trackEl.textContent = others[Math.floor(Math.random() * others.length)];
    barProgress = 0;
}

if (spotifyPlayBtn) {
    spotifyPlayBtn.addEventListener("click", () => {
        if (spotifyPlaying) {
            if (music) music.pause();
            setSpotifyPlaying(false);
        } else {
            if (music) { music.volume = 0.3; music.play().catch(() => {}); }
            setSpotifyPlaying(true);
        }
    });
}

const spotifyPrev = document.getElementById("spotifyPrev");
const spotifyNext = document.getElementById("spotifyNext");

if (spotifyPrev) {
    spotifyPrev.addEventListener("click", () => {
        barProgress = 0;
        if (spotifyBarFill) spotifyBarFill.style.width = "0%";
        const trackEl = document.querySelector(".spotify-track");
        if (trackEl) {
            const others = rhcpTracks.filter(t => t !== trackEl.textContent);
            trackEl.textContent = others[Math.floor(Math.random() * others.length)];
        }
    });
}

if (spotifyNext) {
    spotifyNext.addEventListener("click", () => {
        barProgress = 0;
        nextTrack();
    });
}

if (spotifyBarFill) spotifyBarFill.style.width = barProgress + "%";

if (music) {
    music.volume = 0.3;
    const musicBtn = document.createElement("button");
    musicBtn.textContent = "♪";
    musicBtn.classList.add("music-btn");
    document.body.appendChild(musicBtn);
    musicBtn.addEventListener("click", () => {
        if (spotifyPlaying) {
            music.pause();
            setSpotifyPlaying(false);
            musicBtn.textContent = "♪";
        } else {
            music.play().catch(() => {});
            setSpotifyPlaying(true);
            musicBtn.textContent = "♬";
        }
    });

    
    if (localStorage.getItem("mourinha_music") === "playing") {
        music.play().catch(() => {});
        setSpotifyPlaying(true);
        musicBtn.textContent = "♬";
    }
}

const themeToggle = document.getElementById("themeToggle");
let lightMode = localStorage.getItem("mourinha_theme") === "light";

document.body.classList.toggle("light", lightMode);
themeToggle.textContent = lightMode ? "☾" : "☀";

themeToggle.addEventListener("click", () => {
    lightMode = !lightMode;
    document.body.classList.toggle("light", lightMode);
    themeToggle.textContent = lightMode ? "☾" : "☀";
    localStorage.setItem("mourinha_theme", lightMode ? "light" : "dark");
});

if (window.innerWidth <= 768) {
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", () => {
            const href = link.getAttribute("href");
            if (href && href.startsWith("#")) {
                const target = document.querySelector(href);
                if (target) window.scrollTo({ top: target.offsetTop, behavior: "smooth" });
            }
        });
    });
}
const terminalBody = document.getElementById("terminalBody");

if (terminalBody) {
    const terminalLines = [
        { type: "cmd",    text: "whoami" },
        { type: "out",    text: "João Pedro · Cesar School · 1º semestre" },
        { type: "cmd",    text: "cat interesses.txt" },
        { type: "out",    text: "→ Cibersegurança · Engenharia de Dados · IA", cls: "t-hacker" },
        { type: "cmd",    text: "ls habilidades/" },
        { type: "out",    text: "python/  html/  css/  javascript/  linux/", cls: "t-hacker" },
    ];

    let lineIndex = 0;
    let charIndex = 0;
    let terminalStarted = false;

    function createCmdLine() {
        const line = document.createElement("div");
        line.className = "t-line";
        const prompt = document.createElement("span");
        prompt.className = "t-prompt";
        prompt.textContent = "› ";
        const cmd = document.createElement("span");
        cmd.className = "t-cmd";
        line.appendChild(prompt);
        line.appendChild(cmd);
        terminalBody.appendChild(line);
        return cmd;
    }

    function createOutLine(cls) {
        const line = document.createElement("div");
        line.className = "t-line t-out" + (cls ? " " + cls : "");
        terminalBody.appendChild(line);
        return line;
    }

    function createCursor() {
        const line = document.createElement("div");
        line.className = "t-line";
        const prompt = document.createElement("span");
        prompt.className = "t-prompt t-blink";
        prompt.textContent = "›";
        line.appendChild(prompt);
        terminalBody.appendChild(line);
    }

    function typeTerminal() {
        if (lineIndex >= terminalLines.length) {
            createCursor();
            return;
        }

        const current = terminalLines[lineIndex];
        const speed = current.type === "cmd" ? 60 : 20;

        if (charIndex === 0) {
            if (current.type === "cmd") {
                current._el = createCmdLine();
            } else {
                current._el = createOutLine(current.cls || null);
            }
            if (current.type === "out") {
                setTimeout(typeChar, 180);
                return;
            }
        }

        typeChar();

        function typeChar() {
            if (charIndex < current.text.length) {
                current._el.textContent += current.text[charIndex];
                charIndex++;
                setTimeout(typeChar, speed);
            } else {
                charIndex = 0;
                lineIndex++;
                const pause = current.type === "cmd" ? 320 : 120;
                setTimeout(typeTerminal, pause);
            }
        }
    }

    const terminalObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !terminalStarted) {
                terminalStarted = true;
                setTimeout(typeTerminal, 600);
            }
        });
    }, { threshold: 0.3 });

    terminalObserver.observe(terminalBody);
}