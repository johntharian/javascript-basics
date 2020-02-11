var countries=["USA","Germany","Japan"]
var i=0;
console.log(countries)
while(i<3){
    console.log(countries[i]);
    i++;
}
// arrays are mutable
countries[2]="Spain";
console.log(countries);

// mixed data types

var mixed=[true,20,"string"]
console.log(mixed.length)
console.log(mixed)


var myarray=["one","two","three"]
console.log(myarray)
var lastitem=myarray.pop()
console.log(myarray) 
myarray.push("three","four")
console.log(myarray)


// nested array
var matrix=[[1,2,3],[4,5,6],[7,8,9]]
console.log(matrix.length)
console.log(matrix)


// matrix iteration
for(var i=0;i<matrix.length;i++){
    for(var j=0;j<matrix.length;j++){
        console.log(matrix[i][j])
    }
}


// array  iteration
for (element of myarray){
    console.log(element )
} 

for(letter of myarray){
    alert(letter);
}
  
myarray.forEach(alert)
