const number = Math.floor(Math.random() * 100) + 1;


function checkAnswer(){
let guess = parseInt(document.getElementById("guess").value);
    if(guess == number){
        document.getElementById("text").innerHTML = "Congrats you guess the number!"
    }else if(guess > number){
        document.getElementById("text").innerHTML = "Too high try guessing lower"
    }else if(guess < number){
        document.getElementById("text").innerHTML = "TOO LOW!"
    }
}