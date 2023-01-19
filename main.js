function displayresult() {
    document.getElementById("math").innerHTML = result(); // event created to call results //

  }

function addition_function() {
    var addition = 2+2;
    document.getElementById ("math") .innerHTML = "2+2" = "+ addition;" // an addition function //
}

function subtraction_function(){
    var subtraction = 5 - 2;
    document.getElementById("math") .innerHTML = "5 - 2 =" + subtraction; // a subtraction function // 
}

function multiplication(){
    var simple_math = 6 * 8;
    document.getElementById("math") .innerHTML = "6 * 8 = " + simple_math; // multipilication function //

}

function division(){
    var simple_math = 84 / 6; 
    document.getElementById("math").innerHTML = "48 / 6 = " + simple_math; // division function //
}

function more_math(){
    var simple_math = (1 +2) * 10 / 2 - 5; // multipel operation // 
    document.getElementById("math").innerHTML = " 1 plus 2, multipied by 10 divided in half and then subtracted by 5 equals" + simple_math;
}

function modulus_operator (){
    var simple_math = 25 % 6; // modulus operation // 
    document.getElementById("math").innerHTML = "when you divide 25 by 6 you have a remainder of: " + simple_math; 
}

function negation_operatior(){
    var x = 10;
    document.getElementById("math").innerHTML = -x; // unary operator // 
}

var x = 5;
x++;
document.write(x); // increment operator // 

var x = 5.25
x--;
document.write(x); // decrement operator // 

window.alert(math.random()* 100);
