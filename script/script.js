function temp(){
    console.log("yes");
}

var count = 0;

function create(){
    const template = document.querySelector("template");
    var tgt = document.getElementById("target");
    node = document.importNode(template.content, true);
    node.querySelector("h2").innerHTML = count;
    count++;
    tgt.appendChild(node);
    console.log("done");
}

function hide(){
    k = document.querySelectorAll(".container div");
    for (i=0; i<k.length;i++){
        if(k[i].querySelector("h2").innerHTML == 2){
            console.log(k[i].classList.toggle("hide-element"));
        }
    }

}
