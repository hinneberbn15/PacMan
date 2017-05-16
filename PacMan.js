//list of features to build
//1. have js display the world of brick/coin/ect...
//2. have the pacman move up and down (left, right, can't hit barriers and eat coins, update score - fix for negative's on math barrier moves...?)
//3. Make it multiplayer doing node
//4. Add ghosts and powerpellet?
//$(document).ready(function(){
// window.onload = function() {
    var world = [
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
    ];

    var score = 0;

    var pacman = {
        x: 1,
        y: 1
    };

    function displayWorld() {
        var output = '';
        for (var i = 0; i < world.length; i++) {
            output += "\n<div class='row'>\n";
            for (var j = 0; j < world[i].length; j++) {
                if (world[i][j] == 2) {
                    output += "<div class='brick'></div>";
                } else if (world[i][j] == 1) {
                    output += "<div class='coin'></div>";
                } else if (world[i][j] == 0) {
                    output += "<div class='empty'></div>";
                }
                //output=output+world[i][j];
            }
            output += "\n</div>";
        }
        //console.log(output);
        document.getElementById('world').innerHTML = output;
    }

    function displayPacman() {
        document.getElementById('pacman').style.top = pacman.y * 20 + "px";
        document.getElementById('pacman').style.left = pacman.x * 20 + "px";
    }

    function displayScore() {
        document.getElementById('score').innerHTML = score;
    }

    displayWorld();
    displayPacman();
    displayScore();

    document.onkeydown = function(e) { //this is a callback...
        //may need to add negative protection with the math, not sure why that would ever happen, but play once I get it working...
        
        if (e.keyCode == 37 && world[pacman.y][pacman.x - 1] != 2) { //left
            console.log(e.keyCode + '- we think LEFT');
            document.getElementById('pacman').style.transform = "scaleX(-1)";
            pacman.x-- //-= 1;
        } else if (e.keyCode == 39 && world[pacman.y][pacman.x + 1] != 2) { //right
            console.log(e.keyCode + '- we think RIGHT');
            document.getElementById('pacman').style.transform = "scaleX(1)";
            pacman.x++; // += 1;
        } else if (e.keyCode == 38 && world[pacman.y - 1][pacman.x] != 2) { //up
            console.log(e.keyCode + '- we think UP');
            document.getElementById('pacman').style.transform = "rotate(270deg)";
            pacman.y--; // -= 1;
        } else if (e.keyCode == 40 && world[pacman.y + 1][pacman.x] != 2) { //down
            console.log(e.keyCode + '- we think DOWN');
            document.getElementById('pacman').style.transform = "rotate(90deg)";
            pacman.y++ // += 1;

        }
        else
        {
            console.log(`e.keyCode: ${e.keyCode}`);
        }

        if (world[pacman.y][pacman.x] == 1) {
            world[pacman.y][pacman.x] = 0;
            score +=10;
            displayScore();
            displayWorld();
        }
        displayPacman();
        //console.log(e.keyCode);

        //document.getElementByID('pacman').style.left=50+"px";
    }
// };
//});