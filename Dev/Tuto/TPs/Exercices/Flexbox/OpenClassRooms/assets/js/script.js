let menuJs = document.getElementById("menuJs");
let buttonFormation = document.getElementById("buttonFormation");

document.getElementById("buttonFormation").addEventListener("click", () => {
    menuJs.classList.contains("none") ? buttonFormation.innerHTML = "Formation ↑" : buttonFormation.innerHTML = "Formations ↓";
    menuJs.classList.toggle("none");
});

let searchJs = document.getElementById("searchJs");
let buttonSearch = document.getElementById("buttonSearch");

document.getElementById("buttonSearch").addEventListener("click", () => {
    menuJs.classList.contains("none") ? buttonSearch.style.display = "none" : buttonSearch.style.display = "block";
    searchJs.classList.toggle("none");
});

let closeJs = document.getElementById("closeJs");

document.getElementById("closeJs").addEventListener("click", () => {
    searchJs.classList.toggle("none");
    buttonSearch.style.display = "block";
});

