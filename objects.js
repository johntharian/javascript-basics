var car_info={make:"Toyota",year:"1999",model:"Camry"};
console.log(car_info["make"]);
console.log(car_info);

var newo={a:"hello",b:[1,2,3],c:{inside:[1,2,3]}};
console.log(newo['b']);
console.log(newo['b'][1]);

newo['b'][1]=7 ;
console.log(newo['b']);

console.dir(newo);

for (element in newo){
    console.log(element);
    console.log(newo[element]);
}

