var name = "Ivan";
var age = 10;
var ages=[10,20,30];
console.log('hello world');
//loops are normal
//while loop is the same
//
console.log("for loop");
for(var i = 0; i<ages.length; i++)
{
    console.log(ages[i]);
}
console.log("forof loop")
for (const age of ages) {
    console.log(age);
}
//if are the same  with else and else if

//ternary if statment
var resault = age%2 == 0 ? 'even' : 'odd'
console.log(resault);


console.log();
//function are defined by saying function
//argumets dont need types
function addition (num1,  num2){
console.log(num1+num2);
}
addition(10,20);
addition(30,20);


// use let not var because var causes hoisting