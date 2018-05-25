//Global variables for player and computer scores
let PLAYER = 0;
let COMPUTER = 0;

function play(input){
    let output = rps(input);
    let message = document.getElementById("outputText");
    message.innerHTML = output;
    scoreText = "Score = " + PLAYER.toString();
    score = document.getElementById("scores");
    score.innerHTML = scoreText;


}
// takes a number 0,1,2 as the player move. compares to a random computer move to see who wins rps
// returns "win", "lose", "draw"
function rps(player){
    let outcome = "error";
    let com = Math.floor(Math.random()*3);
    if (player == com){
        outcome = "draw";
    } else if  (player - com == 1 || player - com == -2){
        PLAYER += 5;
        outcome = "win";
    } else{
        PLAYER -= 2;
        outcome = "lose";
    }
    let moves = ["rock","paper","scissors"];
    let message = "You chose " + moves[player] + ", computer chose " + moves[com] + ". You "+ outcome+".";
    return message;
}