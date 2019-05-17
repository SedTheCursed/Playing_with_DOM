const nbParagraphs = document.querySelectorAll("p").length
console.log(`Il y a ${nbParagraphs} paragraphe${nbParagraphs>1 ? "s" : ""} dans la page.\n`)

const coucouContent = document.getElementById("coucou").innerHTML
console.log(`Le contenu de l'element ayant l'ID "coucou" est :\n\t${coucouContent}\n`)

const url = document.querySelectorAll("a")[2].href
console.log(`L'url du troisième lien de la page est ${url}\n`)

const countMe = document.querySelectorAll(".compte-moi").length
console.log(`Il y a ${countMe} element${countMe>1 ? "s" : ""} avec la classe "compte-moi" sur la page.`)


const countMeLi = document.querySelectorAll("li.compte-moi").length
console.log(`Ìl y a ${countMeLi} element${countMeLi>1 ? "s" : ""} de liste avec la classe "compte-moi".`)

const countMeOlLi = document.querySelectorAll("ol li.compte-moi").length
console.log(`Ìl y a ${countMeOlLi} element${countMeOlLi>1 ? "s" : ""} de liste ordonnée avec la classe "compte-moi".`)

const hiddenLi = document.querySelector("div ul:nth-of-type(2) li:first-child").innerHTML
console.log(`Le contenu de l'element de liste est :\n\t${hiddenLi}\n`)