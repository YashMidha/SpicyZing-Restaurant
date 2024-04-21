cartOpen = false;

function toggleCart(){
    if (cartOpen){
        hideItems([], false);
    }
    else{
        hideItems([], true);
    }
    document.querySelector(".information").classList.toggle("hide-element");
    document.querySelector("#no-searches-matching").innerHTML = "";
    cartOpen = !cartOpen;
}