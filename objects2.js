var simple={
    prop:"Hello",
    method:function(){
        console.log("The  method was called")
    }
}
console.log(simple);
simple.method()

var myobj={
    name:"john",
    greet:function(){
        console.log("Hello " + this.name)
    }
}

myobj.greet();


var me={
    // x=prompt("Enter your name : ")
    welcome:function(x){
       console.log("Welcome " + x );
    }
}

y=prompt("Enter name: ")
me.welcome(y)
