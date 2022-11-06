'use strict';

const header = document.querySelector("header");

document.addEventListener("scroll", (e) => {
    if (window.scrollY > 20) {
        header.classList.add("header-shadow")
    } else {
        header.classList.remove("header-shadow")
    }
})

function onInit() {
    console.log(header);
    renderSkills()
}

function renderSkills() {
    const skills = getSkills();

    var strHTMLs = skills.map(skill => `
            <div class="skill-preview">
                <div>${skill.svg}</div>
                <b>${skill.label}</b>
            </div>
    `)

    strHTMLs = strHTMLs.join('')
    const elSkills = document.querySelector(".skills-container")
    elSkills.innerHTML = strHTMLs
}