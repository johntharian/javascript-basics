var fname=prompt("Enter your first name: ");
var n1=fname[0];
var lname=prompt("Enter your last name: ");
var n2=lname[0];
var age=prompt("Enter your age: ");
var h=prompt("Enter your height: ");
var pname=prompt("Enter your pet name: ");
var l=pname.length;
var p=pname[l-1];

if(n1==n2){
    if(age>20){
        if(age<30){
            if(h>=170){
                if(p=="y"){
                    console.log("SPY")
                }
            }
        }
    }
}