/* 1) This robot roams around a 2D grid. It starts at (0, 0) facing North. After each time it moves, the robot rotates 90 degrees clockwise. 
Given the amount the robot has moved each time, you have to calculate the robot's final position.

To illustrate, if the robot is given the movements 20, 30, 10, 40 then it will move:

20 steps North, now at (0, 20)
30 steps East, now at (30, 20)
10 steps South. now at (30, 10)
40 steps West, now at (-10, 10)
...and will end up at coordinates (-10, 10).

Examples:
trackRobot(20, 30, 10, 40) --> [-10, 10]

trackRobot() --> [0, 0]
// No movement means the robot stays at (0, 0).

trackRobot(-10, 20, 10) --> [20, -20]
// The amount to move can be negative.

Notes:
Each movement is an integer (whole number). */

//Moves the robot will make
let move1 = [20,30,10,40];
let move2 = [0,0];
let move3 = [-10,20,10];

//Call and print out the function results
console.log(trackRobot(move1));//should return [-10,10]
console.log(trackRobot(move2));//should return [0,0]
console.log(trackRobot(move3));//should return [20, -20]

//function to check movements
function trackRobot(move){
    //Origin of robot's location
    let startSpot = [0,0];
    //If its only 2 moves it'll add both to the robot's origin location
    if(move.length === 2){
        startSpot[0]+=move[0];
        startSpot[1]+=move[1];
    }
    //If its 3 moves because the robot turns right after each move the idex of move 0 and move 3 will subtract from each other
    //Move 1 will not be affected and will just be added to the origin location
    if(move.length === 3){
        totalfirst = move[2] - move[0]
        startSpot[0]+=totalfirst;
        startSpot[1]-=move[1];
    }
    //If its 4 moves Move[0 & 2] will subtract from each other and same with Move[1 & 3].
    //Then it is added to the origin location
    if(move.length === 4){
        totalfirst = move[2] - move[0];
        totalsecond = move[3] - move[1]
        startSpot[0]+=totalfirst;
        startSpot[1]+=totalsecond;
    }     
    
    return startSpot;
}