import { pageLoad } from "./pageLoad.js";
import { menuPage } from "./menu.js";

const home = document.querySelector("#home-btn")
const menu = document.querySelector("#menu-btn")
const about = document.querySelector("#about-btn")

pageLoad()

function pageSwitch() {

    home.addEventListener("click", () =>  {
        pageLoad()
    })

    menu.addEventListener("click", () => {
        menuPage()
    })
}

pageSwitch()
