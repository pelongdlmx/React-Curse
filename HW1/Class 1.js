//Ejercicio 1

var store = ["Headphones","Keyboard","Mouse","Mother Board","Charger","Battery","Monitor","Processor","RAM Memory","Video Card","HDD","Power Supply"];
var expensiveItems = ["Mother Board","Monitor","Video Card","Power Supply","Processor"];
console.log('Print cheap Elements out of these two arrays?');

var result = store.filter(
    function(item){
    return !expensiveItems.includes(item)
})
console.log(result)

//Ejercicio 2 

var technologyPool = "JavaScript,React,CSS,React,React,JavaScript,JavaScript,JavaScript,JavaScript,JavaScript,JavaScript,JavaScript,JavaScript,JavaScript,JavaScript,JavaScript,JavaScript,JavaScript,JavaScript,JavaScript,JavaScript,JavaScript,JavaScript,JavaScript,JavaScript,JavaScript,JavaScript,JavaScript,JavaScript,JavaScript,JavaScript,JavaScript,JavaScript,JavaScript,JavaScript,JavaScript,JavaScript,JavaScript,JavaScript,JavaScript,JavaScript,JavaScript,JavaScript,React,React,React,React,React,React,React,React,React,React,React,React,React,React,React,React,React,React,JavaScript,React,CSS,CSS,React,JavaScript,CSS,JavaScript,CSS,React,JavaScript,PHP,React,PHP,React,PHP,React,PHP,PHP,JavaScript,PHP,PHP,JavaScript,JavaScript,JavaScript,JavaScript,JavaScript,C++,React,React,React,React,React,CSS,CSS,CSS,JavaScript,JavaScript,JavaScript,JavaScript,C++";
var technologyPoolStr = technologyPool.split(",");
var count = {};

technologyPoolStr.forEach(function(i) {count[i] = (count[i]||0) + 1;});
 
var names = Object.keys(count);
var total = Object.values(count);
var totalNames = names.length;
var maxim = 0; 
var nameMaxim = "";

for(var i=0; i<totalNames; i++){
  if(maxim < total [i]){
      maxim = total [i];
      nameMaxim = names[i];
  }
}



console.log('Print which technology is the most popular one?' + " " + "The most popular technology is: " + nameMaxim + " with a total mount of: " + maxim);



