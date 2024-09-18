const navbar = document.querySelector(".navbar");
const navbarmobile = document.querySelector(".navbar__mobile");
const button = document.querySelector(".burguer");

button.addEventListener('click', function() {
    navbarmobile.classList.toggle('active')
})

window.addEventListener('scroll', function() {
    if (this.window.pageYOffset > 0) return navbar.classList.add('active')
    return navbar.classList.remove('active')
})
