"use strict"
 
console.log("Solution:1");
let x=21;
if(x%400==0)
console.log("Leap year");
else if(x%100==0)
console.log("Not a Leap year");
else if(x%4==0)
console.log("Leap year");
else
console.log("Not a Leap Year");

console.log();
let c0="60°C";
let f0="45°f";
console.log("Solution:2");
let f=9*parseFloat(c0)/5+32;
f=String(f+"°f");
console.log(c0 +" is "+f);
let c=5*(parseFloat(f0)-32)/9.0;
c=String(c+"°C");
console.log(f0+" is "+c);

console.log()
console.log("solution:3");
let num=5;
let fact=1;
for(let i=1;i<=5;i++)
fact=fact*i;
console.log(fact);