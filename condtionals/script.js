// create a conditional that checks their age

//if under 16, tell them they can not drive
//if under 18, tell them they can't hate from outside the club, because they can't even get it

//if under 21, tell them they can not drink
//if under 25, tell them they can not rent cars affordably
//if under 30, tell them they can not rent fancy cars afoordably
//if under over 30, tell them there is nothinh left to look forward too







//-- hareder
//on click of the h1
//take the value from the input
//place the result of the conditional in the paragraph

// document.querySelector('h1').addEventListener('click', checkAge)

// function checkAge() {
//     let age = Number(document.querySelector('input').value)
//     if (age < 16) {
//         console.log('they can not drive')
//     } else if (age < 18) {
//         console.log('they cant hate from outside the club, because they cant eve get in')
//     } else if (age < 21) {
//         console.log('they can not drink')
//     } else if (age < 25) {
//         console.log('they can not rent cars affordably')
//     } else if (age < 30) {
//         console.log('they cant rent fancy car')
//     } else {
//         console.log('there is nothing left to loook forward too')
//     }
// }



document.querySelector('h1').addEventListener('click', checkAge)
const p = document.querySelector('p') // added paragraph inner text to it 
function checkAge() {
    let age = Number(document.querySelector('input').value)
    if (age < 16) {
        p.innerText = 'they can not drive'
    } else if (age < 18) {
        p.innerText = 'they cant hate from outside the club, because they cant eve get in'
    } else if (age < 21) {
        p.innerText = 'they can not drink'
    } else if (age < 25) {
        p.innerText = 'they can not rent cars affordably'
    } else if (age < 30) {
        p.innerText = 'they cant rent fancy car'
    } else {
        p.innerText = 'there is nothing left to loook forward too'
    }
}