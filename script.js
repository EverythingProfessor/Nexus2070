window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    let progress = 0;

    const interval = setInterval(() => {
        progress += Math.random() * 15;

        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);

            setTimeout(() => {
                loader.style.opacity = "0";
                loader.style.pointerEvents = "none";
            }, 800);
        }

        loader.innerHTML = `
            <div class="loader-text">
                <h1>NEXUS</h1>
                <p>INITIALIZING CORE... ${Math.floor(progress)}%</p>
            </div>
        `;
    }, 200);
});
const cursor = document.getElementById("cursor");
const cursor2 = document.getElementById("cursor2");

document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    cursor.style.left = x + "px";
    cursor.style.top = y + "px";

    cursor2.style.left = x + "px";
    cursor2.style.top = y + "px";
});
document.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 25;
    const y = (window.innerHeight / 2 - e.pageY) / 25;

    const orb = document.querySelector(".orb");

    if (orb) {
        orb.style.transform = `translate(${x}px, ${y}px)`;
    }
});
const typing = document.getElementById("typing");

const messages = [
    "SYSTEM ONLINE...",
    "NEURAL NETWORK ACTIVE...",
    "WELCOME, COMMANDER.",
    "ALL SYSTEMS NOMINAL.",
    "NEXUS CORE STABLE."
];

let index = 0;
let charIndex = 0;

function type() {
    if (!typing) return;

    let current = messages[index];

    typing.innerHTML = current.slice(0, charIndex);

    charIndex++;

    if (charIndex > current.length) {
        charIndex = 0;
        index = (index + 1) % messages.length;
        setTimeout(type, 1200);
    } else {
        setTimeout(type, 60);
    }
}

type();
const particleContainer = document.getElementById("particles");

function createParticle() {
    const p = document.createElement("div");

    p.style.position = "absolute";
    p.style.width = "2px";
    p.style.height = "2px";
    p.style.background = "cyan";
    p.style.boxShadow = "0 0 10px cyan";

    p.style.left = Math.random() * window.innerWidth + "px";
    p.style.top = Math.random() * window.innerHeight + "px";

    particleContainer.appendChild(p);

    let x = parseFloat(p.style.left);
    let y = parseFloat(p.style.top);

    function animate() {
        y += 0.3;

        if (y > window.innerHeight) {
            y = 0;
            x = Math.random() * window.innerWidth;
        }

        p.style.top = y + "px";
        p.style.left = x + "px";

        requestAnimationFrame(animate);
    }

    animate();
}

for (let i = 0; i < 80; i++) {
    createParticle();
}
function updateClock() {
    const clock = document.getElementById("clock");

    if (!clock) return;

    const now = new Date();

    clock.innerText =
        now.getHours().toString().padStart(2, "0") + ":" +
        now.getMinutes().toString().padStart(2, "0") + ":" +
        now.getSeconds().toString().padStart(2, "0");
}

setInterval(updateClock, 1000);
updateClock();
const enterBtn = document.getElementById("enterBtn");
const terminalBtn = document.getElementById("terminalBtn");

const dashboard = document.getElementById("dashboard");
const terminal = document.getElementById("terminal");

enterBtn.addEventListener("click", () => {
    dashboard.scrollIntoView({ behavior: "smooth" });
});
terminalBtn.addEventListener("click", () => {
    terminal.scrollIntoView({ behavior: "smooth" });
});
enterBtn.addEventListener("click", () => {
    document.body.style.boxShadow = "0 0 80px cyan inset";
    setTimeout(() => {
        dashboard.scrollIntoView({ behavior: "smooth" });
    }, 300);
});
const contactBtn = document.getElementById("contactBtn");
const contactModal = document.getElementById("contactModal");
const closeModal = document.getElementById("closeModal");

contactBtn.addEventListener("click", () => {
    contactModal.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
    contactModal.classList.add("hidden");
});

// click outside box closes it
contactModal.addEventListener("click", (e) => {
    if (e.target === contactModal) {
        contactModal.classList.add("hidden");
    }
});