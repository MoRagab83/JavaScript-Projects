function displayresult() {
    document.getElementById("Dictionary").innerHTML = result(); // event created to call results //

  }

  function my_Dictionary() {
    var animal = {
        species:"dog",
        color:"black",
        breed:"labrador",
        age:5,
        sound:"bark!"   // function to add my dictionary // 
    };
    delete animal.sound;  // deleting the sound of my dictionary // 
document.getElementById("Dictionary").innerHTML = animal.sound; // calling an event from HTML //
  }

