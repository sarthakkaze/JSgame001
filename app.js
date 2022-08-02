


console.log("hello");


var character = document.getElementById("character");
var charimg = document.getElementById("charimg");
var block = document.getElementById("block");
var counter = 0;
var cross = document.getElementById("cross");

cross.addEventListener('click',() => {
    const intro = document.getElementById("introcard");
       intro.style.display = "none";
});

/*function intro(){
    const intro = document.getElementById("introcard");
    setTimeout(() => {
       intro.style.display = "none";
        }, 3000);
}*/

window.addEventListener("keydown", checkKeyPress, false);

function checkKeyPress(key){
    if (key.keyCode == "38"){
        jump();
    }

}


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
      //  alert("YOU are a LOSER!"+Math.floor(counter/100));
        counter = 0;
        block.style.animation = "block 1500ms infinite linear";
    }else{
        counter++;
        document.getElementById("scorespan").innerHTML=Math.floor(counter/100);
    }

}, 10);


document.getElementById("card1").onclick = function(){
    charimg.src = "img/player.png";
};
document.getElementById("card2").onclick = function(){
    charimg.src = "img/player2.png";
};
document.getElementById("card3").onclick = function(){
    charimg.src = "img/player3.png";
};
document.getElementById("card4").onclick = function(){
    charimg.src = "img/player4.png";
};
document.getElementById("card5").onclick = function(){
    charimg.src = "img/player5.png";
};