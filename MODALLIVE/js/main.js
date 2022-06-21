
//sifu

const sifu = document.getElementById("js--sifu")
const switches = document.getElementsByClassName("product")
sifu.onclick = function(){
    for(let i = 0; i < switches.length; i++){
        switches[i].style.display = "none";
    }
    document.getElementById("js--sifu-modal").style.display = "grid";

}


const closesifu = document.getElementById("js--sifu-button");
closesifu.onclick = function(){
    document.getElementById("js--sifu-modal").style.display = "none";
    for(let i = 0; i < switches.length; i++){
        switches[i].style.display = "block";
    }

}

//legion


const legion = document.getElementById("js--legion")
legion.onclick = function(){
    for(let i = 0; i < switches.length; i++){
        switches[i].style.display = "none";
    }
    document.getElementById("js--legion-modal").style.display = "grid";

}


const closelegion = document.getElementById("js--legion-button");
closelegion.onclick = function(){
    document.getElementById("js--legion-modal").style.display = "none";
    for(let i = 0; i < switches.length; i++){
        switches[i].style.display = "block";
    }

}

//rocket

const rocket = document.getElementById("js--rocket")
rocket.onclick = function(){
    for(let i = 0; i < switches.length; i++){
        switches[i].style.display = "none";
    }
    document.getElementById("js--rocket-modal").style.display = "grid";

}


const closerocket = document.getElementById("js--rocket-button");
closerocket.onclick = function(){
    document.getElementById("js--rocket-modal").style.display = "none";
    for(let i = 0; i < switches.length; i++){
        switches[i].style.display = "block";
    }

}

//miles


const miles = document.getElementById("js--miles")
miles.onclick = function(){
    for(let i = 0; i < switches.length; i++){
        switches[i].style.display = "none";
    }
    document.getElementById("js--miles-modal").style.display = "grid";

}


const closemiles = document.getElementById("js--miles-button");
closemiles.onclick = function(){
    document.getElementById("js--miles-modal").style.display = "none";
    for(let i = 0; i < switches.length; i++){
        switches[i].style.display = "block";
    }

}