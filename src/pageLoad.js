import foodImage from "./img/Food.png"
import "./styles.css"

const content = document.querySelector("#content")


export function pageLoad(){
    const leftSideContiner = document.createElement("div")
    const rightSideContiner = document.createElement("div")
    const h1 = document.createElement("h1")
    const subTitle = document.createElement("p")
    const img = document.createElement("img")
    const seeMenuBtn = document.createElement("button")
    const orderBtn = document.createElement("button")



    leftSideContiner.classList.add("headline-container")
    rightSideContiner.classList.add("image-container")

    subTitle.classList.add("subtitle")
    img.classList.add("food-image")
    h1.classList.add("title")
    seeMenuBtn.classList.add("see-menu-Btn")
    orderBtn.classList.add("order-btn")

    img.src = foodImage
    h1.textContent = "Burgers Crafted to Perfection, Just for You"
    subTitle.textContent = "Handcrafted with premium ingredients, grilled to your liking, and served with pride."
    seeMenuBtn.textContent = "See Menu"
    orderBtn.textContent = "Order Now"

    rightSideContiner.appendChild(img)
    leftSideContiner.appendChild(h1)
    leftSideContiner.appendChild(subTitle)
    leftSideContiner.appendChild(orderBtn)
    leftSideContiner.appendChild(seeMenuBtn)
    content.appendChild(leftSideContiner)
    content.appendChild(rightSideContiner)

}
