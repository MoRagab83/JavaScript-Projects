//this variable keeps track of who's turn it is .//
let activePlayer = 'x';
//this array stores an array of moves.we use this to determine win conditions.//
let selectedSquares = [];

//this function is for placing an xor o in square.//
function placeXoro(squareNumber)  {
    //this condition ensures a square hasn't be selected already.//
    //the .some() method is used to check each element of selectedsquare array to see if it contains the square number clicked on.//
    if (!selectedSquares.some(element => element.includes(squareNumber)))  {
        // this variable retrieves the html element id that was clicked//
        let select = document.getElementById(squareNumber);
        //this condition checks who's turn it is //
        if (activePlayer === 'x')   {
            // if activeplayer is equal to 'x', the x.png is placed in html.
            select.style.backgroundImage = 'url("x.png")';
            //Active player may only be 'X' or 'O' so, if not 'X' must be 'O'
        } else {
            // if activepalyer is equal to 'o', the o.png is placed in html//
            select.style.backgroundImage = 'url("o.png")';
        }
        // squareNumber and activeplayer are concatenated together and added to array // 
        selectedSquares.push(squareNumber + activePlayer);
        //this calls a function to check for any win condition//
        checkWinConditions();
        // this condition is for changing the active player // 
        if (activePlayer === 'x') {
            //if active player is 'x' change it to 'o'//
            activePlayer = 'o';
            // if active player is anything other than 'x'.
        } else {
            //change the activeplayer to 'x'//
            activePlayer = 'x';
        }
        //this function plays placment sound//
        audio('place.mp3');
        //tjis conditon checks to see if it is computers turn//
        if(activePlayer === 'o') {
            //This function disables clicking for computer choice
            disableClick();
            //this function waits 1 secound before placing the image and enabling click//
            setTimeout(function(){computersTurn(); }, 1000); 
        }
        //returning true is needed for our computerturn()  function to work//
        return true;
    }
    //this function results in a random square being selected//
    function computersTurn ()  {
        //this boolean is needed for our while loop//
        let success = false;
        //this variable stores a random number 0-8
        let pickASquare;
        //this condition allows our while loop to keep trying if a square is selected already//
        while (!success)  {
            //A random number between 0 and 8 is selected
            pickASquare = String(Math.floor(Math.random() * 9));
            //if the random number evaluates returns true,the square hasn't been 
            if (placeXoro(pickASquare))  {
                //this line calls the function//
                placeXoro(pickASquare);
                //this changes our boolean and ends the loop//
                success = true;
            };
        }
    }
}

//this function parses the selectedSquares array to search for win condition.
// drawWinLine function is called to draw line if condition is met//
function checkWinConditions() {
    // x 1, 1, 2, conditon.
    if  (arrayIncludes('0x', '1x', '2x')) {drawWinLine(50,100,558,100); }
    // x 3, 4, 5 condition.
    else if (arrayIncludes('3x', '4x', '5x')) { drawWinLine(50, 304, 558, 304); }
    // x 0, 6, 7, 8 condition.
    else if(arrayIncludes('6x', '7x', '8x'))  { drawWinLine(50, 508, 558, 508); }
    // x 0, 3, 6 condition.
    else if (arrayIncludes('0x', '3x', '6x')) { drawWinLine(100, 50, 100, 558); }
    // x 1, 4, 7 condition.
    else if (arrayIncludes('1x', '4x', '7x')) { drawWinLine(304, 50,304,558); }
    // x 2, 5, 8 condition.
    else if (arrayIncludes('2X', '5X','8X')) { drawWinLine(508, 50, 508, 558); }
    // x 6, 4, 2 condition.
    else if (arrayIncludes('6x', '4x', '2x')) { drawWinLine(100,508,510,90); }
    // x 0, 4, 8 condition.
    else if (arrayIncludes('0X','4X','8X'))  { drawWinLine(100, 100, 520, 520); }
    // o 0, 1, 2 condition.
    else if (arrayIncludes('0o', '1o', '2o'))  { drawWinLine(50, 100, 558,100); }
    // o 3, 4, 5 condition.
    else if (arrayIncludes('3o','4o', '5o'))  { drawWinLine(50,304,558,304); }
    // o 6, 7, 8 condition.
    else if (arrayIncludes('6o', '7O', '8o'))  { drawWinLine(50,508,558,508); }
    // o 0, 3, 6 condition.
    else if (arrayIncludes('0o','3o','6o'))  { drawWinLine(100, 50, 100, 558); }
    // o 1, 4, 7 condition.
    else if (arrayIncludes('1o', '4o', '7o'))  { drawWinLine(304, 50,304,558); }
    // o 2, 5, 8 condition.
    else if (arrayIncludes('2o', '5o', '8o'))  { drawWinLine(508, 50, 508, 558); }
    // o 0, 4, 8 condition.
    else if(arrayIncludes('6o', '4o', '2o'))  { drawWinLine(100, 100, 520, 520); }
    // o 0, 4, 8 condition.
    else if (arrayIncludes('0o','4o','8o'))  { drawWinLine(100,100,520, 520); }
    //this condition checks for tie.if none of the above condition register
    // and 9 squares are selected, the code executes.
    else if (selectedSquares.length >= 9)  {
        //this function plays the tie game sound
        audio('tie.mp3');
        //this function sets a .3 second timer before the resetgame is called.
        setTimeout(function () { resetGame();}, 1000);
    }
    //this function checks if an array includes 3 strings.
    // it is used to check for each win condition.
    function arrayIncludes(squareA, squareB, squareC)  { 
        // the next 3 variable will be used to check for 3 in a row
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        //if the 3 variables we pass are all included in our array true is
        //returned and our else if condition executes the drawWinLine function.
        if (a === true && b === true && c === true)   { return true; }
    }

}

//this function makes our body element temporarily unclickable.
function disableClick()  {
    //this makes our body unclickable.
    body.style.pointerEvents = 'none';
    //this makes our body clickable again after 1 second.
    setTimeout(function() { body.style.pointerEvents = 'auto';}, 1000);
}

//this function takes a string parameter of the path you set earlier for 
// placment sound ('./media/place.mp3')
function audio(audioURL)  { 
    //we create a new audio object and we pass the path as a parameter.
    let audio = new Audio(audioURL);
    //play method plays our audio sound.
    audio.play();
}

//this function utilizes html canvas to draw win lines.
function drawWinLine(coordX1, coordY1, coordX2, coordY2)  {
    //this line accesses our html canvas element.
    const canvas = document.getElementById('win-lines');
    //this line gives us access to methods and properties to use on canvas.
    const c = canvas.getContext('2d');
    //this line indicates where the start of a lines x axis is.
    let x1 = coordX1,
    //this line indicates where the start of a lines y axis is.
    y1 = coordY1,
    //this line indicates where the end of the line x axis is.
    x2 = coordX2,
    //this line indicates where the end of the lines x axis is.
    y2 = coordY2,
    //this variable stores temporary x axis data we update in our animation loop.
    x = x1,
    //this variable stores temporary y axis data we update in our animation loop.
    y = y1;
    //this function interacts with the canvas
    function animateLineDrawing()  { 
        //this variable creATES THE LOOP FOR WHEN THE GAME ENDS IT RESTARTS.
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //this method clears content from last loop iteration.
        c.clearRect(0, 0, 608, 608);
        //this method starts a new path
        c.beginPath();
        //this method indicates the end point in our line.
        c.moveTo(x1, y1);
        // this method set the end point in our line.
        c.lineTo(x, y);
        //this method set the color of our line.
        c.lineWidth = 10;
        //this method sets the color of our line 
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        //this method draws everything we laid outabove.
        c.stroke();
        //this condition checks if we've reached the endpoint.
        if (x1 <= x2 && y1 <= y2) {
            //this condition adds 10 to the previous end x point.
            if (x < x2)   { x += 100;}
            //this condition adds 10 to the previous end y point.
            if (y < y2)  { y += 10;}
            //this condition cancels our animation loop if reach the end points.
            if (x >= x2 && y >= y2)  { cancelAnimationFrame(animationLoop);}
            }
            //this condition is similar to the one above.
            //it was necessary for the 6, 4, 2 win condition.
            if (x1 <= x2 && y1>= y2)  { 
                if (x< x2) { x += 10;}
                if (y > y2)  { y -= 10;}
                if (x >= x2 && y <= y2) {cancelAnimationFrame(animationLoop);}
                }
            }
            //this function clears our canvas after our win line is drawn.
            function clear()  { 
                //this line starts our animation loop.
                const animationLoop = requestAnimationFrame(clear);
                //this line clears our canvas 
                c.clearRect(0, 0, 608, 608);
                //this line stops our animation loop.
                cancelAnimationFrame(animationLoop);
            }
            //this line disallows clicking while the win sound is playing
            disableClick();
            //this line plays the win sounds.
            audio('winGame.mp3');
            //this line calls our main animation loop.
            animateLineDrawing();
            //this line waits 1 second.
            // then, clears canvas, resets the game and allows clicking again.
            setTimeout(function () { clear(); resetGame();}, 1000);
        }
    
//this function resets the game in a tie or a win.
function resetGame()  {
    //this for loop iterates through each html square elemnt
    for (let i = 0; i < 9; i++)  {
        //this variable gets the html elemnt of i.
        let square = document.getElementById(String(i));
        //this removes our elemnts backgroundimage.
        square.style.backgroundImage = '';
    }
    //this resets our array so it is empty and we can start over.
    selectedSquares = [];
}
