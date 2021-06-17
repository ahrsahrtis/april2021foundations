function newItem(){ //js variables being created onleft
                    // right side peforms task
    //this assigns users input to variable (item)
    var item = document.getElementById("input").value;
    //this assigns html ul to js variable
    var ul = document.getElementById("list");
    //this creates li element, also assign to var
    var li = document.createElement("li");
    //creates - <text> formatted text and puts in li var
    li.appendChild(document.createTextNode(" - " + item ));
    //appends li contents to ul
    ul.appendChild(li);

    document.getElementById("input").value = "";
    li.onclick = removeItem;
}

document.body.onkeyup = function(e){
    if(e.keyCode == 13) {
        newItem();
    }
};

function removeItem(e){
    e.target.parentElement.removeChild(e.target);
}