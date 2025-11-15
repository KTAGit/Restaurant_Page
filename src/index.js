import { pageLoad } from "./pageLoad.js";
import { menuPage } from "./menu.js";
import { aboutUs } from "./about.js";

const home = document.querySelector("#home-btn")
const menu = document.querySelector("#menu-btn")
const about = document.querySelector("#about-btn")
const buttons = { home, menu, about}

pageLoad()

function highlightSelect(selected) {
    Object.entries(buttons).forEach(([name, element]) => {
        element.style.color = name === selected ? "black" : "rgb(147, 146, 146)"
    })
}

function pageSwitch() {

    home.addEventListener("click", () =>  {
        pageLoad()
        highlightSelect("home") 
    })

    menu.addEventListener("click", () => {
        menuPage()
        highlightSelect("menu")
    })

    about.addEventListener("click", () => {
        aboutUs()
        highlightSelect("about")
    })
}

pageSwitch()
