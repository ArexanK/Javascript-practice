
// *VARIABLES*
///create a variable, add 10 to it, and alert the value
let num = 10

num = num + 10  //num =+ 10

console.log(num)
alert(num)


// *FUNCTIONS*
//create a function that substracts 4 numbers and alerts the differece

function subFour (n1, n2,n3, n4)
alert(n1 - n2 - n3 - n4)

//create a function that divides one number by another and returns the remainder
function divideTwo (n1, n2)
return n1 % n2


// *CONDIOTNALS*
// create a function that adds two numbers and if the sum is greater that 50 alert Jumanji

function sum(n1, n2){
let sum = n1 +n2
if(sum >50){
    alert ('jumanji')
}
}

//create a function that multiplys three numbers and if the product is divisible by 3 alert zebra

function multiCheck(n1, n2, n3){
    let num = n1 * n2 * n3
    if(num % 3 === 0) {  
        alert('zebra')
    }
}

// *LOOPS*
// create a function that takes in aa word and a number. console.log the word x times where x was tghe number passed in

function loopX(word, num){
    for (let i = 0; i<num; i++){ // index value is 0 but you can also start with 1 
        console.log(word)
    }
}

