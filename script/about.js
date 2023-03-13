let moreEl = document.querySelectorAll(".about .section__more .card")

openMore()

function openMore() {
  let articles = document.querySelectorAll(".more")
  articles.forEach(element => {
    let openBtns = element.querySelectorAll(".art_btn")
    openBtns.forEach(openBtn => {
      openBtn.addEventListener("click", () => {
    element.classList.toggle("open")
    if (element.className.includes("open")) {
      openBtn.innerHTML = "Läs mindre"
    }
    else {
      openBtn.innerHTML = "Läs mer"
    }

  })})
})
}