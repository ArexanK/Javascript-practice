//document.querySelectorAll = grabs all specific elements that have that class (contestant) in the DOM(html)
const contestants = document.querySelectorAll('.contestant')

// this adds an eventListener to each element class (forEach)
Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose))


function checkForRose(click) {
    // click target = looking for a specific class that contains('rose') in HTML 
    if (click.target.classList.contains('rose')) {
        // toogle the hidden class in HTML
        document.querySelector('#nikki').classList.toggle('hidden');

    } else {
        alert("Wrong!"); // if it doesn''t have the class (rose) than we know it's not nikki so it alerts wrong!

    }

    // outcome nikki is the winning contestant!

}