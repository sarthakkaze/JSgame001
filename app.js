


console.log("hello");


var character = document.getElementById("character")
var block = document.getElementById("block");
var counter = 0;

function jump(){
    if(character.classList != "animate"){
    character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
    
}






var checkdead = setInterval(function(){
    var chartop =
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockleft =
    parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if(blockleft<70 && blockleft>40 && chartop>=180){
        block.style.animation = "none";
        alert("YOU are a LOSER!"+Math.floor(counter/100));
        counter = 0;
        block.style.animation = "block 1500ms infinite linear";
    }else{
        counter++;
        document.getElementById("scorespan").innerHTML=Math.floor(counter/100);
    }

}, 10);