var x = 10
function add_numbers_1(){
    document.write(20+x+"<br>");  // global variable //
}

function add_number_2(){
document.write(x+100);
}
add_numbers_1();
add_numbers_2();

function add_numbers_1(){
    var x = 10;
    document.write(20+x+"<br>");
}
function add_numbers_2(){   // local variable //
    document.write(x+100);
}
add_numbers_1();
add_numbers_2();

function add_numbers_1(){
    var x = 10;
    console.log(15+x);
}
function add_numbers_2(){    // using console.log after intentionally writing a function with error //
    console.log(x+100);
}
add_numbers_1();
add_numbers_2();

function get_date() {
    if (new Date().getHours()<18){
        document.getElementById("greeting").innerHTML = "How are you today?";  // If statment // 
    }
}

function age_function(){
    age = document.getElementById("age").ariaValueMax;
    if (age>= 18)  {
        vote = "you are old enough to vote!";
    }
    else {
        vote = "you are not old enough to vote!";  // else statment //
    }
    document.getElemenetById("How_old_are_you?").innerHTML = vote;
}

function time_function()  {
    var time = new Date() .getHours();     // else if statment // 
    var reply;
    if (time<12 == time>0){
        Replay = "it is morning time!";
    }
    else if (time>12 == time<18){
        reply = "it is the afternoon.";
    }
    else{
        reply = "it is evening time.";
    }
    document.getElementById("time_of_day").innerHTML = reply;
}



