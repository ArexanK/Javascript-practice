//create a function that has a loop that prints '21' 21 times to the console log and then call that function

//bonus can you make it print '21' 21 times to the dom?


//for each loop
function loop21() {
    for (i = 1; i <= 21; i++) //<= is less or equal to 
    // i++ is + 1
    {
        // console.log('21')
        document.querySelector('#Javascript').innerText = '21'

    }
}

loop21()