openOverlay()

function openOverlay() {
  let linksOverlay = document.querySelectorAll(".links .card")
  linksOverlay.forEach(link => {
    link.addEventListener("click", (e) => {
      let linkId = e.target.id
      console.log(linkId)
      let contentArticles = document.querySelectorAll(".main__stuff article")
      contentArticles.forEach(article => {
        article.style.display = "none"
        article.style.animationName = "moveUp"
        if (linkId === article.classList.value) {
          article.style.display = "flex"
          createCloseBtn(article)

        }
      })
    })
  })
}

function createCloseBtn(article) {
  let closeBtn = document.createElement("p")
  closeBtn.classList.add("close")
  closeBtn.innerText = "X"
  article.appendChild(closeBtn)
  closeBtn.addEventListener("click", () => {
    article.style.animationName = "moveDown"
    article.removeChild(closeBtn)
  })
}