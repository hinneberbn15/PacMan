//list of features to build
//1. have js display the world of brick/coin/empty - done
//2. have the pacman move up,down,left,right - done
//3. make sure pacman can't go through barriers and transports to the other side - done
//4. make the score go up! - done
//5. Add power pellet - partially done
//6. Add Fruit...
//7. Add ghosts!
//8. Add set interval to keep pacman moving, he shouldn't stop...
//9. Make it multiplayer doing node

//2=barrier, 1=coin, 0=empty, 3=power pellet, 4=fruit, 5=pink_ghost, 6=red_ghost, 7=teal_ghost, 8=orange_ghost
var world = [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2],
    [2, 3, 2, 0, 0, 2, 1, 2, 0, 0, 0, 2, 1, 2, 2, 1, 2, 0, 0, 0, 2, 1, 2, 0, 0, 2, 3, 2],
    [2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 1, 2],
    [2, 1, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 2],
    [2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 0, 2, 2, 0, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2],
    [0, 0, 0, 0, 0, 2, 1, 2, 2, 2, 2, 2, 0, 2, 2, 0, 2, 2, 2, 2, 2, 1, 2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 2, 1, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 1, 2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 2, 1, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 1, 2, 0, 0, 0, 0, 0],
    [2, 2, 2, 2, 2, 2, 1, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 1, 2, 2, 2, 2, 2, 2],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 5, 6, 7, 8, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [2, 2, 2, 2, 2, 2, 1, 2, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 2, 2, 1, 2, 2, 2, 2, 2, 2],
    [0, 0, 0, 0, 0, 2, 1, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 1, 2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 2, 1, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 1, 2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 2, 1, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 1, 2, 0, 0, 0, 0, 0],
    [2, 2, 2, 2, 2, 2, 1, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 1, 2, 2, 2, 2, 2, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2],
    [2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2],
    [2, 3, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 3, 2],
    [2, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 2],
    [2, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 2],
    [2, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2],
    [2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
];
// var world = [
//     [2, 2, 2, 2, 2],
//     [2, 0, 1, 1, 2],
//     [2, 1, 1, 1, 2],
//     [2, 1, 1, 1, 2],
//     [2, 2, 2, 2, 2]
// ];

var score = 0;
var numCoins = 0;


var pacman = {
    x: 13,
    y: 23
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
                if(score == 0)
                    numCoins++;
            } else if (world[i][j] == 0) {
                output += "<div class='empty'></div>";
            } else if (world[i][j] == 3) {
                output += "<div class='power_pellet'></div>";
            } else if (world[i][j] == 4) {
                output += "<div class='fruit'></div>";
            } else if (world[i][j] == 5) {
                output += "<div class='pink_ghost'></div>";
            } else if (world[i][j] == 6) {
                output += "<div class='red_ghost'></div>";
            } else if (world[i][j] == 7) {
                output += "<div class='teal_ghost'></div>";
            } else if (world[i][j] == 8) {
                output += "<div class='orange_ghost'></div>";
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
function displayGhost() {
    document.getElementById('ghost').style.top = ghost.y * 20 + "px";
    document.getElementById('ghost').style.left = ghost.x * 20 + "px";
}

function displayScore() {
    document.getElementById('score').innerHTML = score;
}

displayWorld();
displayPacman();
displayScore();
console.log(Math.random());
document.onkeydown = function(e) { //this is a callback...
        //block for ghost!
        // if(e.keyCode in (27,38,39,40)){
        //     //get movement setup for ghost...
        // }
        //block for pacman!
        
        // clearInterval(id);

        // var id = setInterval(frame, 10);
        // function frame(){
        //     //want to call this "frame" function to move pacman no matter which arrow
        //     //left arrow interval play...
            
        //     if (
        //         ) {}    clearInterval(id);
        // }
        


        if (e.keyCode == 37 && world[pacman.y][pacman.x - 1] != 2) { //left
            document.getElementById('pacman').style.transform = "scaleX(-1)";
            console.log(pacman.y,pacman.x);
            pacman.x-- //-= 1;
            if(pacman.x==-1){
                pacman.x=27;
            }
        } else if (e.keyCode == 39 && world[pacman.y][pacman.x + 1] != 2) { //right
            document.getElementById('pacman').style.transform = "scaleX(1)";
            console.log(pacman.y,pacman.x);
            pacman.x++; // += 1;
            if(pacman.x==28){
                pacman.x=0;
            }                
        } else if (e.keyCode == 38 && world[pacman.y - 1][pacman.x] != 2) { //up
            document.getElementById('pacman').style.transform = "rotate(270deg)";
            console.log(pacman.y,pacman.x);
            pacman.y--; // -= 1;
        } else if (e.keyCode == 40 && world[pacman.y + 1][pacman.x] != 2) { //down
            document.getElementById('pacman').style.transform = "rotate(90deg)";
            console.log(pacman.y,pacman.x);
            pacman.y++ // += 1;
        }
        
        if (world[pacman.y][pacman.x] == 1) {
            world[pacman.y][pacman.x] = 0;
            score +=10;
            displayScore();
            displayWorld();
        } else if(world[pacman.y][pacman.x] == 3){
            world[pacman.y][pacman.x] = 0;
            score +=50; //points for now...
            //do something more fun here, chase ghosts after adding them...
        } else if(world[pacman.y][pacman.x] == 4){
            world[pacman.y][pacman.x] = 0;
            score +=100;
            //do something more fun here, chase ghosts after adding them...
        }

        // function move(){
        //     var elem = document.getElementById("myBar"); 
        //     var width = 0;
        //     var id = setInterval(frame, 10);
        //     function frame() {
        //         if (width == 100) {
        //             clearInterval(id);
        //         } else {
        //             width++; 
        //             elem.style.width = width + '%'; 
        //         }
        //     }
        // }

        displayPacman();
    if(score/10 == numCoins)
        document.getElementById('win').style.display = 'block';
}
