const rootelement = document.querySelector(":root");
const modeswitch = document.getElementById("mode");

modeswitch.checked = false;

modeswitch.onchange = function(){
    if(modeswitch.checked === true){
        rootelement.style.setProperty("--background-color", "white");
        rootelement.style.setProperty("--font--color", "black");
        rootelement.style.setProperty("--product-border-color", "black");
        return;
    }
    rootelement.style.setProperty("--background-color", "#212730");
    rootelement.style.setProperty("--font--color", "#d4d4d4");
    rootelement.style.setProperty("--product-border-color", "rgba(212, 212, 212, 0.4)");




}