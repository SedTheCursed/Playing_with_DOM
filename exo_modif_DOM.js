function changeTitles() {
    document.querySelector("h1.jumbotron-heading").innerText = "Ce que j'ai appris à THP"
    document.querySelector("h1.jumbotron-heading + p").innerText = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !"
}

function changeCallToActions() {
    const main = document.querySelector("section.jumbotron a:first-child")
    const secondary = main.nextElementSibling

    main.innerText = "OK je veux tester !"
    main.href = "http://www.thehackingproject.org"
    secondary.innerHTML = "Non Merci"
    secondary.href = "https://www.pole-emploi.fr/accueil/"
}

function changeLogoName() {
    const brand=document.querySelector("header a.navbar-brand strong")

    brand.innerText =  "The THP Experience"
    brand.style.fontSize = "2em"
}

function populateImages() {
    const imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"]
    const cardImg = document.querySelectorAll("img.card-img-top")

    for(let i = 0, l = cardImg.length; i < l; i++) {
        cardImg[i].src = imagesArray[i]
    }
}

function deleteLastCards() {
    const cardsRow = document.querySelector("div.album div.row")
    const cards = document.querySelectorAll("div.album div.row>div")

    for (let i = 1; i <= 3; i++) {
        cardsRow.removeChild(cards[cards.length - i])
    }
}

function changeCardsText() {
    const cardTexts = document.querySelectorAll(".card-text")
    const description = ["L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web","Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML", "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."]

    for (let i = 0; i<3; i++) { cardTexts[i].innerText = description[i]}
}

function changeViewButtons() {
    const viewButtons = document.querySelectorAll("div.card-body div.btn-group button:first-child")

    //{classlist} permet de recuperer uniquement la classList de l'element plutôt que son intégralité.
    //https://openclassrooms.com/fr/courses/4664381-realisez-une-application-web-avec-react-js/4664806-modernisez-votre-javascript-avec-es2015#/id/r-4718497 
    viewButtons.forEach(({classList}) => {
        classList.add("btn-success")
        classList.remove("btn-outline-secondary")
    })
}

function pyramid() {
    const newRow = document.createElement("div")
    const jsCard = document.querySelector(".album .container .row div:nth-of-type(3)")

    jsCard.parentElement.removeChild(jsCard)
    newRow.appendChild(jsCard)
    document.querySelector(".album .container").appendChild(newRow)
}

function compose() {
    changeTitles()
    changeCallToActions()
    changeLogoName()
    populateImages()
    deleteLastCards()
    changeCardsText()
    changeViewButtons()
    pyramid()
}

compose()