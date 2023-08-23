const initApp = () =>{
    const hambugerBtn = document.getElementById("hamburger-button")
    const MobileMenu = document.getElementById("mobile-menu")

    const toggleMenu = () =>{
        MobileMenu.classList.toggle("hidden")
        MobileMenu.classList.toggle("flex")
        hambugerBtn.classList.toggle("toggle-btn")
    }
    hambugerBtn.addEventListener("click",toggleMenu)
    MobileMenu.addEventListener("click",toggleMenu)
}

document.addEventListener("DOMContentLoaded",initApp)