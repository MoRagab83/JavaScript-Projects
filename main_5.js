function full_sentence(){
    var part_1 = "I have";
    var part_2 = "made this";
    var part_3 = "into a complete";
    var part_4 = "sentence.";
    var whole_sentence =part_1.concat(part_2,part_3,part_4);
    document.getElementById("concatenate").innerHTML = whole_sentence; // concatrnate // 
}

function slice_method(){
    var sentence = "All work and no play makes johnny a dull boy.";
    var section = sentence.slice(27,33);
    document.getElementById("slice").innerHTML = section;  // slice method // 
}

function string_method()  {
    var x = 182;
    document.getElementById("numbers_to_string").innerHTML = x.toString();  // string method // 
}

function precision_method()  {
    var x = 12938.3029384766289;
    document.getElementById("precision").innerHTML = x.toPrecision(10);  // precision method // 
}

