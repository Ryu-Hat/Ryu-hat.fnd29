'use strict'

function gethashID(hashIDName) {
    if (hashIDName) {
        let links = document.querySelectorAll(".tab li a");
        links.forEach(link => {
            let idName = link.getAttribute("href");
            if (idName === hashIDName) {
                let parentElm = link.parentElement;
                document.querySelectorAll(".tab li").forEach(li => li.classList.remove("active"));
                parentElm.classList.add("active");
                document.querySelectorAll(".area").forEach(area => area.classList.remove("isActive"));
                let targetElement = document.querySelector(hashIDName);
                if (targetElement) {
                    targetElement.classList.add("isActive");
                }
            }
        });
    }
}

document.querySelectorAll(".tab a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault(); 
        let idName = this.getAttribute("href");
        gethashID(idName);
    });
});

// window.addEventListener("load", function() {
//     let firstTabLi = document.querySelector(".tab li:first-of-type");
//     if (firstTabLi) {
//         firstTabLi.classList.add("active");
//     }
//     let firstArea = document.querySelector(".area:first-of-type");
//     if (firstArea) {
//         firstArea.classList.add("isActive");
//     }
//     let hashName = location.hash;
//     gethashID(hashName);
// });