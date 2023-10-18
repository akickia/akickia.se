// openOverlay()
// generateQuote()
openMore()
openNav()

//Function to open and generate overlay
// function openOverlay() {
//   let btnOverlay = document.querySelector(".highlight button")
//   let heroSection = document.querySelector("header")
//     btnOverlay.addEventListener("click", () => {
//       let overlaySection = document.createElement("section")
//       overlaySection.setAttribute("class", "card")
//       overlaySection.classList.add("overlay")
//       overlaySection.innerHTML = `
//       <h1>LIA</h1>
//       <p>LIA står för Lärande i Arbete och innebär praktik på ett företag inom Frontendutveckling. 
//         Ditt företag får tillgång till mig som praktikant under 9 + 10 veckor. Det finns även en möjlighet för mig
//         att göra mitt examensarbete (vecka 9-13) riktat mot företaget.</p>
//       <p>Period 1 - vecka 51 2023 + vecka 1-8 2024</p>
//       <p>Period 2 - vecka 14-23 2024</p>
//       <p>Jag finns i Eskilstuna och arbetar mer än gärna remote eller hybrid. Jag kan pendla ett par dagar/vecka till 
//       Stockholm/Västerås/Örebro vid behov. </p>
//       <p>Vill du veta mer? <a href="mailto:kicki.lindstrand@gmail.com"><b>Kontakta mig via mail</b></a></p>
//       <div class="btns">
//         <a href="https://www.folkuniversitetet.se/vara-skolor/yh-utbildningar/alla-yh-utbildningar/it-data/frontendutvecklare-distans/" target="_blank">
//           <button>Om utbildningen<br>
//           <small>(Extern länk)</small>
//           </button>
//         </a>
//         <a href="files/FE22_kursplaner.pdf" download>
//           <button>Ladda ner kursplaner</button>
//         </a>
//         <a href="files/Kicki Lindstrand CV.pdf">
//           <button>Ladda ner CV</button>
//         </a>
//       </div>`
//       heroSection.appendChild(overlaySection)
//       createCloseBtn(overlaySection)
//   })
// }

//Generate closebutton
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

//Fetch and display quotes
// async function generateQuote() {
//   const quoteEl = document.getElementById('quote')
//   const authorEl = document.getElementById('author')
//   const quoteBtn = document.getElementById('quoteBtn')
//   let n = Math.floor(Math.random() * 160)
//   try {
//   let data = await fetch('https://gobetween.oklabs.org/https://zenquotes.io/api/random')
//   data = await data.json();
//   console.log(data)
//      {
//       quoteEl.innerHTML = data[n].text

//       if (data[n].author === null) {
//         authorEl.innerHTML = '// Unknown'
//       } 
//       else {
//         authorEl.innerHTML = '// '+data[n].author
//       }
//     }
//   quoteBtn.addEventListener('click', generateQuote)
//   }
// catch (error) {
//   console.log(error)
// }
// }

//Open Read more sections
function openMore() {
    let articles = document.querySelectorAll(".main__cards")
    articles.forEach(element => {
      let toggleBtn = element.querySelector(".art_btn")
    toggleBtn.addEventListener("click", () => {
      element.classList.toggle("open")
      if (element.className.includes("open")) {
        toggleBtn.innerHTML = "Läs mindre"
      }
      else {
        toggleBtn.innerHTML = "Läs mer"
      }

    })
  })
}

//Open nav
function openNav() {
  let nav = document.querySelector("nav")
  let btn = document.querySelector(".open-nav")
  btn.addEventListener("click", () => {
    console.log("Test")
    nav.classList.toggle("open")
    if (btn.textContent == "Visa mer") {
      btn.textContent = "Visa mindre"
    } else {
      btn.textContent = "Visa mer"
    }
  })
}