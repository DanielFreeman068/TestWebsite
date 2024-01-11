function question() {
    alert(generateRandomInsult());
    return generateRandomInsult();
}

function generateRandomInsult() {
    var bodyPart = ["face", "foot", "nose", "hand", "head"];
    var adjective = ["hairy and", "extremely", "insultingly", "astonishingly"];
    var adjectiveTwo = ["stupid", "gigantic", "fat", "horrid", "scary"];
    var animal = ["baboon", "sasquatch", "sloth", "naked cat", "warthog"];
    
    var bodyPart = bodyPart[Math.floor(Math.random() * 5)];
    var adjective = adjective[Math.floor(Math.random() * 4)];
    var adjectiveTwo = adjectiveTwo[Math.floor(Math.random() * 5)];
    var animal = animal[Math.floor(Math.random() * 5)];
    
    var randomInsult = "Your" + " " + bodyPart + " " + "is more" + " " + adjective + " " + adjectiveTwo + " " + "than a" + " " + animal + "'s" + " " + bodyPart + ".";
    

    return randomInsult;
}

let x = prompt("Are you Stupid?")
while (str.toLowerCase(x) != "yes"){
    x = prompt("Are you Stupid?")
}
