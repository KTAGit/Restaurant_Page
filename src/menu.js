import Cheeseburger from "./img/Cheeseburger.png"
import DoubleCheeseburger from "./img/Double Cheeseburger.png"
import TripleCheeseburger from "./img/Triple Cheeseburger.png"
import ChickenSandwich from "./img/Chicken Sandwich.png"
import DoubleChickenSandwich from "./img/Double Chicken Sandwich.png"
import SpicyChickenSandwich from "./img/Spicy Chicken Sandwich.png"
import NycClassicDog from "./img/The NYC Classic Dog.png"
import ChiliMeltDog from "./img/The Chili Melt Dog.png"
import AvocadoBaconCrunchDog from "./img/The Avocado Bacon Crunch Dog.png"

function createItem(name) {
    const rate = (Math.random() * (5 - 4.5) + 4.50).toFixed(1)
    const price = (Math.random() * (9.99 - 6) + 6).toFixed(2)

    return { name, price, rate}
}



export function menuPage () {
    const content = document.querySelector("#content")
    content.innerHTML = ""
    const images = [
        Cheeseburger, DoubleCheeseburger, TripleCheeseburger,
        ChickenSandwich, DoubleChickenSandwich, SpicyChickenSandwich,
        NycClassicDog, ChiliMeltDog, AvocadoBaconCrunchDog
    ]
    const itemName = [
        "Cheeseburger", "Double Cheeseburger", "Triple Cheeseburger",
        "Chicken Sandwich", "Double Chicken Sandwich", "Spicy Chicken Sandwich",
         "NYC Classic Dog", "Chili Melt Dog", "Avocado Bacon Crunch Dog"
    ]


    for (let i = 0; i < itemName.length; i++) {
        
        const boxContainer = document.createElement("div")
        const foodName = document.createElement("div")
        const price = document.createElement("div")
        const rate = document.createElement("div")
        const priceRateContainer = document.createElement("div")
        const img = document.createElement("img")
        const addToCartBtn = document.createElement("button")

        boxContainer.classList.add("item-container")
        foodName.classList.add("food-name")
        img.classList.add("item-image")
        priceRateContainer.classList.add("price-rate-container")
        price.classList.add("price")
        rate.classList.add("rate")
        addToCartBtn.classList.add("add-to-cart-btn")

        const item = createItem(itemName[i])
        foodName.textContent = item.name
        price.textContent = `$${item.price}`
        rate.textContent = ` ★ ${item.rate}`
        addToCartBtn.textContent = "Add To Bag"
        img.src = images[i]
        
        boxContainer.appendChild(addToCartBtn)
        boxContainer.appendChild(img)
        boxContainer.appendChild(foodName)
        priceRateContainer.appendChild(price)
        priceRateContainer.appendChild(rate)
        boxContainer.appendChild(priceRateContainer)
        
        content.appendChild(boxContainer)
        console.log(item)
    }




}

