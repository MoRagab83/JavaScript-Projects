function Ride_function() {
    var hight, can_ride;
    hight = document.getElementById("hight").Value;
    can_ride = (hight<52) ? "you are too short":"you are tall enough";
    document.getElementById("Ride").innerHTML = can_ride + " to ride.";
}

function vehicle(make, model, year, color) {
    this.vehicle_make=make;
    this.vehicle_model=model;
    this.vehicle_year=year;
    this.vehicle_color=color;
}

var Mo = new vehicle("Dodge","viper", 2020, "red");
var Abbioe = new vehicle("Jeep", "trail hawk",2019,"white and black");
var Zain = new vehicle("ford", "pinto", 1971, "mustard");
function myfunction() {
    document.getElementById("keywords_amd_constructors").innerHTML =
    "Zain drives a "+ Zain.vehicle_color+"-colored"+Zain.vehicle_model+"manufactured in" +Zain.vehicle_year; // using keywoards this/new assign variables //
}

function count_function() {
    document.getElementById("counting").innerHTML = count();
    function count() {
        var starting_point = 9;
        function plus_one () { starting_point += 1;}   // nested fuction // 
        plus_one ();
        return starting_point;
    }
}


