// document = is the page rendering of HTML & CSS
// querySelector= returns the first element ('#andi / claire/ sharleen') withing HTML that matches the specified selector
// click = when you click on it run the set of instructions 


// document.querySelector looking into HTML selecting image of (andi) from the DOM (html) and storing it in variable const andi
// by taking the name and also using it as a variable you can use it multiply times in javascript. it makes your code look cleaner.
//
const andi = document.querySelector('#andi')
const claire = document.querySelector('#claire')
const sharleen = document.querySelector('#sharleen')


// grab the (h2 id)
document.querySelector('#andiNext').addEventListener('click', andiNext)
document.querySelector('#claireNext').addEventListener('click', claireNext)
document.querySelector('#sharleenNext').addEventListener('click', sharleenNext)


function andiNext() {

    andi.classList.toggle('hidden') // no "#" cause it's a class and not an id
    // toggle is like a switch on and off, if it already has "hidden" it will remove it, if it doesnt have "hidden" it will add it

    claire.classList.add('hidden')
    sharleen.classList.add('hidden')


}

function claireNext() {

    andi.classList.add('hidden')
    claire.classList.toggle('hidden')
    sharleen.classList.add('hidden')


}

function sharleenNext() {

    andi.classList.add('hidden')
    claire.classList.add('hidden')
    sharleen.classList.toggle('hidden')


}