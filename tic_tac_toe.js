// restart
var restart=document.querySelector("#b");
// grab all squares
var square=document.querySelector("td");

// clear all the square
function clearboard(){
    for(var i=0; i < square.length;i++){
        square[i].textContent=" ";
    }
}

restart.addEventListener('click',clearboard);