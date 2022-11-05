'use strict';

const header = document.querySelector("header");

document.addEventListener("scroll", (e) => {
    if(window.scrollY>20){
        header.classList.add("header-shadow")
    }else{
        header.classList.remove("header-shadow")
    }
})

function onInit() {
    console.log(header);
}