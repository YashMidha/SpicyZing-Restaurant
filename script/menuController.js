const ITEMS = [
    ["Pizza", "150", "veg"],
    ["Paneer Roll", "100", "veg"],
    ["Chicken Roll", "120", "non-veg"],
    ["Chocolate Icecream", "80", "veg"],
    ["Strawberry Icecream", "70", "veg"],
    ["Vanilla Icecream", "60", "veg"],
    ["Chicken Sandwich", "120", "non-veg"],
    ["Veg Sandwich", "100", "veg"],
    ["Grilled Sandwich", "120", "veg"],
    ["Cup Cake", "30", "veg"],
    ["Red Velvet Cake", "70", "non-veg"],
    ["Vanilla Cake", "60", "non-veg"],
    ["Butter Coach Cake", "70", "non-veg"],
    ["Redsauce Pasta", "100", "veg"],
    ["Whitesauce Pasta", "100", "veg"],
    ["Veg Noodles", "100", "veg"],
    ["Chicken Noodles", "150", "non-veg"],
];

var cartItems = {};
var total_items = 0;

function resetCart(){
    for (i=0; i<ITEMS.length; i++){
        cartItems[i] = 0;
    }
    total_items = 0;
}

function loadItems(){
    const template = document.querySelector("#items-template");
    var target = document.getElementById("target");
    for (i=0; i<ITEMS.length; i++){
        newNode = document.importNode(template.content, true);
        newNode.querySelector("img").src = "../assets/food_" + (i+1) + ".png";
        newNode.querySelector("h3").innerHTML = ITEMS[i][0];
        newNode.querySelector(".item-info p").innerHTML = "Price: ₹" + ITEMS[i][1];
        newNode.querySelector(".control-item-count .item-id").innerHTML = i;
        target.appendChild(newNode);
    }
    resetCart();
}

function toggleQuantityButtons(obj){
    childrens = obj.children;
    for (i=0; i<childrens.length; i++){
        childrens[i].classList.toggle("hide-element");
    }
}

function updateCartItemNumber(){
    obj = document.querySelector(".number-of-items");
    obj.innerHTML = total_items;
    if (total_items == 1){
        obj.classList.remove("hide-element");
    }
    else if(total_items == 0){
        obj.classList.add("hide-element");
    }
}

function decreaseQuantity(obj){
    element = obj.parentElement;
    id = parseInt(element.querySelector(".item-id").innerHTML);
    obj.parentElement.querySelector("p").innerHTML = --cartItems[id];
    if (cartItems[id] == 0){
        toggleQuantityButtons(element);
    }
    total_items--;
    updateCartItemNumber();
}

function increaseQuantity(obj){
    element = obj.parentElement;
    id = parseInt(element.querySelector(".item-id").innerHTML);
    obj.parentElement.querySelector("p").innerHTML = ++cartItems[id];
    if (cartItems[id] == 1){
        toggleQuantityButtons(element);
    }
    total_items++;
    updateCartItemNumber();
}

window.onload = loadItems();