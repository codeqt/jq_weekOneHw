//Veronica Lopez-Doherty | HW1 9/8/21

let angle1 = parseInt(prompt("Enter degree of first angle:")); //gets first angle
let angle2 = parseInt(prompt("Enter degree of second angle:")); //gets second angle 

let sum = angle1 + angle2; //sum of both known angles

let thirdD = 180-sum; //finds missing angle

alert("Here is the degree of the missing angle: \n" + thirdD); //value of missing degree