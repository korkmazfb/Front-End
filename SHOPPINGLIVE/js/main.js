const addtocartbuttons = document.getElementsByClassName("games_button");
let cartmessage = 0;
const cartmessagevalue = document.getElementsByClassName(
  "shoppingcart_message"
)[0];
const shoppingmodal = document.getElementById("js--shoppingmodal");
let modalisopen = false;
let buzz = 0;
let iron = 0;
let robot = 0;
let moments = 0;
let triple = 0;
let buzzprice = 0;
let ironprice = 0;
let robotprice = 0;
let momentsprice = 0;
let tripleprice = 0;

for (let i = 0; i < addtocartbuttons.length; i++) {
  addtocartbuttons[i].onclick = function () {
    cartmessage += 1;
    cartmessagevalue.innerHTML = cartmessage;
    switch (addtocartbuttons[i].dataset.product) {
      case "buzz":
        buzz += 1;
        buzzprice += 49;
        break;
      case "ironman":
        iron += 1;
        ironprice += 39;
        break;
      case "robot":
        robot += 1;
        robotprice += 49;
        break;
      case "moments":
        moments += 1;
        momentsprice += 89;
        break;
      case "triple":
        triple += 1;
        tripleprice += 104;
        break;
    }

    if (modalisopen === false) {
      shoppingmodal.style.display = "flex";
      modalisopen = true;
      setTimeout(function () {
        shoppingmodal.style.display = "none";
        modalisopen = false;
      }, 2000);
    }
  };
}

const arrow = document.getElementById("js--arrow");
const checkoutbutton = document.getElementById("js--checkoutbutton");
const checkoutwindow = document.getElementById("js--checkoutwindow");
const cart = document.getElementById("js--cart");
let checkoutisopen = false;
const searchbar = document.getElementById("js--searchbar");
arrow.style.display = "none";

checkoutbutton.onclick = function () {
  if (checkoutisopen === false) {
    document.querySelector("main").style.display = "none";

    checkoutwindow.style.display = "block";
    cart.style.display = "none";
    arrow.style.display = "block";
    checkoutisopen = true;
    document.getElementById("js--amount-buzz").innerHTML = buzz + "x";
    document.getElementById("js--amount-ironman").innerHTML = iron + "x";
    document.getElementById("js--amount-robot").innerHTML = robot + "x";
    document.getElementById("js--amount-moments").innerHTML = moments + "x";
    document.getElementById("js--amount-triple").innerHTML = triple + "x";

    document.getElementById("js--price-buzz").innerHTML = "€" + buzzprice;
    document.getElementById("js--price-ironman").innerHTML = "€" + ironprice;
    document.getElementById("js--price-robot").innerHTML = "€" + robotprice;
    document.getElementById("js--price-moments").innerHTML = "€" + momentsprice;
    document.getElementById("js--price-triple").innerHTML = "€" + tripleprice;
    searchbar.style.display = "none";
    document.getElementsByClassName("searchbar_glass")[0].style.display =
      "none";
    return;
  }
  document.querySelector("main").style.display = "block";
  checkoutwindow.style.display = "none";
  checkoutisopen = false;
  arrow.style.display = "none";
  cart.style.display = "block";
  searchbar.style.display = "block";
  document.getElementsByClassName("searchbar_glass")[0].style.display = "flex";
};

//searchbar

const games = document.getElementsByClassName("games_game");
searchbar.onkeyup = function (event) {
  if (event.keyCode === 13) {
    let searchterm = searchbar.value.toUpperCase().split(" ").join("");
    for (let i = 0; i < games.length; i++) {
      if (games[i].dataset.title.search(searchterm) === -1) {
        games[i].style.opacity = 0.3;
      } else {
        games[i].style.opacity = 1;
      }
    }
  }
};


//de observer zorgt ervoor dat er pas iets opkomt ophet moment dat je bij de aantal % bent van je scherm 
let observer = new IntersectionObserver(
  function(entries){
    //je moet altijd een functie maken bij de observer
    if (entries[0].isIntersecting === true) {
      document.getElementsByTagName("main")[0].classList.add("a-popup");
      //hier haal je main en de popup animatie op
      observer.disconnect();
      // dit beteknt als hij een keer is uitgevoerd kan hij niet opnieuw zichzelf uitvoeren
    } else {
      console.log("voor minder dan 50% in beeld!");
      //dit wordt gezegd als je niet 50% van je beeld bent
    }
  },
  {
    threshold: 0.4,
    // 0.4 beteknt 40% van je beeld
  }
);

observer.observe(document.getElementsByTagName("main")[0]);
//hier observe je de main 

