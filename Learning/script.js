
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
    
    