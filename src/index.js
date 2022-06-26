import {loadPage} from "./loadPage";
import {loadMenu} from "./menu";
import {loadContact} from "./contact";

const divContent = document.querySelector("#content")
loadPage(divContent);

const homeBtn = document.querySelector("#homeBtn")
const menuBtn = document.querySelector("#menuBtn")
const contactBtn = document.querySelector("#contactBtn")

homeBtn.addEventListener("click", () => {
    divContent.innerHTML = "",
    loadPage(divContent);
})
menuBtn.addEventListener("click", () => {
    divContent.innerHTML = "";
    loadMenu(divContent);
})
contactBtn.addEventListener("click", () => {
    divContent.innerHTML = "";
    loadContact(divContent);
})

