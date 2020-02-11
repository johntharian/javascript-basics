
var array=[]
function addnew(){
    var name=prompt("What name would you like to add?")
    array.push(name);
}

function remove(){
    var remname=prompt("What name would you like to remove?")
    var index=array.indexOf(remname);
    array.splice(index,1)
}
    

function dislpay(){
    console.log(array):
}

var start=prompt("Would you like to start the roster web app? y/n")
var request="empty";

if(start==="y"){
    while(request!="quit"){
        request=prompt("Please select an action: add,remove,display, or quit.")
        if(request==='add'){
            addnew();
        }
        else if(request==='display'){
            dislpay();
        }
        else if(request==='remove'){
            remove();
        }
        else{
            alert("Not recognised")
        }
    }
}
alert("Thanks for using the Web App! Please refresh to start over!");
