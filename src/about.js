
export function aboutUs() {
    const content = document.querySelector("#content")
    content.innerHTML = ""

    const container = document.createElement("div")
    const story = document.createElement("p")
    const whyUs = document.createElement("p")
    const visit = document.createElement("p")
    const AboutUs = document.createElement("h2")
    const uniqueness = document.createElement("h2")
    const ContactUs = document.createElement("h2")

    container.classList.add("about-container")
    story.classList.add("story")
    whyUs.classList.add("why-us")
    visit.classList.add("visit")

    AboutUs.textContent = "About Us"
    story.textContent = "Burger Joint was founded in 1980 with one simple mission: to make burgers that taste as good as they make you feel. What started as a small passion project in the best city has grown into a community favorite known for bold flavors, fresh ingredients, and a genuine love for good food."
    uniqueness.textContent = "What Makes Us Different"
    whyUs.textContent = "At Burger Joint, we believe a great burger starts with great ingredients. \n That’s why we use: \n Fresh, never-frozen beef \n House-baked buns made daily \n Locally sourced produce whenever possible \n Signature sauces crafted in-house \n Every burger is cooked to order, packed with flavor, and served with a smile."
    ContactUs.textContent = "Visit or Contact Us"
    visit.textContent = "📍 Address: 1234 Street Ave, Best City, USA\n 📞 Phone: 000-000-0000\n 🌐 Website: SOON\n ⏰ Hours: 24/7"

    container.appendChild(AboutUs)
    container.appendChild(story)
    container.appendChild(uniqueness)
    container.appendChild(whyUs)
    container.appendChild(ContactUs)
    container.appendChild(visit)
    content.appendChild(container)
}