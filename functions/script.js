//--Easy
//create a function that substracts two numbers and alerts the difference
function subTwoAndAlert (num1, num2){
    let difference = num1 - num2

    alert(difference)
}
 //subTwoAndAlert (10,7)


//create a function that divides three numbers and console logs the quotient
function divideThreeAndLog (n1, n2, n3){
    console.log(n1 / n2 / n3)
}

//divideThreeAndLog(12, 4, 3)

//create a function that multiplys three numbers and returns the product
function multiThreeAndReturn( robot, unicorn, attack){
    let product = robot * unicorn * attack
    return product
}
//let returnedVal = multiThreeAndReturn(2,3,5)
//console.log(returnedVal)



//--Meduim
//create s function that takes in three numbers.
// Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number

function sumAndDivide (n1, n2, n3){
    return ( n1 + n2) % n3
}

//const sumAndDivide = (a,b,c) 



//--hard
//create a function that takes in 4 numbers. Multiply the first two numbers. if the product is greater than 100 add the sum of the last two numbers
//if the product is greater than 100 add the sum of the last two numbers and console log the value. if the product is less that 100, subtract the difference of the last two numbers and console log the value.
//if the product is 100, multiply the first three numbers together and alert the remainder of deviding the fourt number.

function mathOut (n1, n2, n3, n4){
    let product = n1 * n2
    if(product > 100){
        console.log(produuct + n3 + n4)

    } else if (product < 100){
        console.log(product - n3 - n4)
    } else{
        alert( (n1*n2*n3)% n4)
    }
}