var randomnum = Math.random()
randomnum= Math.floor((randomnum *6)+1 );
var randomnum1 = Math.random()
randomnum1= Math.floor((randomnum1 *6)+1 );

document.querySelectorAll("img")[0].setAttribute("src","dice"+randomnum+".png");
document.querySelectorAll("img")[1].setAttribute("src","dice"+randomnum1+".png");
 alert("Hello,welcome to my Mini Dice Game. This is just a game to check who will throw the better dice.")
var player1 = prompt("Player 1, fill in your name: ")
var player2 = prompt("Player 2, fill in your name: ")
if (randomnum > randomnum1) {
    document.querySelector("h1").innerHTML="Player 1 won";
    alert("Congrats " + player1 + " ,you won!!!!!!")
}
else if (randomnum1 > randomnum){
    document.querySelector("h1").innerHTML="Player 2 won";
    alert("Congrats " + player2 + " ,you won!!!!!!")
}
else {
    document.querySelector("h1").innerHTML="draw";
    alert("Oops Stalemate, Nobody won")
}
