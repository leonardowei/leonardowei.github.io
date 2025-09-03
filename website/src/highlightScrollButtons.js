const sections = document.querySelectorAll("main .container");
const navLinks = document.querySelectorAll("nav a");


function highlightScrollButtons() {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 160;
        if (scrollY >= sectionTop) {
        current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
        }
    });
}


window.addEventListener("scroll", highlightScrollButtons);
highlightScrollButtons();