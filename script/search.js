function hideItems(list, hide_items_which_not_specified=true){
    elements = document.querySelector(".container").children;
    for (i=0; i<ITEMS.length; i++){
        if (hide_items_which_not_specified){
            if (!list.includes(i)){
                elements[i].style.display = "none";
            }
            else{
                elements[i].style.display = "flex";
            }
        }
        else{
            if (list.includes(i)){
                elements[i].style.display = "none";
            }
            else{
                elements[i].style.display = "flex";
            }
        }
    }
}

function search(){
    filter = document.querySelector("#search-item").value;
    noSearch = document.getElementById("no-searches-matching");
    noSearch.innerHTML = "";
    if (filter == ""){
        hideItems([], false);
        return;
    }
    filter = filter.toLowerCase();
    list = [];
    for (i=0; i<ITEMS.length; i++){
        item_name = ITEMS[i][0];
        item_name = item_name.toLowerCase();
        if (item_name.includes(filter)){
            list.push(i);
        }
    }
    if (list.length == 0){
        hideItems(list, true);
        noSearch = document.getElementById("no-searches-matching");
        noSearch.innerHTML = "No Result Found";
        return;
    }
    hideItems(list, true)
}