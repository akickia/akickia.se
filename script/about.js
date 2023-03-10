let moreEl = document.querySelectorAll(".more")

openMore()

function openMore() {
    moreEl.forEach(element => {
      element.addEventListener("click", () => {
        element.classList.toggle("open")
      })
    })
}