const button = document.querySelector(".enter")

button.addEventListener("click", () => {

document.body.style.opacity = 0

setTimeout(() => {

window.location.href = "archive.html"

}, 600)

})