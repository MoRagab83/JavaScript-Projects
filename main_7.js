var instruments = ["guitar","drums","piano","bass","violin","trumpet","flute"];
var content = "";
var y;
function for_loop() {
    for (y = 0;y<instruments.length;y++)  {
        content += instruments[y] + "<br>";
    }
    document.getElementById("list_of_instruments").innerHTML = content; // for loop //
}

function cat_pics() {
    var cat_picture = [];
    cat_picture[0] = "sleeping";
    cat_picture[1] = "playing";
    cat_picture[2] = "eating";        // array // 
    cat_picture[3] = "purring";
    document.getElementById("cat").innerHTML = "in this Picture, the cat is " + cat_picture[2] + ".";
}

function count_to_ten()  {
    var digit = "";
    var x = 1;
    while (x<11) {
        digit += "<br>" + x;
        x++;
    }
    document.getElementById("counting_to_ten").innerHTML = digit;  // while loop // 
}

var x = 82;
document.write(x);
{
    let x = 33;
    document.write("<br>" + x);    // using Let //
}
document.write("<br>" + x);

let car = {
    make: "Dodge",
    model: "Viper",
    year:"2021",
    color:"red",
    description : function ()   {
        return "the car is a " + this.year + this.color + this.make + this.model;  // using let // 
    }
};
document.getElementById("car_object").innerHTML = car.description();




