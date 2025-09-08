
//for changing text

function changeText(){
    document.getElementById("demo").innerHTML = "Hello Javascript";
    }
    
    //Arrow function --> before
    let myFunction = function(a,b) {

        
        return a*b};
    console.log(myFunction(3,4));
    
    //Arrow function --> After  --> straight paramters and the sum of the values
    let myyfunction = (a,b) => a+b;
    console.log(myyfunction(1,2));
    
    
    //paramters vs arguments -> function(a,b) {return a+b} these are paramters but console.log(1,3) these are arguments}
    

    //making an object in js
    
    let car={
        type: 'Sedan',
        name: 'Creta',
        Color: 'black'
    }
    console.log(car);
    
    // condtional operator 

    let marks = 85;
    if(marks >= 90){
        console.log("A++ grade");
    }
    else if(marks >= 70){
        console.log("A grade");
    }
    else{
        console.log("Grade B")
    }

//for loop while loop
for(let i =1 ; i<=5;i++){
    console.log(i);
}

 let j =1 ;
  while(j<= 5){
    console.log(j);
    j++;
  }

//arrow function
let sum= (a,b) => a+b;
console.log(sum(3,4));

//array and methods in javascript

let cars= ['BMW', 'Audi', 'Mercedes'];
cars.push('Rolla Rlence');

console.log(cars);
cars.forEach(fruits => console.log(cars));

//learning map and filter

let number= [1,2,3,4,5];
let newNumbers = number.map((num) => num+1);
console.log(newNumbers);

let evens = number.filter((num) => num %2 ==0)
console.log(evens);

let sum1 = newNumbers.reduce((acc,curr) => acc + curr,0);
console.log(sum1);

//stringmanipulation
 let str= "javascript starters ";
console.log(str.length);
console.log(str.trim());
console.log(str.slice(0,3));
console.log(str.replace('starters', 'first'));
console.log(str.split(" "));